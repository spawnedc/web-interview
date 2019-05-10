import {
  SET_APPOINTMENT_SLOT,
  SET_CONSULTANT_TYPE,
  SET_APPOINTMENT_TYPE,
  SET_APPOINTMENT_NOTES,
} from '../actionTypes'

const initialState = {
  consultantType: null,
  selectedSlot: null,
  appointmentType: null,
  notes: '',
}

const appointmentSlotsReducer = (state = initialState, action) => {
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

    default:
      return state
  }
}

export default appointmentSlotsReducer
