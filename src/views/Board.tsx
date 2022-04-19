import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import { getBoardCardsThunk } from '../store/cards'
import { getBoardListsThunk } from '../store/lists'
import { RootState, useAppDispatch } from '../store/store'
import { ListContainer } from './ListContainer'
import { PageContainer } from './PageContainer'

const BoardRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 6px;
    height: 100%;
    padding: ${({ theme: { spacing } }) => css`0 ${spacing.s10} ${spacing.s4} ${spacing.s10}`};
`

export const Board = () => {
    const dispatch = useAppDispatch()
    const { lists, error, isLoading } = useSelector((state: RootState) => state.listsReducer)

    useEffect(() => {
        dispatch(getBoardListsThunk())
        dispatch(getBoardCardsThunk())
    }, [dispatch])

    return (
        <PageContainer>
            <BoardRow>
                {isLoading && <p>Loading</p>}
                {error && <p>Error</p>}
                {Object.values(lists).map(list => (
                    <ListContainer key={list.id} list={list} />
                ))}
            </BoardRow>
        </PageContainer>
    )
}
