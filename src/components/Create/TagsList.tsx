import { Box } from '@mui/material';
import Tag from './Tag';

interface Props {
  tags: string[];
  dropTag: (tag: string) => void;
}

const TagsList = ({ tags, dropTag }: Props) => {
  if (tags.length < 1) {
    return null;
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} dropTag={dropTag}></Tag>
      ))}
    </Box>
  );
};

export default TagsList;
