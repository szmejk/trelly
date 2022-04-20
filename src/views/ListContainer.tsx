import React from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import { List } from '../components/List'
import { Loader } from '../components/Loader'
import { ListSchema } from '../schema/lists'
import { getCardsByListId } from '../store/selectors'
import { RootState } from '../store/store'
import { colors } from '../styles/colors'
import { CardContainer } from './CardContainer'

type ListContainerProps = {
    list: ListSchema
}

const ListError = styled.h3`
    padding: ${({ theme: { spacing } }) =>
        css`
            ${spacing.s16} 0
        `};
    font-size: ${({ theme: { fontSize } }) => fontSize.s14};
    font-weight: 500;
`

export const ListContainer: React.FC<ListContainerProps> = ({ list: { id, name } }) => {
    const { isLoading, error, errorMessage } = useSelector((state: RootState) => state.cardsReducer)
    const cards = useSelector(getCardsByListId(id))

    return (
        <List name={name}>
            {error && <ListError>{errorMessage}</ListError>}
            {isLoading && <Loader color={colors.neonOrange} size={50} />}
            {Object.values(cards).map(card => (
                <CardContainer key={card.id} card={card} />
            ))}
        </List>
    )
}
