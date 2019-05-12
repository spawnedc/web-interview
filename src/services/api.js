import moment from 'moment'
import { API_ENDPOINT } from '../config'
import { HOURS_MINUTES, SHORT_DATE_TIME } from '../constants/dateTimeFormats.js'
import { makeGetRequest, makePostRequest } from './utils'

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
          ? `Today ${slotTime.format(HOURS_MINUTES)}`
          : slotTime.format(SHORT_DATE_TIME)
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
  return makePostRequest(`${API_ENDPOINT}/appointments`, appointment)
}
