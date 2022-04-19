import { z } from 'zod'

export const cardLabelColorsValidator = z.union([
    z.literal('green'),
    z.literal('yellow'),
    z.literal('orange'),
    z.literal('red'),
    z.literal('purple'),
    z.literal('blue'),
])

export type CardLabelColors = z.infer<typeof cardLabelColorsValidator>

export const cardLabelValidator = z.object({
    id: z.string(),
    color: cardLabelColorsValidator,
})

export type CardLabel = z.infer<typeof cardLabelValidator>

export const cardCoverValidator = z.union([
    z.object({
        idAttachment: z.null(),
    }),
    z.object({
        idAttachment: z.string(),
    }),
])

export type CardCover = z.infer<typeof cardCoverValidator>

export const cardAttachmentValidator = z.object({
    id: z.string(),
    name: z.string(),
    url: z.string(),
})

export type CardAttachment = z.infer<typeof cardAttachmentValidator>

export const cardValidator = z.object({
    id: z.string(),
    idList: z.string(),
    name: z.string(),
    labels: z.array(cardLabelValidator),
    cover: cardCoverValidator,
    attachments: z.array(cardAttachmentValidator),
})

export type CardSchema = z.infer<typeof cardValidator>

export const cardsResponseValidator = z.array(cardValidator)

export type CardsResponse = z.infer<typeof cardsResponseValidator>
