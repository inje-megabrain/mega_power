import './App.css';

function App() {
  return (
    <div className="App">
     <div className="whitebg-main">
      <h1>상상을</h1>
      <h5>스크롤을 아래로 내려보세요.</h5>
     </div>

     <div className="blackbg-main">
       <h1>현실로 만드는 개발자.</h1>
     </div>

     <div className="main-bg">
        <div className="introduction">
         <h3>상상을 현실로 만드는<br />Frontend Engineer,</h3>
         <h2>최원석입니다.</h2>
        </div> 
        <h5>Photograph by. Wonseok Choi<br />웹 페이지에 사용된 모든 사진은 직접 촬영한 사진을 사용했습니다.</h5>
     </div>

     <div className="blackbg-main">
       <h2>틀에 박히지 않은 생각으로.<br />틀에 박히지 않는 나로.</h2>
       <h3>
        과거에 의존하지 않고 언제나 새로운 것을 찾는,<br />
        트렌드하고 매일 매일이 새로움으로 설레는 개발자가 되고 싶습니다.<br /><br />
        학교에서 공부를 잘 하지도 않았고, 남들이 일찍 개발 공부를 시작할때,<br />저는 24살이라는 늦은 나이에 공부에 흥미를 느끼기 시작했습니다.<br /><br />
        이런 이유로 자괴감에 빠져 쓰러질 때, 저는 이 생각을 가지며 다시 달립니다.<br /><br />
        “Don't compare your beginning to someone else's middle”<br />
        "남들의 중간 지점을 나의 스타트라인과 비교하지 말라."<br /><br />
        항상 이 말을 자신에게 새기며 오늘도 공부에 목마릅니다.
        </h3>
     </div>

     <div className="aboutMe">
      <div className="name">
        <h2>Wonseok Choi | 최원석</h2>
        <ul>
          <li>2018. 02.<br />김해삼문고등학교 졸업</li>
          <li>2019. 11. ~ 2021. 08.<br />대한민국 해군 병장 만기전역</li>
          <li>현재 인제대학교 AI융합대학 컴퓨터공학부 3학년 전공중</li>
          <li>2022. 03. 02. ~ 현재<br />인제대학교 AI융합대학 학술동아리 '메가브레인' 정회원</li>
          <li>2023. 04. <br /><del>소프트웨어 마에스트로 14기 (지원예정)</del></li>
        </ul>
      </div>
      <div className='project-achive'>
        <div className="project">
          <h3>| Projects</h3>
          <div className="project-detail">
            <div className="prj">
              <h5>[개발중] 의견충돌 없는 모임 관리 프로젝트</h5>
              <h4>Daydream Café</h4>
            </div>
            <div className="prj">
              <h5>프로젝트 준비 중 </h5>
              <h4>프로젝트를 기대 해 주세요!</h4>
            </div>
            <div className="prj">
            <h5>프로젝트 준비 중 </h5>
              <h4>프로젝트를 기대 해 주세요!</h4>
            </div>
            <div className="prj">
              <h5>프로젝트 준비 중 </h5>
              <h4>프로젝트를 기대 해 주세요!</h4>
            </div>
          </div>
        </div>
        <div className="achive">
          <h3>| Achivement</h3>
          <div className="achive-detail">
            <div className="ach">
              <h5>‘21. 07. 31. (토)</h5>
              <h5>2021년 전국 대학생 프로그래밍 대회 동아리 연합</h5>
              <h4>2021년 여름 대회 참여</h4>
              <h5>10문제중 4문제 해결, 236팀 중 100등</h5>
            </div>
            <div className="ach">
              <h5>대회 일시, 수상 받은 날짜가 이곳에 들어갑니다.</h5>
              <h5>대회, 수상에 대한 부가설명이 이곳에 들어갑니다.</h5>
              <h4>대회 이름, 수상명이 이곳에 들어갑니다.</h4>
              <h5>대회, 수상 성과가 이곳에 들어갑니다.</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='contact'>
        <h3>| Contact Me!</h3>
        <div className="contact-detail">
          <p>Mobile : +82 10-8422-1548</p>
          <p>E-Mail : choiws1213@gmail.com</p>
          <p><a href='https://github.com/devmiru'>GitHub : https://github.com/devmiru</a></p>
          <p><a href='https://solved.ac/profile/nanahifan'>solved.ac : https://solved.ac/profile/nanahifan</a></p>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
