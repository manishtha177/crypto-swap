import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';

interface Iprops {
  isValueValid: boolean;
  disabled: boolean;
  value: string;
  valueChangeHandler: Function;
}

export default function InputNumber({ isValueValid, disabled, value, valueChangeHandler }: Iprops) {
  const toNumberChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (+ev.target.value < 0) {
      valueChangeHandler(0);
    } else if (+ev.target.value > 100) {
      valueChangeHandler(100);
    } else {
      valueChangeHandler(ev.target.value);
    }
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
      <InputLabel htmlFor='filled-number'>Amount</InputLabel>
      <TextField
        sx={{
          backgroundColor: disabled ? 'rgba(179, 188, 208, 0.2)' : 'white',
        }}
        id='filled-number'
        // label='Number'
        fullWidth
        type='number'
        value={value}
        onChange={toNumberChange}
        disabled={disabled}
        inputProps={{ style: { boxSizing: 'border-box' } }}
      />
      {isValueValid ? <Typography variant='caption'>1 AVAX = 0.01714 ETH</Typography> : null}
    </Box>
  );
}
