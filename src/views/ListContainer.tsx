import React from 'react'
import { useSelector } from 'react-redux'
import { List } from '../components/List'
import { ListSchema } from '../schema/lists'
import { getCardsByListId } from '../store/selectors'
import { RootState } from '../store/store'
import { CardContainer } from './CardContainer'

type ListContainerProps = {
    list: ListSchema
}

export const ListContainer: React.FC<ListContainerProps> = ({ list: { id, name } }) => {
    const { error: cardError, isLoading: areCardsLoading } = useSelector((state: RootState) => state.cardsReducer)
    const cards = useSelector(getCardsByListId(id))

    return (
        <List name={name}>
            {areCardsLoading && <p>Loading</p>}
            {cardError && <p>Error</p>}
            {Object.values(cards).map(card => (
                <CardContainer key={card.id} card={card} />
            ))}
        </List>
    )
}
