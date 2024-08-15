import { LoginCredentials } from '../../types'
import LoginForm from './LoginForm'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logUserIn } from '../../Redux/reducers/loginReducer'
import { AppDispatch, RootState } from '../../Redux/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const LoginView = () => {
  const navigate = useNavigate()
  const userLoggedIn = useSelector((state: RootState) => state.login.token)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    if (userLoggedIn) {
      navigate('/home')
    }
  }, [navigate, userLoggedIn])

  const onSubmit = async (loginCredentials: LoginCredentials) => {
    await dispatch(logUserIn(loginCredentials))
  }

  return (
    <div className="loginView">
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default LoginView
