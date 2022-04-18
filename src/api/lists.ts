import axios from 'axios'
import { listsReponseValidator, ListsResponse } from '../schema/lists'
import { getApiUrl } from './utils'

const LISTS_URL_PARAM = 'lists'
const LISTS_ENDPOINT = getApiUrl(LISTS_URL_PARAM)

export const getAllLists = async (): Promise<ListsResponse> => {
    const response = await axios.get(LISTS_ENDPOINT)
    return listsReponseValidator.parse(response.data)
}
