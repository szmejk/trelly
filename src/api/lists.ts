import axios from 'axios'
import { getApiUrl } from './utils'

const LISTS_URL_PARAM = 'lists'
const LISTS_ENDPOINT = getApiUrl(LISTS_URL_PARAM)

export const getAllLists = async (): Promise<unknown> => {
    const response = await axios.get(LISTS_ENDPOINT)
    return response.data
}
