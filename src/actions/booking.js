import {
  BOOKING_FAILURE,
  BOOKING_SUCCESS,
  RESET_BOOKING,
  START_BOOKING,
} from '../actionTypes'

export const resetBooking = () => ({
  type: RESET_BOOKING,
})

export const startBooking = () => ({
  type: START_BOOKING,
})

export const bookingSuccess = appointment => ({
  type: BOOKING_SUCCESS,
  payload: appointment,
})

export const bookingFailure = error => ({
  type: BOOKING_FAILURE,
  payload: error,
})
