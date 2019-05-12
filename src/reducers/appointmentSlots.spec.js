import { SET_APPOINTMENT_SLOTS, SET_CONSULTANT_TYPE } from '../actionTypes'
import reducer from './appointmentSlots'

const initialState = {
  all: [],
  available: [],
}

describe('reducers/appointmentSlots', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should return the appointment slots', () => {
    const appointmentSlots = [
      {
        id: 1,
        consultantType: ['gp', 'specialist'],
      },
      {
        id: 2,
        consultantType: ['therapist', 'specialist', 'nurse'],
      },
      {
        id: 3,
        consultantType: ['nurse', 'gp'],
      },
    ]
    const action = {
      type: SET_APPOINTMENT_SLOTS,
      payload: appointmentSlots,
    }
    expect(reducer(initialState, action)).toEqual({
      all: appointmentSlots,
      available: [],
    })
  })

  it('should return the available slots', () => {
    const state = {
      all: [
        {
          id: 1,
          consultantType: ['gp', 'specialist'],
        },
        {
          id: 2,
          consultantType: ['therapist', 'specialist', 'nurse'],
        },
        {
          id: 3,
          consultantType: ['nurse', 'gp'],
        },
      ],
      available: [],
    }
    const action = {
      type: SET_CONSULTANT_TYPE,
      payload: 'Therapist',
    }
    expect(reducer(state, action)).toEqual({
      all: state.all,
      available: [state.all[1]],
    })
  })
})
