import { useState } from 'react';
import Box from '@mui/material/Box';

import Swap from './Swap';
import Pool from './Pool';
import BasicTabs from './ui/Tabs';

export default function Container() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Box
      sx={{
        height: '70%',
        width: '65%',
        '@media (max-width: 769px)': {
          width: '90%',
        },
        boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          marginTop: '-56px',
          width: '60%',
          '@media (max-width: 769px)': {
            width: '100%',
          },
        }}
      >
        <BasicTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </Box>
      {!selectedTab ? <Swap /> : <Pool />}
    </Box>
  );
}
