import { z } from 'zod'

export const cardLabelValidator = z.object({
    id: z.string(),
    name: z.string(),
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

export type CardAttachmentCover = z.infer<typeof cardAttachmentValidator>

export const cardValidator = z.object({
    id: z.string(),
    idList: z.string(),
    name: z.string(),
    labels: z.array(cardLabelValidator),
    cover: cardCoverValidator,
    attachments: z.array(cardAttachmentValidator),
})

export type Card = z.infer<typeof cardValidator>

export const cardsResponseValidator = z.array(cardValidator)

export type CardsResponse = z.infer<typeof cardsResponseValidator>
