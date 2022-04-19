import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        90deg,
        ${({ theme: { colors } }) => colors.neonOrange},
        ${({ theme: { colors } }) => colors.neonRed}
    );

    overflow-x: auto;
    ::-webkit-scrollbar {
        background: transparent;
        padding: 4px 0;
    }
    ::-webkit-scrollbar-thumb {
        background: #ffffff38;
        border-radius: 5px;
    }
`

const Header = styled.header`
    position: sticky;
    left: 0px;
    width: 100%;
    padding: ${({ theme: { spacing } }) =>
        css`
            ${spacing.s8} ${spacing.s16}
        `};
`

const PageTitle = styled.h1`
    font-size: ${({ theme: { fontSize } }) => fontSize.s20};
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.white};
`

const Main = styled.main`
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 90%;
`

export const PageContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Wrapper>
            <Header>
                <PageTitle>Trelly</PageTitle>
            </Header>
            <Main>{children}</Main>
        </Wrapper>
    )
}
