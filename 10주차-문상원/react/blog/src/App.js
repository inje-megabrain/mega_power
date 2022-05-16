/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {

  let post = 'profile';
  let [글제목,글제목변경]=useState(['출생','이력','NOW','목표']);
  let [좋아요,좋아요변경]=useState(0);
  return (
    <><header>
      <nav
          id="navbar-example2"
          class="navbar navbar-light bg-light px-5 fixed-top justify-content-left"
        >
          <a class="navbar-brand" href="#" style={{fontSize:'50px'}}>
           Fucking Profile
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">
                <h3 class="link-warning" style={{color:'black'}}>Home</h3>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">
                <h3 class="link-warning"style={{color:'black'}}>About Me</h3>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading3">
                <h3 class="link-warning"style={{color:'black'}}>Stack</h3>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading4">
                <h3 class="link-warning"style={{color:'black'}}>Contact</h3>
              </a>
            </li>
          </ul>
        </nav>
      </header>
<main>
<div className="App">
      <div className='info' id='scrollspyHeading1'>
      </div>
      <div className='me'id='scrollspyHeading2'>
        <h2 style={{ marginLeft: '9rem', marginTop: '3rem', fontSize: '50px' }}>&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;문상원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Information</h2>
      </div>
      <div className="face">
      </div>
      <div className='pro'>
        <div className="list">
          <h4>{글제목[0]}</h4>
          <p>1999년 7월 23일</p>
          <p>전남 보성 출생</p>
        </div>
        <div className="list">
          <h4>{글제목[1]}</h4>
          <p>2006. 보성초등학교</p>
          <p>2012. 보성중학교</p>
          <p>2015. 보성고등학교</p>
          <p>2018. 인제대학교</p>
          <p>2021. 복학</p>
        </div>
        <div className="list">
          <h4>{글제목[2]}</h4>
          <p>3학년 재학 중</p>
          <p>2020 ~ Megabrain Leader</p>
        </div>
        <div className="list">
          <h4>{글제목[3]}</h4>
          <p>백앤드 개발자가 되는 것을 목표</p>
          <p>Java와 Spring을 공부</p>
        </div>
      </div>
      <div className='stack'id='scrollspyHeading3'>Tech Stack
        <div className='spring'>
        </div>
        <div className='python'>
        </div>
        <div className='java'>
        </div>
        <div className='c'>
        </div>
      </div>
      <div className='contact'id='scrollspyHeading4'>
        Contact
      </div>
      </div>
</main>
    </>
  );
}

export default App;
