import logo from './logo.svg';
import { useState } from 'react';
import Container from '@mui/material/Container';
import ProfileCard from './component/ProfileCard';
import './App.css';
import Projectlist from './component/list';
import Personbutton from './component/button'
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import LinkIcon from '@mui/icons-material/Link';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

function App() {
  let [info,setinfo] = useState([
    {
      id:1,
      title:"이름",
      content:"문준호",
    },
    {
      id:2,
      title:"학교",
      content:"인제대학교 컴퓨터공학과(벽느끼는중)",
    },
    {
      id:3,
      title:"생년월일",
      content:"2000년 5월 26일 탄생",
    },
    {
      id:4,
      title:"전화번호",
      content:"010-4733-5856",
    },
    {
      id:5,
      title:"이메일",
      content:"mjh000526@naver.com",
    }
  ])
  function Print({info}){
    return (
      <div className="info_list">
        <b>{info.title} : </b>{info.content}
      </div>
    )
  }
  return (
    <div className="App">
        <div className="profile_photo">
          10주차 포트폴리오
          <div className="name">20192625 문준호</div>
        </div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item><div className="picture"></div>
          <div className="btnm">
            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={()=>{
                let copy = [...info];
                copy[3].content = "010-4733-5856";
                copy[2].content = "2000년 5월 26일 탄생";
                setinfo(copy);
              }}>"문준호" 본인</Button>
              <Button variant="outlined" onClick={()=>{
                let copy = [...info];
                copy[3].content = "010-4733-5856";
                copy[2].content = "주민번호 앞자리는 좀;;;";
                setinfo(copy);
              }}>"문준호" 지인</Button>
              <Button variant="outlined" onClick={()=>{
                let copy = [...info];
                copy[3].content = "직접 번호 따기";
                copy[2].content = "주민번호 앞자리는 좀;;;";
                setinfo(copy);
              }}>"문준호" 모름</Button>
            </Stack></div>
          <div className="info_content">
          {info.map(info => (
              <Print info = {info} key={info.id}/>
          ))}
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <div className="study_list">
              <p className="box_title"><SchoolIcon />학과에서 하는 공부
                <div className="c"><p className="cpp"></p></div>
                <div className="java"><p className="py"></p></div>
              </p>
          </div>
          <div className="appinvent">
            <AdbIcon />진행한 프로젝트
              <br/>
            <Projectlist />
          </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
              <div className="megabox"><PsychologyIcon />동아리에서 하는 공부
                <div className="html"><p className="js"></p></div>
                <div className="react"></div>
              </div>
              <div className="link_box"> 
              <LinkIcon />링크
              <a href='https://www.notion.so/19c10c550d6040219e7cab74ec3f3b6a'><div className="btn_no">
              </div></a>
              <a href='https://github.com/mjh000526/-'><div className="btn_git">
              </div></a>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default App;
