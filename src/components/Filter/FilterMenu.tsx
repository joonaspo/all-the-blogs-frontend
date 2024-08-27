import { Box, FormControl } from '@mui/material';
import FilterByTags from './FilterByTags';

const FilterMenu = () => {
  return (
    <Box sx={{ zIndex: '1', paddingRight: '0.4rem' }}>
      <FormControl size='small'>
        <FilterByTags />
      </FormControl>
    </Box>
  );
};

export default FilterMenu;
