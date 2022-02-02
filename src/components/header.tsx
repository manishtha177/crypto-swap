import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { WalletContext } from '../context/Wallet';

export default function Header() {
  const { isWalletConnected, setIsWalletConnected } = useContext(WalletContext);

  return (
    <Box
      sx={{
        height: '60px',
        '@media (max-width: 769px)': {
          height: '50px',
        },
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: '10px 20px',
      }}
    >
      <img src='logo.svg' style={{ maxHeight: '90%' }} />
      {isWalletConnected ? (
        <Box>
          <img style={{ marginRight: '20px', height: '110%' }} src='Network.svg' />
          <img style={{ height: '110%' }} src='Button.svg' />
        </Box>
      ) : (
        <Button onClick={() => setIsWalletConnected(true)} variant='contained'>
          Connect To Wallet
        </Button>
      )}
    </Box>
  );
}
