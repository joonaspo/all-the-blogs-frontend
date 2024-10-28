import { useQuery } from '@tanstack/react-query';
import { getUserById } from '../../requests/userRequests';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Notifications/Loading';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { formatDate } from '../utils/helpers';
import { showTimedError } from '../../Redux/reducers/notificationReducer';
import { AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import NotFound from '../Notifications/NotFound';

const Profile = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id as string),
    enabled: !!id,
  });
  if (isLoading) {
    return <Loading />;
  }

  if (error || !data) {
    if (typeof error?.message === 'string') {
      dispatch(showTimedError(error?.message as string, 5));
    }
    return <NotFound />;
  }

  console.log(data);
  return (
    <Box>
      <Card sx={{ width: '90vw', height: '90dvh' }} variant='outlined'>
        <CardContent sx={{ marginTop: 2 }}>
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
              variant='h2'
              color='primary'
              sx={{
                flex: 1,
                textAlign: 'center',
              }}>
              {data?.displayName}
            </Typography>
          </Box>
          <Divider sx={{ paddingTop: '0.8rem' }} />
          <Typography>@{data?.username}</Typography>
          <Typography>
            Member since: {formatDate(data?.dateOfRegistration as string)}
          </Typography>
          <Box>
            <Typography variant='h5' color='primary'>
              Posts:
            </Typography>
          </Box>
          <Card style={{ overflow: 'scroll', height: '60dvh' }}>
            {data?.madePosts.map((c) => (
              <Box key={c.id} sx={{ height: '10%', padding: 1 }}>
                <Link
                  to={`/home/view/${c.id}`}
                  style={{ textDecoration: 'none' }}>
                  <Typography variant='h5' color='primary'>
                    {c.title}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
