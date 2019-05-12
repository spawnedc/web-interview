import { SET_USER_DATA } from '../actionTypes'
import userReducer from './user'

describe('reducers/user', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({})
  })

  it('should return the user data', () => {
    const user = {
      id: 1,
      name: 'John Doe',
    }
    const action = {
      type: SET_USER_DATA,
      payload: user,
    }
    expect(userReducer({}, action)).toEqual(user)
  })
})
