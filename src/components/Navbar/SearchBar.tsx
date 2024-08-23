import { Search } from '@mui/icons-material';
import { AppBar, TextField, Toolbar } from '@mui/material';
import FilterByTags from './FilterByTags';
import { useEffect } from 'react';
import { AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { getTags } from '../../Redux/reducers/tagsReducer';

const SearchBar = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

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
        <FilterByTags />
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
