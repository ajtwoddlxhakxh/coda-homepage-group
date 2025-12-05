import React from "react";
import "./sub_recruitment.css";
import { useNavigate } from "react-router-dom";

export default function Sub_recruitment() {
  const navigate = useNavigate();

  return (
    <div className="subRecruitment">
      <div className="recruInfo">
        <span className="infoTitle">RECRUITMENT</span>
        <span className="recruCrew">동아리 신청하기</span>
      </div>

      <div className="recruMain">
        <div className="recruText">
          <span className="init initCODA">CODA</span>는
        </div>
        <div className="recruText">
          <span className="init initCHANCE">'CHANCE'</span>이다.
        </div>
      </div>

      <img className="ballongift" src="/img/ballongift.svg" alt="ballongift" />
      <img className="rocket" src="/img/rocket.svg" alt="rocket" />

      <div className="subRecruitment">
        {/* 1) BEFORE SIGN UP */}
        <div className="ruleContainer">
          <section className="before-signup">
            <img className="recrucheck" src="/img/recrucheck.svg" alt="recrucheck" />
            <h2 className="beforeTitle">BEFORE SIGN UP</h2>

            <h2 className="Rule rule1 noto-sans-menu">
              규칙 1. 블로그 업로드 및 깃허브 커밋
            </h2>
            <h2 className="Rule rule2 noto-sans-menu">
              규칙 2. 매달 1회 개인 참여 사업 및 프로젝트 조사
            </h2>
            <h2 className="Rule rule3 noto-sans-menu">
              규칙 3. 열심히 노력하는 모습을 보여줄 것
            </h2>

            <img className="headphonerecru" src="/img/headphonerecru.svg" alt="headphonerecru" />
            <img className="pencil" src="/img/pencil.svg" alt="pencil" />
            <img className="emoji" src="/img/emoji.svg" alt="emoji" />
          </section>
        </div>

        {/* 2) CLICK AND FINISH SIGN UP */}
        <section className="ctaSignup">
          <div className="LastRecruit">
            <span className="LastTitle1">
              <p>CLICK THE GLOBES</p>
            </span>
            <span className="LastTitle2">
              <p>CLICK THE GLOBES</p>
            </span>
          </div>

          <img
            className="globes"
            src="/img/globes.svg"
            alt="globes"
            onClick={() => navigate("/recruitment/form")}
          />
          <img className="NormalRocket" src="/img/NormalRocket.svg" alt="NormalRocket" />
          <img className="moon" src="/img/moon.svg" alt="moon" />
        </section>
      </div>
    </div>
  );
}