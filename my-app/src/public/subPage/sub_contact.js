import React from "react";
import { useState } from "react";
import contatcdot from "../../img/contact-dot.svg";
import axios from "axios";
// import { GoogleGenAI } from "@google/genai";
import './sub_contact.css'

export default function SubContact() {
    const [text, setText] = useState('')
    const [inquiry, setInquiry] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const baseURL = process.env.REACT_APP_API_URL;
    // const geminiKey = process.env.REACT_APP_GEMINI_API_KEY;
    // const ai = new GoogleGenAI({apiKey: geminiKey});
=======
//import { GoogleGenAI } from "@google/genai";
import "./sub_contact.css";

export default function SubContact() {
  const [text, setText] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const baseURL = process.env.REACT_APP_API_URL;
  const geminiKey = process.env.REACT_APP_GEMINI_API_KEY;
  //const ai = new GoogleGenAI({apiKey: geminiKey});


  function changeMessage(e) {
    setText(e.target.value);
    console.log(text);
  }

  function validateEmail(email) {
    // @ 포함 여부 및 기본 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function changeEmail(e) {
    const value = e.target.value;
    setEmail(value);
    console.log(value + "<<변경됨");

    // 이메일 유효성 검사
    if (value && !validateEmail(value)) {
      setEmailError("올바른 이메일 형식이 아닙니다. (@를 포함해주세요)");
    } else {
      setEmailError("");
    }
  }

  async function sendText(e) {
    e.preventDefault();
    //todo gemini api문제 해결이 필요하다..

    // const getGeminiSubject = await getSubject(text)

    // todo email 수정필요
    const data = {
      email: email,
      tag: inquiry,
      subject: "123응답입니다.",
      message: text,
    };

    // 이메일 유효성 검사
    if (!validateEmail(data.email)) {
      alert("올바른 이메일 형식을 입력해주세요. (@를 포함해야 합니다)");
      return;
    }

    if (
      data.email === "" ||
      data.tag === "" ||
      data.subject === "" ||
      data.message === ""
    )
      return alert("잘못된 입력입니다.");
    else {
      axios
        .post(baseURL + "/inquiries", data)
        .then((response) => {
          console.log(response.data, data);
          alert("문의해주셔서 감사합니다.");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // todo gemini api연결하기
  // const getSubject = async (t) => {
  //     const geminiText = t;
  //     try {
  //         const response = async () => {
  //                 const model = await ai.models.generateContent(
  //                     {model:"gemini-2.5-flash",
  //                         contents: geminiText,
  //                         config:{ systemInstruction:'글을 읽고 적절한 제목을 10자 이내로 제목만 출력해주세요'}
  //                     });

  //         }
  //         console.log(response.text)
  //         return response.text;
  //     }
  //     catch (error) {
  //         console.log(error)

  //     }
  // }
  return (
    <div className="subContactContainer">
      {/* DIV1 - 문의 섹션 */}
      <div className="inquirySection">
        {/* 문의 타이틀 - 이미지도 같이 포함 */}

        {/* 문의 폼 - 흰색 박스 */}
        <div className="inquiryForm">
          <div className="inquiryTitle">
            <img src={contatcdot} alt="contatcdot" />
            <br />
            <h1 className="inconsolata-title">CONTACT US</h1>
          </div>
          {/* 문의 타입 */}
          <div className="inquiryType">
            <button
              className={`noto-sans-button ${
                inquiry === "일반 문의" ? "selected" : ""
              }`}
              onClick={() => setInquiry("일반 문의")}
            >
              일반 문의
            </button>
            <button
              className={`noto-sans-button ${
                inquiry === "시스템 문의" ? "selected" : ""
              }`}
              onClick={() => setInquiry("시스템 문의")}
            >
              시스템 문의
            </button>
            <button
              className={`noto-sans-button ${
                inquiry === "지원 문의" ? "selected" : ""
              }`}
              onClick={() => setInquiry("지원 문의")}
            >
              지원 문의
            </button>
            <button
              className={`noto-sans-button ${
                inquiry === "기타 문의" ? "selected" : ""
              }`}
              onClick={() => setInquiry("기타 문의")}
            >
              기타 문의
            </button>
          </div>

          {/* 문의 텍스트 창 */}
          <div className="inquiryText">
            {/*todo 문의 내용을 gemini에게 보내고 따로 작성해서 보내기 (axios)*/}
            <input
              type={"email"}
              className="inquiryEmail"
              onChange={changeEmail}
              placeholder={"email을 작성해주세요"}
              autoFocus
            />
            <br />

            <textarea
              onChange={changeMessage}
              placeholder={"궁금한점을 입력해주세요"}
            ></textarea>
          </div>

          {/* 문의 버튼 */}
          <div className="inquiryButton">
            <button className="noto-sans-button" onClick={sendText}>
              제출
            </button>
          </div>
        </div>
      </div>

      {/* DIV2 - 연락처 정보 섹션 */}
      <div className="contactInfoSection">
        {/* 이메일, 인스타그램 따로 */}
        <div className="contactItem email">
          <h1 className={"noto-sans-menu"}>Email</h1>
          <h3 className={"noto-sans-menu"}>codaContact@gmail.com</h3>
        </div>
        <div className="contactItem instagram">
          <h1 className={"noto-sans-menu"}>Instagram</h1>
          <h3 className={"noto-sans-menu"}>@coda_123</h3>
        </div>
      </div>
    </div>
  );
}

// DIV1
// 문의 타이틀 - 이미지도 같이 포함
// 문의 타입
// 문의 텍스트 창
// 문의 버튼

// DIV2
// 이메일, 인스타그램 따로
