import { SET_USER_DATA } from '../actionTypes'
import { setUserData } from './user'

describe('actions/user', () => {
  it('should create an action to set appointment slots', () => {
    const user = {
      id: 1,
      firstName: 'Jane',
      lastName: 'Doe',
    }
    const expectedAction = {
      type: SET_USER_DATA,
      payload: user,
    }
    expect(setUserData(user)).toEqual(expectedAction)
  })
})
