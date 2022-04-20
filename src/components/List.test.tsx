import React from 'react'
import { render, screen } from '../utils/testUtils'
import { List } from './List'

describe('List', () => {
    const name = 'Test list'
    const childText = 'Child'

    it('displays given title', () => {
        render(<List name={name} />)

        expect(screen.getByText(name)).toBeInTheDocument()
    })

    it('displays given title and children', () => {
        render(
            <List name={name}>
                <div>{childText}</div>
            </List>
        )

        expect(screen.getByText(name)).toBeInTheDocument()
        expect(screen.getByText(childText)).toBeInTheDocument()
    })
})
