import Box from '@mui/material/Box';
import react, { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

interface Iprops {
  disabled: boolean;
  value: string;
  valueChangeHandler: Function;
}

export default function InputButton({ disabled, value, valueChangeHandler }: Iprops) {
  const [isValueEdited, setIsValueEdited] = useState(false);

  const error = +value < 0.1 && isValueEdited;

  const fromNumberChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValueEdited) setIsValueEdited(true);
    if (+ev.target.value < 0) {
      valueChangeHandler(0);
    } else if (+ev.target.value > 100) {
      valueChangeHandler(100);
    } else {
      valueChangeHandler(ev.target.value);
    }
  };

  const maxClickHandler = () => {
    if (!isValueEdited) setIsValueEdited(true);
    valueChangeHandler(1);
  };

  return (
    <Box
      sx={{
        width: '60%',
        '@media (max-width: 769px)': {
          width: '55%',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <InputLabel color={error ? 'error' : 'primary'} htmlFor='outlined-adornment-password'>
          Amount
        </InputLabel>
        {!disabled ? <Typography variant='caption'>Balance 1 ETH</Typography> : null}
      </Box>
      <FormControl variant='outlined' disabled={disabled} fullWidth>
        <OutlinedInput
          sx={{
            backgroundColor: disabled ? 'rgba(179, 188, 208, 0.2)' : 'white',
          }}
          fullWidth
          inputProps={{ style: { height: '64px', boxSizing: 'border-box' } }}
          color={error ? 'error' : 'primary'}
          id='outlined-adornment-password'
          type={'number'}
          value={value}
          onChange={fromNumberChange}
          endAdornment={
            <InputAdornment position='end'>
              <Button
                sx={{ backgroundColor: 'rgba(31, 109, 201, 0.2)' }}
                disabled={disabled}
                variant='text'
                onClick={maxClickHandler}
              >
                Max
              </Button>
            </InputAdornment>
          }
          // label='Password'
        />
        {error ? (
          <Typography variant='caption' color='error'>
            Minimun amount for conversion is 0.1
          </Typography>
        ) : (
          <Typography variant='caption' sx={{ color: disabled ? '#B3BCD0' : '' }}>
            Max to use all your funds
          </Typography>
        )}
      </FormControl>
    </Box>
  );
}
