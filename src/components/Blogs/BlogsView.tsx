import ViewBlog from './ViewBlog';
import { useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { getBlogs } from '../../Redux/reducers/blogsReducer';
import { useEffect } from 'react';

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
    <>
      {blogs.map((blog) => (
        <ViewBlog key={blog.id} blog={blog} />
      ))}
    </>
  );
};

export default BlogsView;
