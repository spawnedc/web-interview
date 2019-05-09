import { SET_APPOINTMENT_SLOTS, SET_CONSULTANT_TYPE } from '../actionTypes'

const initialState = {
  all: [],
  available: [],
}

const appointmentSlotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPOINTMENT_SLOTS:
      return {
        ...state,
        all: action.payload,
      }

    case SET_CONSULTANT_TYPE:
      return {
        ...state,
        available: state.all.filter(slot =>
          slot.consultantType.includes(action.payload)
        ),
      }

    default:
      return state
  }
}

export default appointmentSlotsReducer
