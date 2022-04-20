import React from 'react'
import { DefaultRequestBody, PathParams, rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitForElementToBeRemoved } from '../utils/testUtils'
import { Board } from './Board'
import { CardsResponse } from '../schema/cards'
import { BASE_CARDS_ENDPOINT } from '../api/cards'
import { cardFixture, cardsResponseFixture, listFixture, listsResponseFixture } from '../utils/fixtures/board'
import { BASE_LISTS_ENDPOINT } from '../api/lists'
import { ListsResponse } from '../schema/lists'
import { LISTS_ERROR } from '../store/lists'
import { CARDS_ERROR } from '../store/cards'

const handlers = [
    rest.get<DefaultRequestBody, PathParams, CardsResponse>(BASE_CARDS_ENDPOINT, (req, res, ctx) => {
        return res(ctx.json(cardsResponseFixture))
    }),
    rest.get<DefaultRequestBody, PathParams, ListsResponse>(BASE_LISTS_ENDPOINT, (req, res, ctx) => {
        return res(ctx.json(listsResponseFixture))
    }),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Board', () => {
    it('displays list with card after loading', async () => {
        render(<Board />)

        const listLoader = await screen.findByRole('alert')

        expect(listLoader).toBeInTheDocument()

        await waitForElementToBeRemoved(listLoader)

        const listName = await screen.findByText(listFixture.name)

        expect(listName).toBeInTheDocument()

        const cardName = await screen.findByText(cardFixture.name)

        expect(cardName).toBeInTheDocument()
    })

    it('displays error message when failed to fetch lists', async () => {
        server.use(
            rest.get<DefaultRequestBody, PathParams, ListsResponse>(BASE_LISTS_ENDPOINT, (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )

        render(<Board />)

        const listLoader = await screen.findByRole('alert')

        expect(listLoader).toBeInTheDocument()

        await waitForElementToBeRemoved(listLoader)

        const listError = await screen.findByText(LISTS_ERROR)

        expect(listError).toBeInTheDocument()
    })

    it('displays error message when failed to fetch cards', async () => {
        server.use(
            rest.get<DefaultRequestBody, PathParams, ListsResponse>(BASE_CARDS_ENDPOINT, (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )

        render(<Board />)

        const listLoader = await screen.findByRole('alert')

        expect(listLoader).toBeInTheDocument()

        await waitForElementToBeRemoved(listLoader)

        const listName = await screen.findByText(listFixture.name)

        expect(listName).toBeInTheDocument()

        const cardsError = await screen.findByText(CARDS_ERROR)

        expect(cardsError).toBeInTheDocument()
    })
})
