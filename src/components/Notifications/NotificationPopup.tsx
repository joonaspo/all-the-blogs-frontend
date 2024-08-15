import { Alert } from '@mui/material'
import { AppDispatch, RootState } from '../../Redux/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearNotification } from '../../Redux/reducers/notificationReducer'

const NotificationPopup = () => {
  const { message, severity } = useSelector(
    (state: RootState) => state.notification
  )
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(clearNotification())
  }, [dispatch])
  if (message === null) return null

  return (
    <div className="notificationContainer">
      <Alert severity={severity}>{message}</Alert>
    </div>
  )
}

export default NotificationPopup
