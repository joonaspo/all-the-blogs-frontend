import { Button, FormControl, TextField, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { BlogEntryFormValues } from '../../types';
import TagsList from './TagsList';
import { InputFieldStyling } from '../../Theme/theme';
import NewTagForm from './NewTagForm';
import { AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showTimedError } from '../../Redux/reducers/notificationReducer';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewPost } from '../../requests/blogRequests';
import { handleAxiosError } from '../utils/errorHandler';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [tag, setTag] = useState('');
  const [tagsArray, setTagsArray] = useState<string[]>([]);

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const newBlogMutation = useMutation({
    mutationFn: createNewPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      navigate('/home');
    },
    onError: (error) => {
      const errorMessage = handleAxiosError(error);
      dispatch(showTimedError(errorMessage, 5));
    },
  });

  const addTags = () => {
    setTagsArray(tagsArray.concat(tag));
    setTag('');
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const newEntry: BlogEntryFormValues = {
      title,
      author,
      description,
      url,
      tags: tagsArray,
    };
    newBlogMutation.mutate(newEntry);
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
        sx={InputFieldStyling}
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <TextField
        variant='outlined'
        type='text'
        label='Author'
        sx={InputFieldStyling}
        value={author}
        onChange={({ target }) => setAuthor(target.value)}
      />
      <TextField
        variant='outlined'
        type='text'
        label='Description'
        sx={InputFieldStyling}
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <TextField
        variant='outlined'
        type='text'
        label='URL'
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
