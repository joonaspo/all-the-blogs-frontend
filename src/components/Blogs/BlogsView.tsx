import ViewBlog from './ViewBlog';
import { useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { getBlogs } from '../../Redux/reducers/blogsReducer';
import { useEffect } from 'react';
import { Box } from '@mui/material';

const BlogsView = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  const blogs = useSelector((state: RootState) => state.blogs);

  if (!blogs) {
    return null;
  }
  return (
    <Box
      sx={{
        overflow: 'scroll',
        height: '82dvh',
        width: '90vw',
      }}>
      {blogs.map((blog) => (
        <ViewBlog key={blog.id} blog={blog} />
      ))}
    </Box>
  );
};

export default BlogsView;
