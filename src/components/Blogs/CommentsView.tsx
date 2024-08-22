import { Comment } from '../../types';

interface Props {
  comments: Comment[];
}

const CommentsView = ({ comments }: Props) => {
  console.log(comments);
  return <></>;
};

export default CommentsView;
