import { Button, FormControl, TextField, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { BlogEntryFromValues } from '../../types';
import TagsList from './TagsList';
import { InputFieldStyling } from '../../Theme/theme';
import NewTagForm from './NewTagForm';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [tag, setTag] = useState('');
  const [tagsArray, setTagsArray] = useState(['']);

  const addTags = () => {
    setTagsArray(tagsArray.concat(tag));
    setTag('');
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const newEntry: BlogEntryFromValues = {
      title,
      author,
      description,
      url,
      tags: tagsArray,
    };
    console.log(newEntry);
  };

  const dropTag = (value: string) => {
    setTagsArray(tagsArray.filter((e) => e !== value));
  };
  return (
    <FormControl fullWidth>
      <Typography variant='h4' color={'primary.main'}>
        Add new blog
      </Typography>
      <Typography
        variant='h5'
        style={{ marginBottom: '1rem' }}
        color={'secondary.main'}>
        Enter blog details
      </Typography>
      <TextField
        variant='outlined'
        type='text'
        label='Title'
        fullWidth
        sx={InputFieldStyling}
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <TextField
        variant='outlined'
        type='text'
        label='Author'
        fullWidth
        sx={InputFieldStyling}
        value={author}
        onChange={({ target }) => setAuthor(target.value)}
      />
      <TextField
        variant='outlined'
        type='text'
        label='Description'
        fullWidth
        sx={InputFieldStyling}
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <TextField
        variant='outlined'
        type='text'
        label='URL'
        fullWidth
        sx={InputFieldStyling}
        value={url}
        onChange={({ target }) => setUrl(target.value)}
      />
      <NewTagForm addTags={addTags} tag={tag} setTag={setTag} />
      {tagsArray ? <TagsList tags={tagsArray} dropTag={dropTag} /> : <></>}
      <Button
        variant='contained'
        size='large'
        sx={{ backgroundColor: 'primary.main', fontWeight: 'bold' }}
        onClick={handleSubmit}>
        Create
      </Button>
    </FormControl>
  );
};

export default NewPostForm;
