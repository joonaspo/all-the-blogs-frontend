import { AccountCircle, Add } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { StyledFab } from '../../Theme/theme';
import { logUserOut } from '../../Redux/reducers/loginReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await dispatch(logUserOut());
    navigate('/');
    return;
  };
  return (
    <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <AccountCircle fontSize='large' sx={{ color: '#edf7fc' }} />
        <StyledFab sx={{ backgroundColor: '#edf7fc' }}>
          <Add color='inherit' />
        </StyledFab>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconButton onClick={handleLogout}>
          <LogoutIcon fontSize='large' sx={{ color: '#edf7fc' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
