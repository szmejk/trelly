import { CardSchema, CardsResponse } from '../../schema/cards'
import { ListSchema, ListsResponse } from '../../schema/lists'

export const cardFixture: CardSchema = {
    id: '1',
    idList: '1',
    labels: [
        {
            id: '1',
            color: 'green',
        },
    ],
    name: 'test card name',
    cover: {
        idAttachment: '1',
    },
    attachments: [
        {
            id: '1',
            name: 'test photo name',
            url: 'test_url',
        },
    ],
}

export const cardsResponseFixture: CardsResponse = [cardFixture]

export const listFixture: ListSchema = {
    id: '1',
    name: 'test list',
}

export const listsResponseFixture: ListsResponse = [listFixture]
