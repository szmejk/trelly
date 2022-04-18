import { z } from 'zod'

export const listValidator = z.object({
    id: z.string(),
    name: z.string(),
})

export type List = z.infer<typeof listValidator>

export const listsReponseValidator = z.array(listValidator)

export type ListsResponse = z.infer<typeof listsReponseValidator>
