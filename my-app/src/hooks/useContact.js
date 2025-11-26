import {useState, useEffect} from "react";
import axios from 'axios'

// TODO 신청자 정보 받아오기, return값은? id, name같은건 []배열 하나에 넣어놓고, error반환,


function useContact(type) {
        const baseURL = process.env.REACT_APP_API_URL;
        const savetoken = localStorage.getItem('authToken')
        const [data, setData] = useState();
        const [status, setStatus] = useState();
        const [error, setError] = useState();
        const [loading, setLoading] = useState(false);

    useEffect(() => {
        const endpoints = '/inquiries/admin'


        axios.get(`${baseURL}${endpoints}`,
            {
                headers: {
                    Authorization: `Bearer ${savetoken}`
                }
            }
        )
            .then(response => {
                setData(response.data)
                setStatus(response.data)
                setLoading(true)

                //
                // tag: { type: String, required: true, enum: ['일반 문의', '시스템 문의', '지원 문의', '기타 문의']},
                // email: { type: String, required: true },
                // subject: { type: String, required: true }, // 문의 제목
                // message: { type: String, required: true }, // 문의 내용
                // status: {
                //     type: String,
                //     enum: ['in-progress', 'resolved'], // '신규', '처리중', '해결됨'
                // default: 'in-progress',

            })
            .catch(err =>{
                setError(err)
                setLoading(true)
            })



    }, []);

    return {
        data,
        status,
        error,
        loading
    }
}

export default useContact;
