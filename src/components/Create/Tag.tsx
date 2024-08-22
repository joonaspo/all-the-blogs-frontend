import { Delete } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

interface Props {
  tag: string;
  dropTag: (id: string) => void;
}

const Tag = ({ tag, dropTag }: Props) => {
  if (!tag) {
    return null;
  }
  return (
    <Box
      sx={{
        borderRadius: '0.25rem',
        color: '#edf7fc',
        width: 'fit-content',
        padding: '0 0 0 1rem',
        backgroundColor: 'primary.main',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'capitalize',
        marginRight: '0.5rem',
      }}>
      <Typography>{tag}</Typography>
      <IconButton>
        <Delete sx={{ color: '#edf7fc' }} onClick={() => dropTag(tag)}></Delete>
      </IconButton>
    </Box>
  );
};

export default Tag;
