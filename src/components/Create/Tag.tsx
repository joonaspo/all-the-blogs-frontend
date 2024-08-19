import { Delete } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

interface Props {
  tag: string;
}

const Tag = ({ tag }: Props) => {
  if (!tag) {
    return null;
  }
  return (
    <Box
      sx={{ border: '1px solid', width: 'fit-content', padding: '0 0.2rem' }}>
      {tag}
      <IconButton>
        <Delete></Delete>
      </IconButton>
    </Box>
  );
};

export default Tag;
