import { Box, Typography } from '@mui/material';
import { Tag } from '../../types';

interface Props {
  tag: Tag;
}

const RenderTag = ({ tag }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: '0.2rem',
        color: '#edf7fc',
        width: 'fit-content',
        padding: '0 0.4rem',
        backgroundColor: 'primary.main',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'center',
        textTransform: 'capitalize',
        marginRight: '0.5rem',
      }}
      key={tag.id}>
      <Typography>{tag.content}</Typography>
    </Box>
  );
};

export default RenderTag;
