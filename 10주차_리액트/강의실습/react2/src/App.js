import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [a, b] = useState(['남자 코트 추천','어방우동 맛집','리액트 독학']);
  //자료를 잠깐 저장하는 법(낱개,배열 둘다 가능)
  //a- state에 보관한 자료 사용
  //b- state 변경함수
  //자주 변동되는 변수는 state가 적절함
  let [좋아요, plus] = useState(0);

  //return 안에는 태그 하나만
  return ( 
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={()=>{
        let copy = [...a]; 
        copy[0] = '여자코트 추천';
        b(copy)
        {/* state배열에 하나만 바꾸기*/}
      }}>글바꾸기</button>
      <div className="list">
        <h4>{ a[0] } <span onClick={()=>{ plus(좋아요+1) }}>👍</span> {좋아요}</h4>
                  {/*클릭시 동작, 함수가 들어가야함, state함수 변경*/}
        <p>5월 10일 발행</p>
      </div>


      <div className="list">
        <h4>{ a[1]}</h4>
        <p>5월 10일 발행</p>
      </div>
      <div className="list">
        <h4>{ a[2] }</h4>
        <p>5월 10일 발행</p>
      </div>
      
      <Modal></Modal>

    </div>
  );
}

//컴포넌트 만들기  let Modal = () => { }도 가능
function Modal(){
  return(
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
