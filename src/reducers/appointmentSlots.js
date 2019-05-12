import { SET_APPOINTMENT_SLOTS, SET_CONSULTANT_TYPE } from '../actionTypes'
import consultantTypeMap from '../constants/consultantTypes'

const initialState = {
  all: [],
  available: [],
}

const appointmentSlotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPOINTMENT_SLOTS:
      return {
        ...initialState,
        all: action.payload,
      }

    case SET_CONSULTANT_TYPE:
      const typeIndex = Object.values(consultantTypeMap).indexOf(action.payload)
      const typeKey = Object.keys(consultantTypeMap)[typeIndex]
      return {
        ...state,
        available: state.all.filter(slot =>
          slot.consultantType.includes(typeKey || action.payload)
        ),
      }

    default:
      return state
  }
}

export default appointmentSlotsReducer
