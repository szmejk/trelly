import axios from 'axios'
import { CardsResponse, cardsResponseValidator } from '../schema/cards'
import { getApiUrl } from './utils'

const CARDS_URL_RESOURCE = 'cards'
const CARDS_URL_PARAM = 'attachments=true&'

const CARDS_ENDPOINT = getApiUrl(CARDS_URL_RESOURCE, CARDS_URL_PARAM)

export const getAllCards = async (): Promise<CardsResponse> => {
    const response = await axios.get(CARDS_ENDPOINT)
    return cardsResponseValidator.parse(response.data)
}
