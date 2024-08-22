import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/store';
import { getBlog } from '../../Redux/reducers/detailedBlogReducer';
import { BlogPost } from '../../types';
import DetailedBlog from './DetailedBlog';

const ViewDetailedBlog = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getBlog(id));
    }
  }, [dispatch, id]);
  const blog = useSelector(
    (state: RootState) => state.detailedBlog,
  ) as BlogPost | null;
  if (!blog) {
    return <>Loading</>;
  }
  return <DetailedBlog blog={blog} />;
};

export default ViewDetailedBlog;
