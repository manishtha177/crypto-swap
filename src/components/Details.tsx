import { Fragment, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { WalletContext } from '../context/Wallet';

interface options {
  [key: string]: Object;
}

const hints: options = {
  token: (
    <Typography sx={{ mt: 2 }} variant='body2'>
      You can choose any token on the list, if there is some missing you can try adding it by the
      &nbsp;
      <Box component='span' fontWeight='fontWeightMedium'>
        contract address.
      </Box>
    </Typography>
  ),
  amount: (
    <Typography sx={{ mt: 2 }} variant='body2'>
      Choose the amount you want to swap on your balance. You can check it on the top of the amount
      field that you want to swap :D
    </Typography>
  ),
};

interface DetailsProps {
  from: string;
  transaction?: boolean;
  hint?: string;
}

export default function Details({ from, transaction = false, hint = '' }: DetailsProps) {
  const { isWalletConnected, setIsWalletConnected } = useContext(WalletContext as any);

  return (
    <Box
      sx={{
        height: '100%',
        background: 'rgba(179, 188, 208, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      {from === 'swap' ? (
        <Fragment>
          <Box
            sx={{
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              backgroundColor: 'rgba(179, 188, 208, 0.4)',
            }}
          />
          {isWalletConnected ? (
            transaction ? (
              <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Box borderBottom='1px solid #B3BCD0'>
                  <Typography variant='h6' sx={{ my: 3 }}>
                    Transaction Details
                  </Typography>
                  <Box
                    sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mb: 2 }}
                  >
                    <Typography variant='body2'>Price Impact</Typography>
                    <Typography variant='body2'>0.0000005 ETH</Typography>
                  </Box>
                  <Box
                    sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mb: 2 }}
                  >
                    <Typography variant='body2'>Allowed Slippage</Typography>
                    <Typography variant='body2'>0.0000005 ETH</Typography>
                  </Box>
                  <Box
                    sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mb: 2 }}
                  >
                    <Typography variant='body2'>Minimum Received</Typography>
                    <Typography variant='body2'>0.0000005 ETH</Typography>
                  </Box>
                </Box>
                <Typography variant='body2' sx={{ textAlign: 'left', mt: 2 }}>
                  Output is estimated. you will receive at least 99.95 AVAX or the transaction will
                  revert.
                </Typography>
              </Box>
            ) : (
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h6' sx={{ mt: 3 }}>
                  Hint
                </Typography>
                {hints[hint]}
              </Box>
            )
          ) : (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant='h6' sx={{ mt: 3 }}>
                Connect your wallet
              </Typography>
              <Typography
                sx={{ mt: 2, mb: 3 }}
                variant='body2'
              >{`To start using the app, your wallet needs to be connected :)`}</Typography>
              <Button onClick={() => setIsWalletConnected(true)} variant='text'>
                Connect Wallet
              </Button>
            </Box>
          )}
        </Fragment>
      ) : null}
    </Box>
  );
}
