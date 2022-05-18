import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css'
import '../App';
import App from '../App';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={()=>{
        
      }}>"문준호" 본인</Button>
      <Button variant="outlined">"문준호" 지인</Button>
      <Button variant="outlined">"문준호" 모름</Button>
    </Stack>
  );
}
