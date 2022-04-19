import { CardSchema, CardAttachment } from '../schema/cards'

export const getCoverImageData = (card: CardSchema): CardAttachment | null => {
    if (!card.cover.idAttachment) return null

    const maybeAttachment = card.attachments.find(attachment => attachment.id === card.cover.idAttachment)

    return maybeAttachment || null
}
