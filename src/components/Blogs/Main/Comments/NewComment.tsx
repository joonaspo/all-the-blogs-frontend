import { Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import { addComment } from '../../../../requests/blogRequests';

const NewComment = ({ id }: { id: string }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    await addComment(id, comment);
  };

  return (
    <FormControl sx={{ flexDirection: 'row' }}>
      <TextField
        value={comment}
        onChange={({ target }) => setComment(target.value)}></TextField>
      <Button
        variant='contained'
        sx={{ marginLeft: '1em' }}
        onClick={handleSubmit}>
        Add
      </Button>
    </FormControl>
  );
};

export default NewComment;
