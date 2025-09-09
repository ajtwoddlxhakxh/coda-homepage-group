import Sub_project from "./sub_project";
import Sub_createby from "./Sub_createby";
import Navbar from "./Navbar";
import Sub_main from "./Sub_main";
import Sub_recruitment from "./Sub_recruitment";
import {Route, Routes} from "react-router-dom";
import React from "react";

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

      {/* route 경로설정, 앞으로 새 페이지 제작시 routes-route에 추가해주세요*/}
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<Sub_main />} />
            <Route path="projects" element={<Sub_project />} />
            <Route path="recruitment" element={<Sub_recruitment />} />
            <Route path="contact" element={<Sub_main />} />
        </Routes>
        <Navbar />
    </div>
  );
}

export default App;
