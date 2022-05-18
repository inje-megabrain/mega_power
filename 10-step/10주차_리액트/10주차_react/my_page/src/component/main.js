import React from 'react';
import {useState} from 'react';
import '../App.css';

function Main() {
    let [info,setinfo] = useState([
        {
          id:1,
          title:"이름",
          content:"문준호",
        },
        {
          id:2,
          title:"학교",
          content:"인제대학교 컴퓨터공학과 2학년",
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
    return(
        <div>
            <div className="profile_photo">
                10주차 포트폴리오
                <div className="name">20192625 문준호</div>
                <div className="first">
                {info.map(info => (
                    <Print info = {info} key={info.id}/>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Main;
