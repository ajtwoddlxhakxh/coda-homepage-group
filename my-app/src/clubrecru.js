import React, { useState } from "react";
import "./clubrecru.css";

function RecruitApplyPage({ question1, question2 }) {
  const [form, setForm] = useState({
    name: "",
    studentId: "",
    major: "",
    age: "",
    school: "",
    answer1: "",
    answer2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("신청 데이터 :", form);
    alert("신청이 완료되었습니다!");
  };

  return (
    <div className="apply-wrapper">
      <div className="apply-container">
        <h1 className="apply-title">동아리 신청</h1>

        <form className="apply-form" onSubmit={handleSubmit}>
          {/* 이름 / 학번 */}
          <div className="apply-row">
            <div className="apply-field">
              <label htmlFor="name">이름</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="apply-field">
              <label htmlFor="studentId">학번</label>
              <input
                id="studentId"
                name="studentId"
                type="text"
                value={form.studentId}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 전공 / 나이 */}
          <div className="apply-row">
            <div className="apply-field">
              <label htmlFor="major">전공</label>
              <input
                id="major"
                name="major"
                type="text"
                value={form.major}
                onChange={handleChange}
              />
            </div>

            <div className="apply-field">
              <label htmlFor="age">나이</label>
              <input
                id="age"
                name="age"
                type="number"
                value={form.age}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="apply-row single">
            <div className="apply-field">
              <label htmlFor="school">학교명</label>
              <select
                id="school"
                name="school"
                value={form.school}
                onChange={handleChange}
              >
                <option value="">학교를 선택하세요</option>
                <option value="국립한국교통대">국립한국교통대</option>
                <option value="건국대 글로벌 캠퍼스">
                  글로벌 캠퍼스 건국대학교
                </option>
              </select>
            </div>
          </div>

          {/* Q1 */}
          <div className="apply-question-block">
            <p className="question-label">Q. 1) {question1}</p>
            <textarea
              name="answer1"
              value={form.answer1}
              onChange={handleChange}
            />
          </div>

          {/* Q2 */}
          <div className="apply-question-block">
            <p className="question-label">Q. 2) {question2}</p>
            <textarea
              name="answer2"
              value={form.answer2}
              onChange={handleChange}
            />
          </div>

          {/* 제출 버튼 */}
          <div className="apply-submit-wrapper">
            <button type="submit" className="apply-submit-btn">
              <span className="apply-submit-check">✔</span>
              <span>제출하기</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecruitApplyPage;
