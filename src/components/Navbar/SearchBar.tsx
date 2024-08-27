import { Search } from '@mui/icons-material';
import { AppBar, TextField, Toolbar } from '@mui/material';
import FilterMenu from '../Filter/FilterMenu';

const SearchBar = () => {
  return (
    <AppBar
      sx={{
        height: '8dvh',
        display: 'flex',
        alignItems: 'space-between',
        justifyContent: 'center',
      }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <FilterMenu />
        <TextField
          size='small'
          type='search'
          fullWidth
          autoComplete='off'
          variant='outlined'></TextField>
        <Search sx={{ padding: '1rem' }}></Search>
      </Toolbar>
    </AppBar>
  );
};
export default SearchBar;
