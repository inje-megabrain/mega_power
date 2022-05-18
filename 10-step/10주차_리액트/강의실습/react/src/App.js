import logo from './logo.svg';
import './App.css';

function App() {

  let post = '인제대 맛집';{/*서버에서 가져온 데이터라 가정*/}
  {/* "document.querySelector('h4').innerHTML=post;" html에서의 데이터입력문법*/}
  return (
    <div className="App">
      <div className="black-nav">{/* class->className로 변경*/}
        <h4 style={ {color : 'red', fontSize : '16px'} }>블로그</h4>{/*jsx문법 style사용법 '-'기호는 사용불가*/}
      </div>
      <h4>{ post }</h4>{/*변수사용법 -> 대괄호넣기*/}
    </div>
  );
}

export default App;
