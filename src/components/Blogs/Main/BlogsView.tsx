import ViewBlog from './ViewBlog';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '../../../requests/blogRequests';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';

const BlogsView = () => {
  const tags = useSelector((state: RootState) => state.filter);

  const { data } = useQuery({
    queryKey: ['blogs', tags],
    queryFn: () => getBlogs(tags ?? []),
    enabled: !!tags,
  });

  return (
    <Box
      sx={{
        overflow: 'scroll',
        height: '82dvh',
        width: '90vw',
      }}>
      {data && data.map((blog) => <ViewBlog key={blog.id} blog={blog} />)}
    </Box>
  );
};

export default BlogsView;
