import { Card, CardAttachment, CardCover } from '../schema/cards'
import { getCoverImageData } from './cards'

describe('getCoverImageData', () => {
    const coverWithId: CardCover = { idAttachment: '1' }
    const attachment: CardAttachment = { id: '1', name: 'test', url: 'url' }

    it('should find cover image in attachments', () => {
        const cardWithAttachment: Card = {
            id: '',
            idList: '',
            name: '',
            labels: [],
            cover: coverWithId,
            attachments: [attachment],
        }

        expect(getCoverImageData(cardWithAttachment)).toEqual(attachment)
    })

    it('should return null if cover has no image', () => {
        const coverWithoutId: CardCover = { idAttachment: null }
        const cardWithEmptyCover: Card = {
            id: '',
            idList: '',
            name: '',
            labels: [],
            cover: coverWithoutId,
            attachments: [attachment],
        }
        expect(getCoverImageData(cardWithEmptyCover)).toEqual(null)
    })

    it('should return null if no attachment was found', () => {
        const cardWithoutAttachment: Card = {
            id: '',
            idList: '',
            name: '',
            labels: [],
            cover: coverWithId,
            attachments: [],
        }
        expect(getCoverImageData(cardWithoutAttachment)).toEqual(null)
    })
})
