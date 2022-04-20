import React from 'react'
import styled, { css } from 'styled-components'

type ListProps = {
    name: string
    children?: React.ReactNode
}

const Wrapper = styled.article`
    max-height: 100%;
    width: 270px;
    padding: ${({ theme: { spacing } }) =>
        css`
            ${spacing.s6} ${spacing.s8}
        `};
    border-radius: 3px;
    background-color: ${({ theme: { colors } }) => colors.backgroundGray};
    box-shadow: 2px 2px 8px 4px rgb(0 0 0 / 10%);
    overflow-y: auto;
`

const Title = styled.h2`
    padding: ${({ theme: { spacing } }) =>
        css`
            ${spacing.s8} ${spacing.s6}
        `};
    font-size: ${({ theme: { fontSize } }) => fontSize.s14};
`

const ChildrenContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;

    & > li {
        margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
    }
`

export const List: React.FC<ListProps> = ({ name, children }) => {
    return (
        <Wrapper>
            <Title>{name}</Title>
            <ChildrenContainer>{children}</ChildrenContainer>
        </Wrapper>
    )
}
