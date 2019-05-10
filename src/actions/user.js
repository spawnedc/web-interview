import { SET_USER_DATA } from '../actionTypes'

export const setUserData = user => ({
  type: SET_USER_DATA,
  payload: user,
})
