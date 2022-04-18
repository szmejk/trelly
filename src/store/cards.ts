import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllCards } from '../api/cards'
import { Card, CardsResponse } from '../schema/cards'
import { resetCommonState, setErrorState, setLoadingState } from './utils'

type CardsState = {
    cards: StringMap<Card>
} & CommonReduxState

const initialState: CardsState = {
    isLoading: false,
    error: false,
    errorMessage: '',
    cards: {},
}

export const getBoardCardsThunk = createAsyncThunk<CardsResponse>('cards/get', async (_, { rejectWithValue }) => {
    try {
        const response = await getAllCards()
        return response
    } catch (e: unknown) {
        return rejectWithValue('error')
    }
})

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        removeCards: state => {
            state.cards = {}
        },
    },
    extraReducers: builder => {
        builder.addCase(getBoardCardsThunk.fulfilled, (state, { payload }) => {
            resetCommonState(state)
            state.cards = payload.reduce<StringMap<Card>>((acc, card) => {
                acc[card.id] = card
                return acc
            }, {})
        })
        builder.addCase(getBoardCardsThunk.pending, state => {
            setLoadingState(state)
        })
        builder.addCase(getBoardCardsThunk.rejected, state => {
            setErrorState(state)
        })
    },
})

const { reducer, actions } = cardsSlice
export const cardsActions = actions
export const cardsReducer = reducer
