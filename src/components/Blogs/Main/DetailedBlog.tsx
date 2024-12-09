import {
  ArrowBack,
  FormatQuote,
  Recommend,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../../types';
import RenderTag from '../Misc/Tag';
import CommentsView from './Comments/CommentsView';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addLike } from '../../../requests/blogRequests';
import { AppDispatch, RootState } from '../../../Redux/store';
import { useDispatch } from 'react-redux';
import {
  showTimedError,
  showTimedSuccess,
} from '../../../Redux/reducers/notificationReducer';
import { handleAxiosError } from '../../utils/errorHandler';
import { useSelector } from 'react-redux';
import LikedUsers from '../Misc/LikedUsers';
import NewComment from './Comments/NewComment';

interface Props {
  blog: BlogPost;
}

const DetailedBlog = ({ blog }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const queryClient = useQueryClient();
  const currentUser = useSelector((state: RootState) => state.login);

  const newLikeMutation = useMutation({
    mutationFn: addLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detailedBlog'] });
      dispatch(showTimedSuccess(`Liked ${blog.title}`, 5));
    },
    onError: (error) => {
      const errorMessage = handleAxiosError(error);
      dispatch(showTimedError(errorMessage, 5));
    },
  });
  const checkUser = blog.likedUsers.find((user) => user.id === currentUser?.id);

  return (
    <Box>
      <Card
        sx={{ width: '90vw', height: '87dvh', marginBottom: '3.4rem' }}
        variant='outlined'>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              width: '100%',
              mb: '0.4rem',
            }}>
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                display: 'flex',
                alignItems: 'center',
              }}>
              <Link to='/home'>
                <ArrowBack sx={{ fontSize: '2.4rem', color: 'primary.main' }} />
              </Link>
            </Box>
            <Typography
              variant='h4'
              color='primary'
              sx={{
                flex: 1,
                textAlign: 'center',
              }}>
              {blog.title}
            </Typography>
          </Box>
          <Link to={`/users/viewProfile/${blog.user.id}`}>
            <Typography variant='body1' color='secondary'>
              {blog.user.displayName} {`@${blog.user.username}`}
            </Typography>
          </Link>

          <FormatQuote color='primary' />
          <Typography variant='body1' color='primary'>
            {blog.description}
          </Typography>

          <Divider sx={{ paddingTop: '0.8rem' }} />
          <Box>
            <Typography
              sx={{
                display: 'flex',
                textDecoration: 'underline',
                paddingTop: '0.4rem',
              }}
              color='primary'>
              <a href={blog.url} target='_blank'>
                {blog.url}
              </a>
            </Typography>
            <Typography variant='body2' color='primary'>
              Article by: {blog.author}
            </Typography>
          </Box>

          <Divider sx={{ paddingTop: '0.4rem' }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <LikedUsers likedUsers={blog.likedUsers} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
              }}>
              <Typography
                variant='h6'
                color='primary.main'
                padding={'0 1rem'}
                display={'flex'}>
                {blog.likedUsers.length}
                <Recommend />
              </Typography>
              {checkUser ? (
                <Typography variant='h6' color='primary.main'>
                  Liked!
                </Typography>
              ) : (
                <Button
                  variant='contained'
                  sx={{ display: 'flex' }}
                  onClick={() => newLikeMutation.mutate(blog.id)}>
                  <Typography sx={{ display: 'flex' }}>
                    <ThumbUpAltOutlined />
                  </Typography>
                </Button>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              paddingTop: '1rem',
            }}>
            {blog.tags.map((tag) => (
              <RenderTag key={tag.id} tag={tag} />
            ))}
          </Box>
          <NewComment id={blog.id} />
          <Typography variant='h6' color='primary.main'>
            Comments ({blog.comments.length}):
          </Typography>
          {blog.comments.length > 0 && <CommentsView id={blog.id} />}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DetailedBlog;
