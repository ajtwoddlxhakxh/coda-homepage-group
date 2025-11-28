import React from "react";
import "./sub_recruitment.css";
import { useNavigate } from "react-router-dom";

import ballongift from "../../img/ballongift.svg";
import rocket from "../../img/rocket.svg";
import globes from "../../img/globes.svg";
import NormalRocket from "../../img/NormalRocket.svg";
import moon from "../../img/moon.svg";
import headphonerecru from "../../img/headphonerecru.svg";
import pencil from "../../img/pencil.svg";
import emoji from "../../img/emoji.svg";
import recrucheck from "../../img/recrucheck.svg";

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
      <img className="ballongift" src={ballongift} alt="ballongift" />
      <img className="rocket" src={rocket} alt="rocket" />

      <div className="subRecruitment">
        {/* 1) BEFORE SIGN UP */}
        <section className="before-signup">
          <img className="recrucheck" src={recrucheck} alt="recrucheck" />
          <h2 className="beforeTitle">BEFORE SIGN UP</h2>

          <h2 className="Rule rule1 noto-sans-menu">규칙 1. 블로그 업로드 및 깃허브 커밋</h2>
          <h2 className="Rule rule2 noto-sans-menu">
            규칙 2. 매달 1회 개인 참여 사업 및 프로젝트 조사
          </h2>
          <h2 className="Rule rule3 noto-sans-menu">규칙 3. 열심히 노력하는 모습을 보여줄 것</h2>

          <img
            className="headphonerecru"
            src={headphonerecru}
            alt="headphonerecru"
          />
          <img className="pencil" src={pencil} alt="pencil" />
          <img className="emoji" src={emoji} alt="emoji" />
        </section>

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
            src={globes}
            alt="globes"
            onClick={() => navigate("/recruitment/clubrecru")}
          />
          <img className="NormalRocket" src={NormalRocket} alt="NormalRocket" />
          <img className="moon" src={moon} alt="moon" />
        </section>
      </div>
    </div>
  );
}
