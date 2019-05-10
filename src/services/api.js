import moment from 'moment'
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

const today = moment(new Date())

export const getAvailableSlots = async () => {
  const slots = await makeGetRequest(`${API_ENDPOINT}/availableSlots`)

  if (slots) {
    const formattedSlots = slots
      .map(slot => {
        const slotTime = moment(slot.time)
        const isToday = today.isSame(slotTime, 'day')
        // This part probably can be done better by checking
        // if it's the same year as well. We can add the year if it's not the
        // current one
        const displayValue = isToday
          ? `Today ${slotTime.format('HH:MM')}`
          : slotTime.format('D MMM @ HH:MM')
        return {
          ...slot,
          displayValue,
        }
      })
      .sort((a, b) => a.time.localeCompare(b.time))

    return formattedSlots
  }

  return slots
}

export const getUser = userId =>
  makeGetRequest(`${API_ENDPOINT}/users/${userId}`)

export const bookAppointment = async appointment => {
  try {
    const response = await fetch(`${API_ENDPOINT}/appointments`, {
      method: 'post',
      body: JSON.stringify(appointment),
    })
    const json = await response.json()
    return json
  } catch (e) {
    console.error(e)
    return null
  }
}
