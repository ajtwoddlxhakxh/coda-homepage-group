import React, { useState, useCallback } from "react";
import "./sub_recruitment_join.css"; // CSS 파일은 그대로 둠
import axios from "axios";

function RecruitApplyPage({
  question1,
  question2,
  positionId,
  submitDisabledReason,
}) {
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



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitDisabledReason) {
      alert(submitDisabledReason);
      return;
    }
    if (!positionId) {
      alert("모집 공고 ID(positionId)가 없습니다.");
      return;
    }
    if (!form.name || !form.major || !form.studentId) {
      alert("이름 / 이메일 / 연락처는 필수입니다.");
      return;
    }

    const documents = `
[지원자 정보]
학교: ${form.school}
나이: ${form.age}

[연락처] ${form.studentId}
[이메일] ${form.major}

[Q1] ${question1}
${form.answer1}

[Q2] ${question2}
${form.answer2}
    `.trim();

    try {
      const baseURL = process.env.REACT_APP_API_URL;
      const url = `${baseURL}/public/recruits`;
      const formData = new FormData();
      formData.append("positionId", positionId);
      formData.append("name", form.name);
      formData.append("email", form.major);
      formData.append("phone", form.studentId);
      formData.append("documents", documents);

      const res = await axios.post(url, formData);
      console.log("신청 응답:", res.data);
      alert("신청이 성공적으로 접수되었습니다!");

      setForm({
        name: "",
        studentId: "",
        major: "",
        age: "",
        school: "",
        answer1: "",
        answer2: "",
      });
    } catch (error) {
      console.error("신청 중 오류:", error);
      const msg =
        error.response?.data?.message ||
        "서버 오류로 인해 신청을 처리할 수 없습니다.";
      alert(msg);
    }
  };

  return (
    // 1. 전체를 감싸는 div에 style로 'relative'와 최소 높이를 줍니다.
    <div
      className="apply-wrapper"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >

      
        <h1
          className="apply-title"
          style={{ color: "white", textAlign: "center", paddingTop: "50px" }}
        >
          동아리 신청
        </h1>

        {submitDisabledReason && (
          <div
            className="apply-banner"
            style={{
              color: "white",
              marginBottom: 14,
              opacity: 0.9,
              fontSize: 14,
              textAlign: "center",
            }}
          >
            {submitDisabledReason}
          </div>
        )}

        <form className="apply-form" onSubmit={handleSubmit}>
          {/* 입력창들도 잘 보이도록 스타일을 조금 보정 (CSS 파일 수정 없이) */}
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            <div className="apply-row">
              <div className="apply-field">
                <label htmlFor="name" style={{ color: "white" }}>
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid #555",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "100%",
                    marginBottom: "15px",
                  }}
                />
              </div>

              <div className="apply-field">
                <label htmlFor="studentId" style={{ color: "white" }}>
                  연락처
                </label>
                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  value={form.studentId}
                  onChange={handleChange}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid #555",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "100%",
                    marginBottom: "15px",
                  }}
                />
              </div>
            </div>

            <div className="apply-row">
              <div className="apply-field">
                <label htmlFor="major" style={{ color: "white" }}>
                  Email
                </label>
                <input
                  id="major"
                  name="major"
                  type="text"
                  value={form.major}
                  onChange={handleChange}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid #555",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "100%",
                    marginBottom: "15px",
                  }}
                />
              </div>

              <div className="apply-field">
                <label htmlFor="age" style={{ color: "white" }}>
                  나이
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={form.age}
                  onChange={handleChange}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid #555",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "100%",
                    marginBottom: "15px",
                  }}
                />
              </div>
            </div>

            <div className="apply-row single">
              <div className="apply-field">
                <label htmlFor="school" style={{ color: "white" }}>
                  학교명
                </label>
                <select
                  id="school"
                  name="school"
                  value={form.school}
                  onChange={handleChange}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid #555",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "100%",
                    marginBottom: "15px",
                  }}
                >
                  <option value="" style={{ color: "black" }}>
                    학교를 선택하세요
                  </option>
                  <option value="국립한국교통대" style={{ color: "black" }}>
                    국립한국교통대
                  </option>
                  <option
                    value="건국대 글로벌 캠퍼스"
                    style={{ color: "black" }}
                  >
                    글로벌 캠퍼스 건국대학교
                  </option>
                </select>
              </div>
            </div>

            <div className="apply-question-block" style={{ marginTop: "20px" }}>
              <p className="question-label" style={{ color: "white" }}>
                Q. 1) {question1}
              </p>
              <textarea
                name="answer1"
                value={form.answer1}
                onChange={handleChange}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  border: "1px solid #555",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "100%",
                  minHeight: "100px",
                }}
              />
            </div>

            <div className="apply-question-block" style={{ marginTop: "20px" }}>
              <p className="question-label" style={{ color: "white" }}>
                Q. 2) {question2}
              </p>
              <textarea
                name="answer2"
                value={form.answer2}
                onChange={handleChange}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  border: "1px solid #555",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "100%",
                  minHeight: "100px",
                }}
              />
            </div>

            <div
              className="apply-submit-wrapper"
              style={{ textAlign: "center", marginTop: "30px" }}
            >
              <button
                type="submit"
                className="apply-submit-btn"
                disabled={!!submitDisabledReason}
                style={{
                  padding: "10px 30px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: submitDisabledReason ? "#555" : "white",
                  color: "black",
                  fontWeight: "bold",
                  cursor: submitDisabledReason ? "not-allowed" : "pointer",
                }}
              >
                <span>✔ 제출하기</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    
  );
}

export default RecruitApplyPage;
