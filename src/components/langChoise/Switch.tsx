
import { Switch } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

interface Props {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SwitchController: React.FC<Props> = ({ checked, handleChange }) => {

  return (
    <>


<Stack direction="row" spacing={0} sx={{ alignItems: 'center' }}>
        <Typography>EN</Typography>
        <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />  
        <Typography>РУ</Typography>
      </Stack>


    </>
  )
}

export default SwitchController