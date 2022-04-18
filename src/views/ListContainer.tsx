import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Card, CardLabel } from '../schema/cards'
import { List } from '../schema/lists'
import { getCardsByListId } from '../store/selectors'
import { RootState } from '../store/store'

type ListContainerProps = {
    list: List
}

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const FlexRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const ListContainer: React.FC<ListContainerProps> = ({ list: { id, name } }) => {
    const { error: cardError, isLoading: isCardLoading } = useSelector((state: RootState) => state.cardsReducer)
    const cards = useSelector(getCardsByListId(id))
    return (
        <FlexColumn>
            {name}
            {isCardLoading && <p>Loading</p>}
            {cardError && <p>Error</p>}
            {Object.values(cards).map((card: Card) => (
                <FlexRow key={card.id}>
                    <p>{card.name}</p> <p>{card.labels?.map((label: CardLabel) => label.name)}</p>
                    {/* {card.attachments.length > 0 && card.cover.idAttachment !== null && <ImgWrapped src={card.cover.scaled[3].url} />} */}
                </FlexRow>
            ))}
        </FlexColumn>
    )
}
