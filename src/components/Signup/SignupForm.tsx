import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';
import { SyntheticEvent, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { ToNewUserEntry } from '../../types';

interface Props {
  onSubmit: (values: ToNewUserEntry) => void;
}

const SignupForm = ({ onSubmit }: Props) => {
  const styling = {
    marginBottom: '1rem',
    borderRadius: '0.4rem',
  };

  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [bdate, setBdate] = useState<Dayjs | null>(dayjs());
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const formatDate = (dateValue: Dayjs | null) => {
    setBdate(dateValue);
    if (dateValue) {
      setDateOfBirth(dateValue.format('YYYY-MM-DD'));
    } else {
      setDateOfBirth('');
    }
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const newUser = { username, displayName, password, dateOfBirth };
    onSubmit(newUser);
  };

  useEffect(() => {
    if (password !== passwordConfirm) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, passwordConfirm]);

  return (
    <FormControl fullWidth>
      <Typography variant="h4" color={'primary.main'}>
        Sign up
      </Typography>
      <Typography
        variant="h5"
        style={{ marginBottom: '1rem' }}
        color={'secondary.main'}
      >
        Enter your details
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
        type="text"
        label="Display name"
        fullWidth
        sx={styling}
        value={displayName}
        onChange={({ target }) => setDisplayName(target.value)}
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
      <TextField
        error={passwordError}
        helperText={passwordError ? 'Passwords do not match!' : ''}
        variant="outlined"
        type="password"
        label="Re-enter password"
        fullWidth
        sx={styling}
        value={passwordConfirm}
        onChange={({ target }) => setPasswordConfirm(target.value)}
      />
      <FormLabel>
        <Typography variant="h6" color={'secondary.main'}>
          Enter date of birth
        </Typography>
      </FormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker sx={styling} value={bdate} onChange={formatDate} />
      </LocalizationProvider>

      <Button
        variant="contained"
        size="large"
        sx={{ backgroundColor: 'primary.main', fontWeight: 'bold' }}
        onClick={handleSubmit}
      >
        Sign up
      </Button>
      <Link to={'/'} className="noDecoration">
        <Typography variant="h6" color={'error.main'} fontWeight={'bold'}>
          Cancel
        </Typography>
      </Link>
    </FormControl>
  );
};

export default SignupForm;
