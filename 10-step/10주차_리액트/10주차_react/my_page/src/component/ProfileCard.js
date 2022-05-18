import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { spacing }from '@mui/system';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Mainpage from './main.js';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <BrowserRouter>
        <Card sx={{ minWidth: 275, marginTop:45 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    10주차 포토폴리오
                </Typography>
                <Typography variant="h5" component="div">
                    문{bull}준{bull}호
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    20192625
                </Typography>
                <Typography variant="body2">
                    학교 : 인제대학교<br />
                    성별 : 상남자<br />
                </Typography>
            </CardContent>
            <CardActions>
                

                <Link to="/"><Button size="small" onClick={() => {
                }}>문준호 본인</Button></Link>
                <Button size="small" onClick={() => { }}>문준호의 지인</Button>
                <Button size="small" onClick={() => { }}>문준호가 누구임</Button>
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                </Routes>
                
            </CardActions>
        </Card>
        </BrowserRouter>
    );
}
