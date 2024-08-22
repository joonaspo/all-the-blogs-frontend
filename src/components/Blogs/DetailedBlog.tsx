import { ArrowBack, FormatQuote, ThumbUp } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types';
import RenderTag from './Tag';
import CommentsView from './CommentsView';

interface Props {
  blog: BlogPost;
}

const DetailedBlog = ({ blog }: Props) => {
  return (
    <Box>
      <Card sx={{ width: '90vw' }} variant='outlined'>
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

          <Typography variant='body1' color='secondary'>
            {blog.user.displayName} {`@${blog.user.username}`}
          </Typography>
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
            <Typography variant='h6' color='primary.main'>
              {blog.likedUsers.length}
            </Typography>
            <Button variant='contained' sx={{ display: 'flex' }}>
              <Typography sx={{ display: 'flex' }}>
                <ThumbUp />
              </Typography>
            </Button>
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
          {blog.comments.length > 0 && (
            <CommentsView comments={blog.comments} />
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DetailedBlog;
