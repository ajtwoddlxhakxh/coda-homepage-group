import Sub_project from "./sub_project";
import Sub_createby from "./Sub_createby";
import Navbar from "./Navbar";
import Sub_main from "./Sub_main";
import Sub_recruitment from "./Sub_recruitment";

// 관리자 페이지
import Recruit from "./manage_recruit";
import Login from "./manage_login";

import {Route, Routes, useLocation} from "react-router-dom";
import React from "react";

//TODO 특정 경로일때만 navbar보이게 설정
function App() {
  const developer = [
    { name: "유하선", part: "BACK-END" },
    { name: "유도현", part: "BACK-END" },
    { name: "권영은", part: "FRONT-END" },
    { name: "남태현", part: "FRONT-END" },
  ]; /*Create By 명단*/
    function Homepage() {
        return (
            <>
                <Sub_main />
                <Sub_project />
                <Sub_createby items={developer} specialName={"leader"} />
            </>
        )
    }
  return (
    <div className="App">

      {/* route 경로설정 */}
      {/*새 컴포넌트 만들면 아래에 <route>를 추가해주세요*/}
      {/*  <Route path="{경로}" element={컴포넌트} /> */}

        <Routes>
            <Route index element={<Homepage />} />
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<Sub_main />} />
            <Route path="projects" element={<Sub_project />} />
            <Route path="recruitment" element={<Sub_recruitment />} />
            <Route path="contact" element={<Sub_main />} />

        {/* 관리자 페이지 route */}
            <Route path="admin/recruit" element={<Recruit/>}/>
            <Route path="admin/login" element={<Login/>}/>
        </Routes>

        {/*<Navbar />*/}
    </div>
  );
}

export default App;
