import type { NextPage } from 'next';
import Box from '@mui/material/Box';

import Container from '../src/components/Container';
import Header from '../src/components/MainHeader';

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(background.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100% - 60px)',
        }}
      >
        <Container />
      </Box>
    </Box>
  );
};

export default Home;
