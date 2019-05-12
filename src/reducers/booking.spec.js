import {
  BOOKING_FAILURE,
  BOOKING_SUCCESS,
  RESET_BOOKING,
  START_BOOKING,
} from '../actionTypes'
import bookingStatus from '../constants/bookingStatus'
import reducer from './booking'

describe('reducers/booking', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      appointment: null,
      status: bookingStatus.IDLE,
      error: null,
    })
  })

  it('should change the status to in progress', () => {
    const action = {
      type: START_BOOKING,
    }
    const newState = reducer(undefined, action)
    expect(newState.status).toEqual(bookingStatus.IN_PROGRESS)
  })

  it('should change the status to success', () => {
    const appointment = { id: 1 }
    const action = {
      type: BOOKING_SUCCESS,
      payload: appointment,
    }
    const newState = reducer(undefined, action)
    expect(newState.status).toEqual(bookingStatus.SUCCESS)
    expect(newState.error).toBeNull()
    expect(newState.appointment).toEqual(appointment)
  })

  it('should change the status to failure', () => {
    const action = {
      type: BOOKING_FAILURE,
      payload: 'oops',
    }
    const newState = reducer(undefined, action)
    expect(newState.status).toEqual(bookingStatus.FAILURE)
    expect(newState.error).toEqual('oops')
  })

  it('should reset the booking', () => {
    const action = {
      type: RESET_BOOKING,
    }
    const existingState = {
      error: 'boo',
      appointment: {
        id: 3,
      },
      status: bookingStatus.FAILURE,
    }
    expect(reducer(existingState, action)).toEqual({
      appointment: null,
      status: bookingStatus.IDLE,
      error: null,
    })
  })
})
