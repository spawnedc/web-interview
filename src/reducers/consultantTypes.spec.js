import { SET_APPOINTMENT_SLOTS } from '../actionTypes'
import reducer from './consultantTypes'

describe('reducers/consultantTypes', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should return the consultant types', () => {
    const types = [
      {
        consultantType: ['gp', 'specialist'],
      },
      {
        consultantType: ['therapist', 'specialist', 'nurse'],
      },
      {
        consultantType: ['nurse', 'gp'],
      },
    ]
    const action = {
      type: SET_APPOINTMENT_SLOTS,
      payload: types,
    }
    expect(reducer({}, action)).toEqual([
      'GP',
      'nurse',
      'Specialist',
      'Therapist',
    ])
  })
})
