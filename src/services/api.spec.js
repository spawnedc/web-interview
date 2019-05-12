import { API_ENDPOINT } from '../config'
import { getAvailableSlots, bookAppointment } from './api'
import { makeGetRequest, makePostRequest } from './utils'
import moment from 'moment'

jest.mock('./utils.js')

describe('services/api', () => {
  describe('getAvailableSlots', () => {
    afterEach(() => {
      makeGetRequest.mockReset()
    })
    it('should call the correct url', async () => {
      await getAvailableSlots()
      const url = `${API_ENDPOINT}/availableSlots`
      expect(makeGetRequest).toHaveBeenCalledWith(url)
    })

    it('should return empty array if slots is empty', async () => {
      makeGetRequest.mockResolvedValue([])
      const slots = await getAvailableSlots()
      expect(slots).toEqual([])
    })

    it('should return modified slots on successful call', async () => {
      const today = moment(new Date())
      today.hour(10)
      today.minute(30)

      const fakeSlots = [
        {
          time: '2019-12-26T17:19:00.000Z',
          consultantType: 'specialist',
        },
        {
          time: today.toISOString(),
          consultantType: 'gp',
        },
      ]

      const expectedSlots = [
        {
          ...fakeSlots[1],
          displayValue: 'Today 10:30',
        },
        {
          ...fakeSlots[0],
          displayValue: '26 Dec @ 17:19',
        },
      ]
      makeGetRequest.mockResolvedValue(fakeSlots)
      const slots = await getAvailableSlots()
      expect(slots).toEqual(expectedSlots)
    })
  })

  describe('bookAppointment', () => {
    afterEach(() => {
      makePostRequest.mockReset()
    })

    it('should call the correct url', async () => {
      const fakeAppointment = {}
      await bookAppointment(fakeAppointment)
      const url = `${API_ENDPOINT}/appointments`
      expect(makePostRequest).toHaveBeenCalledWith(url, fakeAppointment)
    })

    it('should call the correct url', async () => {
      const fakeAppointment = {
        notes: 'I have a headache.',
        userId: 1,
        consultantType: 'GP appointment',
        appointmentType: ['audio', 'video'],
        dateTime: '2019-08-30T20:21:30.000Z',
      }
      const expectedAppointment = {
        ...fakeAppointment,
        id: 1,
      }
      makePostRequest.mockResolvedValue(expectedAppointment)
      const returnedAppointment = await bookAppointment(fakeAppointment)
      expect(returnedAppointment).toEqual(expectedAppointment)
    })
  })
})
