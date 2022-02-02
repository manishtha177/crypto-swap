import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const options = [
  { name: 'ETH', icon: 'ethereum.svg' },
  { name: 'Matic', icon: 'polygon.svg' },
  { name: 'AVAX', icon: 'avalanche.svg' },
];

interface Iprops {
  disabled: boolean;
  value: string;
  changeHandler: Function;
  label: string;
}

export default function BasicSelect({ disabled, value, changeHandler, label }: Iprops) {
  const handleChange = (event: SelectChangeEvent) => {
    changeHandler(event.target.value);
  };

  return (
    <Box
      sx={{
        width: '35%',
        '@media (max-width: 769px)': {
          width: '40%',
        },
      }}
    >
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <FormControl fullWidth disabled={disabled}>
        <Select
          labelId={`${label}-select-label`}
          id={`${label}-select`}
          value={value}
          // label={label}
          onChange={handleChange}
          sx={{
            height: '64px',
            '@media (max-width: 769px)': {
              height: '48px',
            },
          }}
        >
          {options.map((singleOption) => (
            <MenuItem key={singleOption.name} value={singleOption.name}>
              <Box sx={{ alignItems: 'center', display: 'flex' }}>
                <ListItemIcon
                  sx={{
                    minWidth: '42px',
                    '@media (max-width: 769px)': {
                      minWidth: '32px',
                    },
                  }}
                >
                  <img height='24px' width='24px' src={`${singleOption.icon}`} />
                </ListItemIcon>
                <ListItemText primary={singleOption.name} />
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
