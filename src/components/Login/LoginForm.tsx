import { Button, FormControl, TextField, Typography } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginCredentials } from '../../types'

interface Props {
  onSubmit: (values: LoginCredentials) => void
}

const LoginForm = ({ onSubmit }: Props) => {
  const styling = {
    marginBottom: '1rem',
    borderRadius: '0.4rem',
  }
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const loginCredentials: LoginCredentials = { username, password }
    onSubmit(loginCredentials)
  }

  return (
    <>
      <FormControl fullWidth>
        <Typography variant="h4" color={'primary.main'}>
          Welcome
        </Typography>
        <Typography
          variant="h5"
          style={{ marginBottom: '1rem' }}
          color={'secondary.main'}
        >
          Login
        </Typography>
        <TextField
          variant="outlined"
          type="text"
          label="Username"
          fullWidth
          sx={styling}
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <TextField
          variant="outlined"
          type="password"
          label="Password"
          fullWidth
          sx={styling}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: 'primary.main', fontWeight: 'bold' }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Link to={'/signup'} className="noDecoration">
          <Typography variant="h6" fontWeight={'bold'} color={'secondary.main'}>
            Click here to sign up!
          </Typography>
        </Link>
      </FormControl>
    </>
  )
}

export default LoginForm
