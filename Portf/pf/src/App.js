import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

function App() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <div className="top-name">
        <h3 style ={{color : 'white', fontSize : '80px'}}>최진서 Portfolio</h3>
      </div>
      <div className='pic'></div>
      <div className="top-content">
        <h1 style={{color:'black', fontSize : '70px'}}>반갑다 그래!</h1>
        <h1 style={{color:'black', fontSize : '70px'}}>아직 제작중이니까 기다려...</h1>
        <h1 style={{color:'black', fontSize : '70px'}}>최진서의 포트폴리오</h1>
      </div>
      <div className="middle">
        <h3 style={{color : "Black", fontSize : '80px'}}>🇰🇷 Information</h3>
        <div className="middle-right">
          <h4 style={{color : "Black", fontSize : '30px'}}>Achievements</h4>
           1999.03.06 : 최진서 탄생일<br></br><br></br>
           2006 : 최진서 개같이 초등학교 입학<br></br><br></br>
           2015 : 화암중학교 졸업<br></br><br></br>
           2018 : 스마트 방어진고 졸업<br></br><br></br>
           2018.03 : 갓제대 입학 인생 최대의 실수...
        </div>
        <div className="middle1">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Summary
            </ListSubheader>
          }>
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="010-3793-0975"/>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="chch4lee1@naver.com"/>
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AudiotrackIcon/>
            </ListItemIcon>
            <ListItemText primary="I love music 🕶"/>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Justin Bieber"/>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Postmalon"/>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Harry Styles"/>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        </div>
      </div>
      <div className="middle">
        <h3 style={{color : "Black", fontSize : '80px'}}>🎒 Skills</h3>
        <div className='skill1'></div>
        <div className='skill2'></div>
        <div className='skill3'></div>
        <div className='skill4'></div>
      </div>
      <div className="middle">
        <h3 style={{color : "Black", fontSize : '80px'}}>🛸 Values</h3>
          <div className='box'>
            <div className='text1'>
              <span className='peace'><br></br># Peace</span>
            </div>
          </div>
          <div className='box1'>
            <div className='text1'>
              <span className='peace1'><br></br># Poitive</span>
            </div>
          </div>
          <div className='box2'>
            <div className='text1'>
              <span className='peace2'><br></br># Confidence</span>
            </div>
          </div>
      </div>
      <div className='bottom'>
        <a href='https://github.com/Dark-jin' target='_blanck'>🛰 Github</a>
      </div>
    </div>
  );
}

export default App;
