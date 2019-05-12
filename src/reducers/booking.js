import {
  RESET_BOOKING,
  START_BOOKING,
  BOOKING_SUCCESS,
  BOOKING_FAILURE,
} from '../actionTypes'
import bookingStatus from '../constants/bookingStatus'

const initialState = {
  appointment: null,
  status: bookingStatus.IDLE,
  error: null,
}

const appointmentSlotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_BOOKING:
      return {
        ...initialState,
      }

    case START_BOOKING:
      return {
        ...state,
        status: bookingStatus.IN_PROGRESS,
      }

    case BOOKING_SUCCESS:
      return {
        ...state,
        status: bookingStatus.SUCCESS,
        appointment: action.payload,
      }

    case BOOKING_FAILURE:
      return {
        ...state,
        status: bookingStatus.FAILURE,
        error: action.payload,
      }

    default:
      return state
  }
}

export default appointmentSlotsReducer
