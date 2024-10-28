import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { CommentObject } from '../../../../types';
import { formatDate } from '../../../utils/helpers';
import './index.css';
interface Props {
  comment: CommentObject;
}

const Comment = ({ comment }: Props) => {
  return (
    <Card className='commentCard' sx={{ margin: '1em 0' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ textTransform: 'capitalize' }}>
            {comment.user.username[0]}
          </Avatar>
        }
        title={
          <>
            <Typography variant='body1'>
              {comment.user.displayName} @{comment.user.username}
            </Typography>
            <Typography sx={{ fontSize: 14 }} variant='body1' color='secondary'>
              {formatDate(comment.date)}
            </Typography>
          </>
        }></CardHeader>
      <CardContent>
        <Typography>{comment.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
