import { Typography } from '@mui/material';
import { NonSensitiveUser } from '../../../types';

interface Props {
  likedUsers: NonSensitiveUser[];
}

const LikedUsers = ({ likedUsers }: Props) => {
  if (likedUsers.length === 0) {
    return (
      <Typography variant='h6' color='primary.main'>
        Be the first one to like!
      </Typography>
    );
  }
  return (
    <>
      {likedUsers.length !== 0 && likedUsers.length === 1 ? (
        <Typography variant='h6' color='primary.main'>
          {likedUsers[0].displayName} liked this!
        </Typography>
      ) : (
        <Typography variant='h6' color='primary.main' fontSize={'medium'}>
          {likedUsers[0].displayName} and {likedUsers.length - 1} other(s) liked
          this!
        </Typography>
      )}
    </>
  );
};

export default LikedUsers;
