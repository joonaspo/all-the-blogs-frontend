import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { Tag } from '../../types';
import { useState } from 'react';

const FilterByTags = () => {
  const tags = useSelector((state: RootState) => state.tags) as Tag[] | null;

  const [tag, setTag] = useState<string>('');
  const onTagChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    if (typeof event.target.value === 'string') {
      setTag(event.target.value);
    }
  };
  console.log(tag);
  if (!tags) {
    return null;
  }

  return (
    <Box sx={{ zIndex: '1', paddingRight: '0.4rem' }}>
      <FormControl size='small' sx={{ width: 'fit-content' }}>
        <Select
          placeholder='tag'
          value={tag}
          onChange={onTagChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ textTransform: 'capitalize' }}>
          <MenuItem value=''>
            <Box sx={{ color: 'primary.main', fontWeight: 'bold' }}>All</Box>
          </MenuItem>
          {tags.map((tag) => (
            <MenuItem
              key={tag.id}
              value={tag.content}
              sx={{ textTransform: 'capitalize' }}>
              {tag.content}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterByTags;
