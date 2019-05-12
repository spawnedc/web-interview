import {
  RESET_APPOINTMENT,
  SET_APPOINTMENT_NOTES,
  SET_APPOINTMENT_SLOT,
  SET_APPOINTMENT_TYPE,
  SET_CONSULTANT_TYPE,
} from '../actionTypes'
import reducer from './appointment'

const initialState = {
  consultantType: null,
  selectedSlot: null,
  appointmentType: null,
  notes: null,
}

describe('reducers/appointment', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('actions', () => {
    let state
    beforeEach(() => {
      state = {
        consultantType: 'gp',
        selectedSlot: { id: 3 },
        appointmentType: 'video',
        notes: 'I am dying',
      }
    })

    it('should reset the appointment', () => {
      const action = {
        type: RESET_APPOINTMENT,
      }
      expect(reducer(state, action)).toEqual(initialState)
    })

    it('should set the consultant type', () => {
      const action = {
        type: SET_CONSULTANT_TYPE,
        payload: 'nurse',
      }
      const expectedState = {
        ...state,
        appointmentType: null,
        consultantType: 'nurse',
        selectedSlot: null,
      }
      expect(reducer(state, action)).toEqual(expectedState)
    })

    it('should set the appointment slot', () => {
      const action = {
        type: SET_APPOINTMENT_SLOT,
        payload: {
          id: 3,
        },
      }
      const expectedState = {
        ...state,
        appointmentType: null,
        selectedSlot: action.payload,
      }
      expect(reducer(state, action)).toEqual(expectedState)
    })

    it('should set the appointment type', () => {
      const action = {
        type: SET_APPOINTMENT_TYPE,
        payload: 'audio',
      }
      const expectedState = {
        ...state,
        appointmentType: 'audio',
      }
      expect(reducer(state, action)).toEqual(expectedState)
    })

    it('should set the appointment notes', () => {
      const note = 'Actually, I started to feel better!'
      const action = {
        type: SET_APPOINTMENT_NOTES,
        payload: note,
      }
      const expectedState = {
        ...state,
        notes: note,
      }
      expect(reducer(state, action)).toEqual(expectedState)
    })
  })
})
