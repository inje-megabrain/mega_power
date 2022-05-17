import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import images from "./image";

const getDay = () => {
  let now = new Date();
  let date = "2021-03-01";
  var date_arr = date.split("-");

  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();

  let stDate = new Date(date_arr[0], date_arr[1], date_arr[2]);
  let enDate = new Date(year, month, day);

  let btMs = enDate.getTime() - stDate.getTime();
  let btDay = btMs / (1000 * 60 * 60 * 24);
  return btDay;
};
function App() {
  const outerDivRef = useRef();
  const enName = "CHAESEONG LIM";
  const korName = "임채성";
  let [today, setToday] = useState(getDay());
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면의 세로길이, 100vh와 같음.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div ref={outerDivRef} className="outer">
      <div className="inner bg-gray">
        <div className="enName">
          <span>{enName}</span>
        </div>
        <div className="korName">
          <span>{korName}</span>
        </div>
        <div className="intro">
          <span>
            사업성 있는 모든 것에 관심을 가집니다!
            <br />
            개발을 시작한지 {today}일
            <br /> 빠른 성장력과 실행력을 가지고 있습니다.
          </span>
        </div>
      </div>
      <div className="inner bg-blue">
        <span>이력</span>
        <ul>
          <li>INJE University CE (2022 -)</li>

          <li>
            <button
              onClick={() => window.open("https://megabrain.kr/", "_blank")}
            >
              MegaBrain
            </button>{" "}
            (2022 -)
          </li>
          <li>
            <button
              onClick={() =>
                window.open(
                  "https://www.swmaestro.org/sw/main/main.do",
                  "_blank"
                )
              }
            >
              SWMAESTRO
            </button>{" "}
            13th (mentee 2022 -)
          </li>
        </ul>
        <h2>SKILL SETS</h2>
        <ul>
          <li>Python | Algorithm, ToyProjects</li>
          <li>JavaScript | Backend</li>
          <li>Tools | Notion, Slack, Github</li>
          <li>STUDYING | TypeScript, Nest.js</li>
        </ul>
        <h2>코로나 자동 자가진단</h2>
        <ul>
          <li>Stacks : Python, NCP, Linux</li>
          <li>개인 프로젝트</li>
          <li>
            교육부 자가진단 크롤러를 서버에 올려 매일 아침 자동으로 자가진단을
            해주는 서비스를 제공했습니다.
          </li>
        </ul>
        <h2>더많은 서로이웃</h2>
        <ul>
          <li>Stacks : Python, NCP, Linux</li>
          <li>이용 개발자 : 762명</li>
          <li>개인 프로젝트</li>
          <li>
            네이버 서로이웃 보조 서비스, 카테고리에 맞는 서로이웃을 쉽게 찾아볼
            수 있는 서비스를 운영했습니다.
          </li>
        </ul>
        <h2>(진행중)투헬시</h2>
        <ul>
          <li>Stacks : Express, AWS, Flutter</li>
          <li>소마 팀프로젝트(3인)</li>
          <li>담당 : 기획, PM, Backend(서브)</li>
          <li>헬스 어플 개발중(기획 단계)</li>
        </ul>
      </div>
      <div className="inner bg-pink">
        <motion.div
          ref={carousel}
          className="carouselBlock"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {images.map((image) => {
              return (
                <motion.div className="item" key={image}>
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
