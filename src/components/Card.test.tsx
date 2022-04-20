import React from 'react'
import { CardAttachment, CardLabelColors } from '../schema/cards'
import { render, screen } from '../utils/testUtils'
import { Card } from './Card'

describe('Card', () => {
    const title = 'Test title'
    const image: CardAttachment = {
        id: 'id',
        name: 'test image',
        url: 'test_url',
    }
    const labels: CardLabelColors[] = ['green', 'yellow', 'blue']

    it('displays given title', () => {
        render(<Card title={title} />)

        expect(screen.getByText(title)).toBeInTheDocument()
    })

    it('displays given title and image', () => {
        render(<Card title={title} image={image} />)

        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByAltText(image.name)).toBeInTheDocument()
    })

    it('displays given title and labels', () => {
        render(<Card title={title} labels={labels} />)

        expect(screen.getByText(title)).toBeInTheDocument()
        labels.forEach(label => {
            expect(screen.getByLabelText(label, { exact: false })).toBeInTheDocument()
        })
    })

    it('displays given title, labels and image', () => {
        render(<Card title={title} labels={labels} image={image} />)

        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByAltText(image.name)).toBeInTheDocument()

        labels.forEach(label => {
            expect(screen.getByLabelText(label, { exact: false })).toBeInTheDocument()
        })
    })
})
