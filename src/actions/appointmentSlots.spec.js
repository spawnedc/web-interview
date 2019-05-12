import { SET_APPOINTMENT_SLOTS } from '../actionTypes'
import { setAppointmentSlots } from './appointmentSlots'

describe('actions/appointmentSlots', () => {
  it('should create an action to set appointment slots', () => {
    const slots = [
      {
        id: 1,
      },
      { id: 2 },
    ]
    const expectedAction = {
      type: SET_APPOINTMENT_SLOTS,
      payload: slots,
    }
    expect(setAppointmentSlots(slots)).toEqual(expectedAction)
  })
})
