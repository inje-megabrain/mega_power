
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [글제목, 글제목변경] = useState(['배우고 싶은 언어(기술)', '나의 소개', '이름:', '학번:'])
  const [isClick, setClick] =useState(false);
  

  return (
      <div className="App">
        
        <div className="pink">
          <h4>yealin</h4>
        </div>
  
       

          <button className="click" onClick={ ()=>{
            
            let copy = [...글제목];
            copy[0] = '🌙 포토샵, 유니티';
            글제목변경(copy);
          } }>배우고 싶은 언어(기술)</button>

        
          <button className="click" onClick={ ()=>{
            setClick(!isClick);
          } }>나의 소개</button>
        

        <div className="list">
          
          <h4>{글제목[0]}</h4>
        </div>
        <div className="list">
          <h4>
          {isClick? <span className="click">🌙이름: 김예린<br/>🌙학번: 20223520
            <br/>🌙학과: 컴퓨터공학과<br/>🌙취미: 그림</span>:
            <span>나의 소개</span>}</h4>
        </div>


      </div>
  );
}

export default App;

