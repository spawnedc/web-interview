import {
  RESET_APPOINTMENT,
  SET_APPOINTMENT_NOTES,
  SET_APPOINTMENT_SLOT,
  SET_APPOINTMENT_TYPE,
  SET_CONSULTANT_TYPE,
} from '../actionTypes'

import {
  setConsultantType,
  setSelectedSlot,
  setAppointmentType,
  setAppointmentNotes,
  resetAppointment,
} from './appointment.js'

describe('actions/appointment', () => {
  it('should create an action to set consultant type', () => {
    const type = 'gp'
    const expectedAction = {
      type: SET_CONSULTANT_TYPE,
      payload: type,
    }
    expect(setConsultantType(type)).toEqual(expectedAction)
  })
  it('should create an action to set selected slot', () => {
    const slot = {
      id: 1,
    }
    const expectedAction = {
      type: SET_APPOINTMENT_SLOT,
      payload: slot,
    }
    expect(setSelectedSlot(slot)).toEqual(expectedAction)
  })
  it('should create an action to set appointment type', () => {
    const type = 'video'
    const expectedAction = {
      type: SET_APPOINTMENT_TYPE,
      payload: type,
    }
    expect(setAppointmentType(type)).toEqual(expectedAction)
  })
  it('should create an action to set appointment notes', () => {
    const notes = 'I am dying!'
    const expectedAction = {
      type: SET_APPOINTMENT_NOTES,
      payload: notes,
    }
    expect(setAppointmentNotes(notes)).toEqual(expectedAction)
  })
  it('should create an action to reset appointment', () => {
    const expectedAction = {
      type: RESET_APPOINTMENT,
    }
    expect(resetAppointment()).toEqual(expectedAction)
  })
})
