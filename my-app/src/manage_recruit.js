import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./manage_recruit.css";

function ManageRecruit(token) {
  // 전체 지원자수, 대기 지원자수, 승인 지원자수, 반려 지원자수 상태를 관리함
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [waitingApplicants, setWaitingApplicants] = useState(0);
  const [acceptedApplicants, setAcceptedApplicants] = useState(0);
  const [rejectedApplicants, setRejectedApplicants] = useState(0);

  // 신청자 데이터 관리
  const [applicants, setApplicants] = useState([]);

  const baseURL = process.env.REACT_APP_API_URL;
  const savetoken = localStorage.getItem("authToken");

  useEffect(() => {
    console.log(savetoken);
    // axios.post(`${baseURL}/admin/positions`,
    //     {title: "123", fields: "123", startDate:"123", endDate:"123"},
    //     {
    //     headers: {
    //         Authorization: `Bearer ${savetoken}`
    //     }
    //
    // },);
    // })
    axios
      .get(`${baseURL}/admin/admins`, {
        headers: {
          Authorization: `Bearer ${savetoken}`,
        },
      })

      .then((response) => {
        // 성공응답 (2xx) 처리
        console.log(response.data);
        setApplicants(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  // recruitContainer(로그인 확인하기 아니라면 404출력) - applicationStatus
  //                  - recruitForm

  return (
    <div className={"recruitContainer"}>
      <div className={"applicationStatus"}>
        <h1>전체 {totalApplicants}명</h1>
        <ul>
          <li>대기 {waitingApplicants}명</li>
          <li>승인 {acceptedApplicants}명</li>
          <li>반려 {rejectedApplicants}명</li>
        </ul>
        <br />
      </div>
      <div className={"recruitForm"}>
        {/*검색관리*/}
        <div className={"recruitSearch"}></div>
      </div>
      <div className={"recruitList"}>
        {applicants.map((applicant) => (
          <div key={applicant.title} className={"applicantItem"}>
            <p>번호: {applicant.content}</p>
            <p>이름: {applicant.author}</p>
            <p>연락처: {applicant.status}</p>
            <p>신청일시: {applicant.tags}</p>
            <p>상태: {applicant.viewCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function checkbox() {}
function textbox() {}

export default ManageRecruit;
