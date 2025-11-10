import React from "react";
import "./Sub_recruitment.css";

export default function Sub_recruitment () {
  return (
   
    
    <div className="sub-recruitment">
      <div className="recru-info">
        <span className="info-title">RECRUITMENT</span>
        <span className="recru-crew">동아리 신청하기</span>
      </div>

      <div className="recru-main">
        <div className="recru-text">
          <span className="init init-CODA">CODA</span>는
        </div>
        <div className="recru-text">
          <span className="init init-CHANCE">'CHANCE'</span>이다.
        </div>
        </div>

      <div className = "recru-sub-title">
        <span className = "sub-recru-title">BEFORE SIGN UP</span>
      </div>

        <div className = "recru-sub">
          <div className = "recru-rule">
            <span className = "rule-1"> 규칙 1 블로그 업로드 및 깃허브 커밋</span>
            <span className = "rule-2"> 규칙 2 매달 1회 개인 참여 사업 및 프로젝트 조사</span>
            <span className = "rule-3"> 규칙 3 열심히 노력하는 모습을 보여줄 것.</span>
          </div>
        </div>
        
        <img className ="ballongift" src="/images/ballongift.svg" alt="ballongift" />
        <img className="rocket" src="/images/rocket.svg" alt="rocket" />
    </div>
  );
}
