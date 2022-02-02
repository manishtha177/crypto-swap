import { useState, useContext } from 'react';
import type { NextPage } from 'next';

import Typography from '@mui/material/Typography';

import Select from './ui/Select';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import InputButton from './ui/InputButton';
import InputNumber from './ui/InputNumber';

import { WalletContext } from '../context/Wallet';

import Details from './Details';

const Swap: NextPage = () => {
  const [fromCrypto, setFromCrypto] = useState('ETH');
  const [toCrypto, setToCrypto] = useState('');
  const [fromAmount, setFromAmount] = useState(parseFloat('0').toFixed(1));
  const [toAmount, setToAmount] = useState(parseFloat('0').toFixed(1));
  const { isWalletConnected } = useContext(WalletContext);

  const fromSelect = (value: string) => {
    setFromCrypto(value);
  };

  const toSelect = (value: string) => {
    setToCrypto(value);
  };

  const isButtonEnabled = () => {
    if (fromCrypto && toCrypto) {
      if (+fromAmount >= 0.1 && +toAmount >= 0) {
        return true;
      }
    }
    return false;
  };

  const swapHandler = () => {
    let fromC = fromCrypto;
    let toC = toCrypto;
    setFromCrypto(toC);
    setToCrypto(fromC);

    let fromA = fromAmount;
    let toA = toAmount;
    setFromAmount(toA);
    setToAmount(fromA);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        '@media (max-width: 769px)': {
          flexDirection: 'column',
          marginBottom: '86px',
          overflowY: 'auto',
        },
        height: '100%',
      }}
    >
      <Box
        sx={{
          width: '60%',
          '@media (max-width: 769px)': {
            width: '100%',
          },
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='body1' component='p' sx={{ my: 1, width: '100%' }}>
          Select a token to start swapping
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <Select
            disabled={!isWalletConnected}
            value={fromCrypto}
            changeHandler={fromSelect}
            label='From'
          />
          <InputButton
            disabled={!isWalletConnected}
            value={fromAmount}
            valueChangeHandler={setFromAmount}
          />
        </Box>

        <Button onClick={swapHandler} disabled={!isWalletConnected}>
          <img src='./swap.svg' />
        </Button>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Select
            disabled={!isWalletConnected}
            value={toCrypto}
            changeHandler={toSelect}
            label='To'
          />
          <InputNumber
            isValueValid={isButtonEnabled()}
            disabled={!isWalletConnected}
            value={toAmount}
            valueChangeHandler={setToAmount}
          />
        </Box>

        <Box
          sx={{
            width: '100%',
            '@media (max-width: 769px)': {
              position: 'fixed',
              bottom: '0',
              width: '100vw',
              height: '86px',
              display: 'flex',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            },
          }}
        >
          <Button
            sx={{
              width: '100%',
              '@media (max-width: 769px)': {
                width: '94%',
              },
              height: '64px',
            }}
            variant='contained'
            disabled={!isButtonEnabled()}
          >
            Swap
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: '40%',
          '@media (max-width: 769px)': {
            width: '100%',
          },
        }}
      >
        <Details
          from='swap'
          transaction={isButtonEnabled()}
          hint={fromCrypto && toCrypto ? 'amount' : 'token'}
        />
      </Box>
    </Box>
  );
};

export default Swap;
