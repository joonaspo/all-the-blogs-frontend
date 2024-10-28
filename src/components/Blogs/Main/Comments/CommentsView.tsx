import { useQuery } from '@tanstack/react-query';
import { getComments } from '../../../../requests/blogRequests';
import Loading from '../../../Notifications/Loading';

import { showTimedError } from '../../../../Redux/reducers/notificationReducer';
import NotFound from '../../../Notifications/NotFound';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../Redux/store';
import Comment from './Comment';

interface Props {
  id: string;
}

const CommentsView = ({ id }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => getComments(id as string),
    enabled: !!id,
  });

  if (isLoading) {
    <Loading />;
  }

  if (error || !data) {
    if (typeof error?.message === 'string') {
      dispatch(showTimedError(error?.message as string, 5));
    }
    return <NotFound />;
  }

  console.log(data[0]);
  return (
    <div style={{ overflow: 'scroll', height: '60dvh' }}>
      {data.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
};

export default CommentsView;
