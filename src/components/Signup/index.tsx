import SignupForm from './SignupForm';
import '../Signup/index.css';
import { createNewUser } from '../../requests/signupRequest';
import { ToNewUserEntry } from '../../types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  showTimedError,
  showTimedSuccess,
} from '../../Redux/reducers/notificationReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';

const SignupView = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = async (newUser: ToNewUserEntry) => {
    try {
      const result = await createNewUser(newUser);
      if (result) {
        dispatch(showTimedSuccess('User created succesfully!', 5000));
        navigate('/');
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data && typeof error.response.data === 'string') {
          dispatch(showTimedError(error.response.data, 5000));
        } else {
          dispatch(showTimedError('Unrecognized Axios error!', 5000));
        }
      } else {
        dispatch(showTimedError('Unknown error occurred!', 5000));
      }
    }
  };

  return (
    <div className='signupView'>
      <SignupForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignupView;
