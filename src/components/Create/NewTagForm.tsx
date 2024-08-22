import { Box, Button, TextField } from '@mui/material';
import { InputFieldStyling } from '../../Theme/theme';

interface Props {
  tag: string;
  setTag: (value: string) => void;
  addTags: () => void;
}

const NewTagForm = ({ tag, setTag, addTags }: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <TextField
        variant='outlined'
        type='text'
        label='Tags'
        fullWidth
        sx={InputFieldStyling}
        value={tag}
        onChange={({ target }) => setTag(target.value)}
      />
      {tag.length < 3 ? (
        <></>
      ) : (
        <Button
          onClick={addTags}
          variant='contained'
          sx={{ margin: '0 0 1rem 1rem' }}>
          Add
        </Button>
      )}
    </Box>
  );
};

export default NewTagForm;
