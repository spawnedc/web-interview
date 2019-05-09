import { SET_APPOINTMENT_SLOTS } from '../actionTypes'

const consultantTypesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_APPOINTMENT_SLOTS:
      const consultantTypes = action.payload.reduce(
        (acc, curr) => [...acc, ...curr.consultantType],
        []
      )
      return [...new Set(consultantTypes)].sort()

    default:
      return state
  }
}

export default consultantTypesReducer
