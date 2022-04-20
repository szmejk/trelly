import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import { getBoardCardsThunk } from '../store/cards'
import { getBoardListsThunk } from '../store/lists'
import { RootState, useAppDispatch } from '../store/store'
import { ListContainer } from './ListContainer'
import { PageContainer } from './PageContainer'
import { colors } from '../styles/colors'
import { Loader } from '../components/Loader'

const BoardRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 6px;
    height: 100%;
    padding: ${({ theme: { spacing } }) => css`0 ${spacing.s10} ${spacing.s4} ${spacing.s10}`};
`

const BoardInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: ${({ theme: { spacing } }) => css`0 ${spacing.s10}`};
`

const BoardError = styled.h3`
    color: ${({ theme: { colors } }) => colors.white};
    font-size: ${({ theme: { fontSize } }) => fontSize.s20};
    font-weight: 600;
`

export const Board = () => {
    const dispatch = useAppDispatch()
    const { lists, isLoading, error, errorMessage } = useSelector((state: RootState) => state.listsReducer)

    useEffect(() => {
        dispatch(getBoardListsThunk())
        dispatch(getBoardCardsThunk())
    }, [dispatch])

    return (
        <PageContainer>
            {error && (
                <BoardInfo>
                    <BoardError>{errorMessage}</BoardError>
                </BoardInfo>
            )}
            {isLoading && (
                <BoardInfo>
                    <Loader color={colors.white} size={150} />
                </BoardInfo>
            )}
            {!isLoading && !error && (
                <BoardRow>
                    {Object.values(lists).map(list => (
                        <ListContainer key={list.id} list={list} />
                    ))}
                </BoardRow>
            )}
        </PageContainer>
    )
}
