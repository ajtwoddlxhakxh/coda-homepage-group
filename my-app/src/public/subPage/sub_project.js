import React from "react";
import { Link } from "react-router-dom";
import "../subPage/sub_project.css"

export default function SubProject({ showJoinSection = true }) {
    return (
        <div style={!showJoinSection ? { paddingBottom: '100px' } : {}}>
            <div className="subHeader">
                <span className="subTitle">Our</span>
                <span className="subTitle-2nd">Activities</span>
                <h5 className="SubTitle-3nd">여기에 설명 심어주기</h5>
            </div>

            <div className="subContent">
                <div className="contentBox">
                    <div className="cardGlow studyGroupGlow"></div>
                    <div className="cardContent">
                        <div className="iconWrapper">
                            <div className="iconGlow studyGroupBg"></div>
                            <div className="iconBox studyGroupIconBg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#00D9FF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
                                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
                                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
                                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
                                    <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                                    <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
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
                    <div className="cardGlow projectGlow"></div>
                    <div className="cardContent">
                        <div className="iconWrapper">
                            <div className="iconGlow projectBg"></div>
                            <div className="iconBox projectIconBg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#FF6B6B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                                    <path d="M4 22h16"/>
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
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
                    <div className="cardGlow communityGlow"></div>
                    <div className="cardContent">
                        <div className="iconWrapper">
                            <div className="iconGlow communityBg"></div>
                            <div className="iconBox communityIconBg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#9D4EDD"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                            </div>
                        </div>
                        <h3 className="cardTitle">Community</h3>
                        <p>커뮤니티</p>
                        <p>편하게 어울리며 서로를 알아가는 시간</p>
                        <div className="cornerAccent "></div>
                    </div>
                </div>
                <div className="contentBox">
                    <div className="cardGlow socialGlow"></div>
                    <div className="cardContent">
                        <div className="iconWrapper">
                            <div className="iconGlow socialBg"></div>
                            <div className="iconBox socialIconBg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#FF69B4"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                            </div>
                        </div>
                        <h3 className="cardTitle">Social Events</h3>
                        <p>술자리</p>
                        <p>편하게 어울리며 서로를 알아가는 시간</p>
                        <div className="cornerAccent "></div>
                    </div>
                </div>

            </div>
            {showJoinSection && (
                <Link to="/recruitment" className="subJoin">
                    <span className="joinTitle">Join Us</span><br/>
                    <span className="joinSubTitle">CODA와 함께하세요</span>
                </Link>
            )}
        </div>
    )
}