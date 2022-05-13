/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {

  let post = '김해 우동 맛집';
  let [글제목,글제목변경] = useState(['놀이공원 추천','맛집 추천','카페 추천']);
  let [따봉,따봉변경] = useState(0);
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style ={{color : 'green', fontSize : '16px'}}>ReactBlog</h4>
      </div>

      <button onClick={() => { 
          let copy = [...글제목];
          copy[0] = '고담시티 추천';
          copy[1] = '맛 없는 집 추천';
          copy[2] = '엄청 먼 카페 추천';
          글제목변경(copy)}}>😈 😈 😈</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>5월 5일 어린이날 100주년 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>12월 25일 크리스마스 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>1월 1일 새해 리미티드 에디션 발행</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return(
    <div className='modal'>
        <h4>제목</h4>
        <h4>날짜</h4>
        <h4>상세내용</h4>
      </div>
  )
}
export default App;
