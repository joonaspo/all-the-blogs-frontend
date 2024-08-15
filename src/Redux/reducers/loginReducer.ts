import { createSlice } from '@reduxjs/toolkit'
import { logIn } from '../../services/loginService'
import { LoginCredentials } from '../../types'
import { setToken } from '../../services/blogPostsService'
import { AppDispatch } from '../store'
import axios from 'axios'
import { showTimedError } from './notificationReducer'

interface LoginState {
  token: string | null
  displayName: string | null
}

const initialState: LoginState = {
  token: null,
  displayName: null,
}

export const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.token = action.payload.token
      state.displayName = action.payload.displayName
    },
  },
})

export const logUserIn = (loginCredentials: LoginCredentials) => {
  return async (dispatch: AppDispatch) => {
    try {
      const user = await logIn(loginCredentials)
      localStorage.setItem('UserToken', JSON.stringify(user.token))
      await setToken(user.token)
      dispatch(
        setCurrentUser({ token: user.token, displayName: user.displayName })
      )
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data)
        if (error.response?.data && typeof error.response.data === 'string') {
          dispatch(showTimedError(error.response.data, 2500))
        } else {
          dispatch(showTimedError('Unrecognized Axios error!', 2500))
        }
      } else {
        dispatch(showTimedError('Unknown error!', 2500))
      }
    }
  }
}

export const { setCurrentUser } = loginReducer.actions

export default loginReducer.reducer
