import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { getBoardCardsThunk } from '../store/cards'
import { getBoardListsThunk } from '../store/lists'
import { RootState, useAppDispatch } from '../store/store'
import { ListContainer } from './ListContainer'

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

export const Board = () => {
    const dispatch = useAppDispatch()
    const { lists, error, isLoading } = useSelector((state: RootState) => state.listsReducer)

    useEffect(() => {
        dispatch(getBoardListsThunk())
        dispatch(getBoardCardsThunk())
    }, [dispatch])

    return (
        <div>
            Board
            <FlexColumn>
                <FlexRow>
                    {isLoading && <p>Loading</p>}
                    {error && <p>Error</p>}
                    {Object.values(lists).map(list => (
                        <ListContainer key={list.id} list={list} />
                    ))}
                </FlexRow>
            </FlexColumn>
        </div>
    )
}
