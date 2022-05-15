/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {

  let post = 'profile';
  let [글제목,글제목변경]=useState(['출생','학교','학교생활']);
  let [좋아요,좋아요변경]=useState(0);
  return (
    
    <div className="App">
      <div className='info'>
      </div>
      {/* <div className ="black-nav">
        <h4>Fuck My Profile</h4>
        <button onClick={()=>{
          let copy =[...글제목];
          copy[0] = 'good';
          글제목변경(copy);
        }}>글 수정</button>
      </div> */}
      {/* <h4 style ={{color:'red',fontSize :'23px'}}>{post}</h4> */}
      <div className='me'>
        <h2 style={{marginLeft:'9rem',marginTop:'3rem',fontSize:'50px'}}>Information</h2>
      </div>
      <div className="face">
      </div>
      <div className='pro'>
        <div className="list">
          <h4>{글제목[0] }</h4>
          <p>1999년 7월 23일</p>
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
      </div>
     <div className='stack'>Tech Stack
      <div className='spring'>
      </div>
      <div className='python'>
      </div>
      <div className='java'>
      </div>
      <div className='c'>
      </div>
     </div>
      <div className='contact'>
        Contact
      </div>
    </div>
  );
}

export default App;
