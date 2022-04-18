import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { cardsReducer } from './cards'
import { listsReducer } from './lists'

export const store = configureStore({ reducer: { listsReducer, cardsReducer } })

export type ReduxStore = typeof store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
