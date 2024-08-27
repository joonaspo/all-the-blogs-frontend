import { SentimentVeryDissatisfied } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <SentimentVeryDissatisfied
        color='primary'
        sx={{ transform: 'scale(2.8)' }}
      />
      <Typography variant='h2' padding={'2rem'}>
        Not found!
      </Typography>
    </Box>
  );
};

export default NotFound;
