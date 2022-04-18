import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'

export const getCardsByListId = (listId: string) =>
    createSelector(
        (state: RootState) => state.cardsReducer.cards,
        cards => Object.values(cards).filter(card => card.idList === listId)
    )
