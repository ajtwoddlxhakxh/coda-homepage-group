import { useEffect, useState, useRef} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import './manage_recruit.css'
// TODO 관리자 전체목록 불러오기(max), 로그인한 관리자 목록 불러오기


function ManageRecruit(loginId) {
        // 전체 지원자수, 대기 지원자수, 승인 지원자수, 반려 지원자수 상태를 관리함
        const [totalApplicants, setTotalApplicants] = useState(0);
    const [waitingApplicants, setWaitingApplicants] = useState(0);
    const [acceptedApplicants, setAcceptedApplicants] = useState(0);
    const [rejectedApplicants, setRejectedApplicants] = useState(0);

        // 로그인 상태를 관리함
        const [loginStatus, setLoginStatus] = useState(false);
    // TODO get요청에서 데이터를 body에 담지않게 수정필요
    // www.example.com/resources?name1=value1&name2=value2


    useEffect(() => {
        axios.get(`/admin/admins/:${loginId}`)
            .then(response => {
                // 성공응답 (2xx) 처리
                setLoginStatus(true)
                console.log(response.data)
            })
            .catch(error => {
                    alert(error.message)

            })
            // .finally(final => {
            //     alert('hello', {final})
            // })


    });

    // recruitContainer(로그인 확인하기 아니라면 404출력) - applicationStatus
    //                  - recruitForm


    return (

        <div className={'recruitContainer'}>
            {/*로그인 상태가 아닐 때*/}
            if (!loginStatus) {

        }
            <div className={'applicationStatus'}>
                <h1>전체 {totalApplicants}명</h1>
                <ul>
                    <li>대기 {waitingApplicants}명</li>
                    <li>승인 {acceptedApplicants}명</li>
                    <li>반려 {rejectedApplicants}명</li>
                </ul>
            </div>
            <div className={'recruitForm'}>
                {/*검색관리*/}
                <div className={'recruitSearch'}>

                </div>

            </div>
        </div>
    );
}

export default ManageRecruit;