import React, { useMemo } from 'react'
import { Card } from '../components/Card'
import { CardSchema } from '../schema/cards'
import { getCoverImageData } from '../utils/cards'

type CardContainerProps = {
    card: CardSchema
}

export const CardContainer: React.FC<CardContainerProps> = ({ card }) => {
    const image = useMemo(() => getCoverImageData(card), [card])
    const labels = useMemo(() => card.labels.map(label => label.color), [card])

    return <Card key={card.id} title={card.name} image={image} labels={labels} />
}
