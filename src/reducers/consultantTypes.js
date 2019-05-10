import { SET_APPOINTMENT_SLOTS } from '../actionTypes'
import consultantTypes from '../constants/consultantTypes'

const consultantTypesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_APPOINTMENT_SLOTS:
      const types = action.payload.reduce(
        (acc, curr) => [...acc, ...curr.consultantType],
        []
      )

      return [...new Set(types)]
        .sort()
        .map(type => consultantTypes[type] || type)

    default:
      return state
  }
}

export default consultantTypesReducer
