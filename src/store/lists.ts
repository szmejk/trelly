import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllLists } from '../api/lists'
import { ListSchema, ListsResponse } from '../schema/lists'
import { resetCommonState, setErrorState, setLoadingState } from './utils'

type ListsState = {
    lists: StringMap<ListSchema>
} & CommonReduxState

const initialState: ListsState = {
    isLoading: false,
    error: false,
    errorMessage: '',
    lists: {},
}

export const getBoardListsThunk = createAsyncThunk<ListsResponse>('lists/get', async (_, { rejectWithValue }) => {
    try {
        const response = await getAllLists()
        return response
    } catch (e: unknown) {
        return rejectWithValue('error')
    }
})

export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        removeLists: state => {
            state.lists = {}
        },
    },
    extraReducers: builder => {
        builder.addCase(getBoardListsThunk.fulfilled, (state, { payload }) => {
            resetCommonState(state)
            state.lists = payload.reduce<StringMap<ListSchema>>((acc, list) => {
                acc[list.id] = list
                return acc
            }, {})
        })
        builder.addCase(getBoardListsThunk.pending, state => {
            setLoadingState(state)
        })
        builder.addCase(getBoardListsThunk.rejected, state => {
            setErrorState(state)
        })
    },
})

const { reducer, actions } = listsSlice
export const listsActions = actions
export const listsReducer = reducer
