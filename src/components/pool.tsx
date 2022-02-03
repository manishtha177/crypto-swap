import type { NextPage } from 'next';
import Box from '@mui/material/Box';

import Details from './Details';

const Pool: NextPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Box sx={{ width: '60%' }}></Box>
      <Box
        sx={{
          width: '40%',
          '@media (max-width: 769px)': {
            display: 'none',
          },
          height: '100%',
        }}
      >
        <Details from='pool' />
      </Box>
    </Box>
  );
};

export default Pool;
