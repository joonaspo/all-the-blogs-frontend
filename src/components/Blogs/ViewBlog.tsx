import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { BlogPost } from '../../types';
import { FormatQuote, Recommend } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface Props {
  blog: BlogPost;
}

const ViewBlog = ({ blog }: Props) => {
  return (
    <Card variant='outlined' sx={{ width: '80vw' }}>
      <CardContent>
        <Typography variant='h2' color='primary'>
          {blog.title}
        </Typography>
        <Typography variant='body1' color='secondary' sx={{ mb: 1.5 }}>
          {blog.user.displayName} {`@${blog.user.username}`}
        </Typography>
        <FormatQuote color='primary' />
        <Typography variant='body1' color='primary'>
          {blog.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`view/${blog.id}`}>
          <Button>View more</Button>
        </Link>
        <Typography
          variant='body1'
          color='primary'
          display={'flex'}
          letterSpacing={'0.2rem'}>
          {blog.likedUsers.length} <Recommend />
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ViewBlog;
