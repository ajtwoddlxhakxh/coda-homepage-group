import axios from "axios";
import { useState } from "react";
import './manage_login.css'
import Recruit from '/manage_recruit'
import {Link} from "react-router-dom";


export default function Login() {
    // id, pw관리함수
    const [id, setId] = useState('123');
    const [pw, setPw] = useState('123');
    console.log(id, pw)

    // 로그인 요청 보내기
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 서버 주소교체 필요
        axios.post('http://localhost:4000/docs/#/Auth/post_auth_login', {
            email: id,
            password: pw
        })
            .then(response => {
                // 성공응답 (2xx) 처리
                <Recruit loginId={id} loginPw={pw}/>
                console.log('로그인 성공', response.data)
                // main 이동
            })
            .catch(error => {
                // 에러응답 (4xx) 처리
                if (error.status === 401) {
                    console.log("AUTH_INVALID_CREDENTIALS")
                    alert("이메일 또는 비밀번호가 올바르지 않습니다.")
                }
                else if (error.status === 429) {
                    console.log("레이트 리밋 초과")
                }
                else {
                    // 테스트용도
                    <Recruit loginId={id} loginPw={pw}/>
                    <Link to={'/admin/admins/'}></Link>

                    console.log("UNKNOWN_ERROR")
                }
            })}
    // 입력창 값이 변경될 때 id, pw갱신
    const handleUserId = (e) => {
        setId(e.target.value)
    }
    const handleUserPw = (e) => {
        setPw(e.target.value)
    }


    return (
        <div className={'loginContainer'}>
            <form className={'loginForm'} onSubmit={handleSubmit}>
                <input type="text" className={'userId'} id={'userId'} placeholder={'아이디'} onChange={handleUserId} autoFocus/><br/>
                <input type="password" className={'userPw'} id={'userPw'} placeholder={'비밀번호'} onChange={handleUserPw} />
                <button type={'submit'} className={'loginBtn'}>Login</button>
            </form>
        </div>
    );
}
