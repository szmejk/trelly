import axios from 'axios'
import { CardsResponse, cardsResponseValidator } from '../schema/cards'
import { getApiUrl, getBaseApiUrl } from './utils'

export const CARDS_URL_RESOURCE = 'cards'
export const CARDS_URL_PARAM = 'attachments=true&'

export const BASE_CARDS_ENDPOINT = getBaseApiUrl(CARDS_URL_RESOURCE)
export const CARDS_ENDPOINT = getApiUrl(CARDS_URL_RESOURCE, CARDS_URL_PARAM)

export const getAllCards = async (): Promise<CardsResponse> => {
    const response = await axios.get(CARDS_ENDPOINT)
    return cardsResponseValidator.parse(response.data)
}
