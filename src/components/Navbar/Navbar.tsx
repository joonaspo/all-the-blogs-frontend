import { AccountCircle, Add } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { StyledFab } from '../../Theme/theme';
import { logUserOut } from '../../Redux/reducers/loginReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/store';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.login);
  const handleLogout = async () => {
    await dispatch(logUserOut());
    navigate('/');
    return;
  };
  return (
    <>
      {user ? (
        <AppBar
          position='fixed'
          color='primary'
          sx={{
            top: 'auto',
            bottom: 0,
            height: '8dvh',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Toolbar>
            <AccountCircle fontSize='large' sx={{ color: '#edf7fc' }} />
            <Link to='/create'>
              <StyledFab sx={{ backgroundColor: '#edf7fc' }}>
                <Add color='inherit' />
              </StyledFab>
            </Link>
            <Box sx={{ flexGrow: 1 }}></Box>
            <IconButton onClick={handleLogout}>
              <LogoutIcon fontSize='large' sx={{ color: '#edf7fc' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
