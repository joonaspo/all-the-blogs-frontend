import { createSlice } from '@reduxjs/toolkit'
import { AlertSeverity } from '../../types'
import { AppDispatch } from '../store'

interface NotificationState {
  message?: string | null
  timeShown?: number
  severity?: AlertSeverity
}

const initialState: NotificationState = {
  message: null,
  timeShown: undefined,
  severity: undefined,
}

export const notificationReducer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setErrorNotification: (state, action) => {
      state.message = action.payload.message
      state.timeShown = action.payload.timeShown
      state.severity = AlertSeverity.error
    },
    clearNotification: (state) => {
      state.message = null
      state.timeShown = undefined
      state.severity = undefined
    },
  },
})

export const showTimedError = (message: string, time: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setErrorNotification({ message, time }))
    setTimeout(() => {
      dispatch(clearNotification())
    }, time)
  }
}

export const showStaticError = (message: string) => (dispatch: AppDispatch) => {
  console.log(message)
  dispatch(setErrorNotification({ message, timeShown: undefined }))
}

export const { setErrorNotification, clearNotification } =
  notificationReducer.actions

export default notificationReducer.reducer
