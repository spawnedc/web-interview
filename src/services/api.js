import { API_ENDPOINT } from '../config'

const makeGetRequest = async url => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getAvailableSlots = () =>
  makeGetRequest(`${API_ENDPOINT}/availableSlots`)

export const getUser = userId =>
  makeGetRequest(`${API_ENDPOINT}/user/${userId}`)
