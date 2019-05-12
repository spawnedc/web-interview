import {
  RESET_APPOINTMENT,
  SET_APPOINTMENT_NOTES,
  SET_APPOINTMENT_SLOT,
  SET_APPOINTMENT_TYPE,
  SET_CONSULTANT_TYPE,
} from '../actionTypes'

const initialState = {
  consultantType: null,
  selectedSlot: null,
  appointmentType: null,
  notes: null,
}

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONSULTANT_TYPE:
      return {
        ...state,
        appointmentType: initialState.appointmentType,
        consultantType: action.payload,
        selectedSlot: initialState.selectedSlot,
      }

    case SET_APPOINTMENT_SLOT:
      return {
        ...state,
        appointmentType: initialState.appointmentType,
        selectedSlot: action.payload,
      }

    case SET_APPOINTMENT_TYPE:
      return {
        ...state,
        appointmentType: action.payload,
      }

    case SET_APPOINTMENT_NOTES:
      return {
        ...state,
        notes: action.payload,
      }

    case RESET_APPOINTMENT:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default appointmentReducer
