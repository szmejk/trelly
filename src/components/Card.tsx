import React from 'react'
import styled, { css } from 'styled-components'
import { CardAttachment, CardLabelColors } from '../schema/cards'

const Wrapper = styled.li`
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(0 0 0 / 10%);
    background-color: ${({ theme: { colors } }) => colors.white};
`

const Image = styled.img`
    display: block;
    width: 100%;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
`

const LabelsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    & > span {
        margin: ${({ theme: { spacing } }) => css`0 ${spacing.s4} ${spacing.s4} 0`};
    }
`

const Label = styled.span<{ color: string }>`
    height: 8px;
    width: 40px;
    border-radius: 4px;
    background-color: ${({ theme: { colors }, color }) => colors.labels[color as keyof typeof colors.labels]};
`

const Content = styled.div`
    padding: ${({ theme: { spacing } }) =>
        css`
            ${spacing.s4} ${spacing.s8} ${spacing.s2}
        `};
`
export type CardProps = {
    title: string
    labels?: CardLabelColors[]
    image?: CardAttachment | null
}

export const Card: React.FC<CardProps> = ({ title, image, labels }) => {
    return (
        <Wrapper>
            {image && <Image src={image.url} alt={image.name} />}
            <Content>
                {labels && (
                    <LabelsSection>
                        {labels.map(label => (
                            <Label key={label} aria-label={`${label} label`} color={label} />
                        ))}
                    </LabelsSection>
                )}
                <p>{title}</p>
            </Content>
        </Wrapper>
    )
}
