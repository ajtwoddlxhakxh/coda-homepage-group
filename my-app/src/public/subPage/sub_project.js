import React from "react";
import "../subPage/sub_project.css"

export default function SubProject() {
    return (
        <div>
            <div className="subHeader">
                <span className="subTitle">Our</span>
                <span className="subTitle-2nd">Activities</span>
                <h5 className="SubTitle-3nd">여기에 설명 심어주기</h5>
            </div>

            <div className="subContent">
                <div className="contentBox">
                    <div className="cardGlow codeReviewGlow"></div>
                    <div className="cardContent">
                        <div className="iconWrapper">
                            <div className="iconGlow codeReviewBg"></div>
                            <div className="iconBox codeReviewIconBg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#06FFA5"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                </div>
            </div>
            <h3 className="cardTitle">Study Groups</h3>
            <p>스터디 그룹</p>
            <p>함께 배우고 함께 성장하는 스터디, 기초부터 심화까지</p>
            <div className="cornerAccent "></div>
                    </div>
                </div>
                <div className="contentBox">
                    <div className="cardGlow codeReviewGlow"></div>
                    <div className="cardContent">
                        <div className="iconWrapper">
                            <div className="iconGlow studyBg"></div>
                            <div className="iconBox codeReviewIconBg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>

                                </svg>



                            </div>
                        </div>
                        <h3 className="cardTitle">Projects</h3>
                        <p>프로젝트 진행</p>
                        <p>아이디어를 현실로, 팀 프로젝트를 통해 실전 개발 경험을 쌓아요</p>
                        <div className="cornerAccent "></div>
                    </div>
                </div>
                <div className="contentBox">
                    <div className="cardGlow codeReviewGlow"></div>
                    <div className="cardContent">
                        <div className="iconWrapper">
                            <div className="iconGlow codeReviewBg"></div>
                            <div className="iconBox codeReviewIconBg">

                            </div>
                        </div>
                        <h3 className="cardTitle">Community </h3>
                        <p>커뮤니티</p>
                        <p>편하게 어울리며 서로를 알아가는 시간</p>
                        <div className="cornerAccent "></div>
                    </div>
                </div>
                <div className="contentBox">
                    <div className="cardGlow codeReviewGlow"></div>
                    <div className="cardContent">
                        <div className="iconWrapper">
                            <div className="iconGlow codeReviewBg"></div>
                            <div className="iconBox codeReviewIconBg">

                            </div>
                        </div>
                        <h3 className="cardTitle">Study Groups</h3>
                        <p>술자리</p>
                        <p>편하게 어울리며 서로를 알아가는 시간</p>
                        <div className="cornerAccent "></div>
                    </div>
                </div>

            </div>
            <div className="subJoin">
                <span className="joinTitle">Join Us</span><br/>
                <span className="joinSubTitle">CODA와 함께하세요</span>
            </div>
        </div>
    )
}