import axios from 'axios'
import { listsReponseValidator, ListsResponse } from '../schema/lists'
import { getApiUrl, getBaseApiUrl } from './utils'

export const LISTS_URL_RESOURCE = 'lists'
export const BASE_LISTS_ENDPOINT = getBaseApiUrl(LISTS_URL_RESOURCE)
export const LISTS_ENDPOINT = getApiUrl(LISTS_URL_RESOURCE)

export const getAllLists = async (): Promise<ListsResponse> => {
    const response = await axios.get(LISTS_ENDPOINT)
    return listsReponseValidator.parse(response.data)
}
