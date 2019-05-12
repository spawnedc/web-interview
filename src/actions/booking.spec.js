import {
  BOOKING_FAILURE,
  BOOKING_SUCCESS,
  RESET_BOOKING,
  START_BOOKING,
} from '../actionTypes'
import {
  resetBooking,
  startBooking,
  bookingSuccess,
  bookingFailure,
} from './booking.js'

describe('actions/booking', () => {
  it('should create an action to reset booking', () => {
    const expectedAction = {
      type: RESET_BOOKING,
    }
    expect(resetBooking()).toEqual(expectedAction)
  })
  it('should create an action to start booking', () => {
    const expectedAction = {
      type: START_BOOKING,
    }
    expect(startBooking()).toEqual(expectedAction)
  })
  it('should create an action for booking success', () => {
    const appointment = {
      id: 1,
    }
    const expectedAction = {
      type: BOOKING_SUCCESS,
      payload: appointment,
    }
    expect(bookingSuccess(appointment)).toEqual(expectedAction)
  })
  it('should create an action for booking failure', () => {
    const error = 'oops'
    const expectedAction = {
      type: BOOKING_FAILURE,
      payload: error,
    }
    expect(bookingFailure(error)).toEqual(expectedAction)
  })
})
