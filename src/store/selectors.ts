import { createSelector } from '@reduxjs/toolkit'
import { ListId } from '../schema/lists'
import { RootState } from './store'

export const getCardsByListId = (listId: ListId) =>
    createSelector(
        (state: RootState) => state.cardsReducer.cards,
        cards => Object.values(cards).filter(card => card.idList === listId)
    )
