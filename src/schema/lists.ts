import { z } from 'zod'

export type ListId = Flavor<string, 'listId'>

export const listValidator = z.object({
    id: z.string().transform(id => id as ListId),
    name: z.string(),
})

export type ListSchema = z.infer<typeof listValidator>

export const listsReponseValidator = z.array(listValidator)

export type ListsResponse = z.infer<typeof listsReponseValidator>
