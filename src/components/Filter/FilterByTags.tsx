import {
  Box,
  Checkbox,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

import { AppDispatch } from '../../Redux/store';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterArray } from '../../Redux/reducers/filterReducer';
import { FilterList } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { getAllTags } from '../../requests/tagsRequest';
import Loading from '../Notifications/Loading';

const FilterByTags = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    data: tags,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['tags'],
    queryFn: getAllTags,
  });

  const [tagArray, setTagArray] = useState<string[]>([]);

  const onTagChange = (event: SelectChangeEvent<typeof tagArray>) => {
    const {
      target: { value },
    } = event;

    if (value.includes('')) {
      setTagArray([]);
    } else {
      setTagArray(value as string[]);
    }
  };

  useEffect(() => {
    dispatch(setFilterArray(tagArray));
  }, [dispatch, tagArray]);

  return (
    <Select
      placeholder='tag'
      value={tagArray}
      multiple
      renderValue={() => <FilterList fontSize='small' />}
      onChange={onTagChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      sx={{ textTransform: 'capitalize' }}
      MenuProps={{
        PaperProps: {
          sx: {
            height: '40dvh',
            width: '48vw',
            display: 'flex',
            justifyContent: 'center',
          },
        },
      }}>
      <MenuItem value=''>
        <Box sx={{ color: 'primary.main', fontWeight: 'bold' }}>All</Box>
      </MenuItem>
      {tags &&
        tags.map((tag) => (
          <MenuItem
            key={tag.id}
            value={tag.content}
            sx={{ textTransform: 'capitalize' }}>
            <Checkbox checked={tagArray.indexOf(tag.content) > -1} />
            {tag.content}
          </MenuItem>
        ))}
      {isLoading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Loading />
        </Box>
      )}
      {error && <Typography>Tags not found!</Typography>}
    </Select>
  );
};

export default FilterByTags;
