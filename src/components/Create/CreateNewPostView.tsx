import { IconButton } from '@mui/material';
import NewPostForm from './NewPostForm';
import './index.css';
import { ArrowDownward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CreateNewPostView = () => {
  return (
    <div className='newPostView'>
      <NewPostForm />
      <Link to='/home'>
        <IconButton>
          <ArrowDownward color='primary'></ArrowDownward>
        </IconButton>
      </Link>
    </div>
  );
};

export default CreateNewPostView;
