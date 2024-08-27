import { useParams } from 'react-router-dom';
import DetailedBlog from './DetailedBlog';
import { useQuery } from '@tanstack/react-query';
import { getBlogById } from '../../../requests/blogRequests';
import { AppDispatch } from '../../../Redux/store';
import { useDispatch } from 'react-redux';
import { showTimedError } from '../../../Redux/reducers/notificationReducer';
import Loading from '../../Notifications/Loading';
import NotFound from '../../Notifications/NotFound';

const FetchDetailedBlog = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const {
    data: blog,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['detailedBlog', id],
    queryFn: () => getBlogById(id as string),
    enabled: !!id,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error || !blog) {
    if (typeof error?.message === 'string') {
      dispatch(showTimedError(error?.message as string, 5));
    }
    return <NotFound />;
  }

  return <DetailedBlog blog={blog} />;
};

export default FetchDetailedBlog;
