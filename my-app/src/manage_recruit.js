import { useEffect, useState, useRef} from "react";
import {Link, useLocation} from "react-router-dom";
import useApplicants from './hooks/useRecruitments'
import axios from 'axios';
import './manage_recruit.css'
import Manage_applicantTable from "./manage_applicantTable";

function ManageRecruit(token) {
    const {data, status, error, loading} = useApplicants()
    const allStatus = {
        total: status?.length,
        pending: status?.filter(item => item.status === 'pending'),
        viewed: status?.filter(item => item.status === 'viewed'),
        approved: status?.filter(item => item.status === 'approved')
    }
    // 쿠키인증시간 끝나면??
    return (
        <div className={'recruitContainer'}>
            {/*상태확인*/}
            <div className={'summarySection'}>
                <ul className={'summaryStats'}>
                    <li className={'totalCount'}>
                        전체: {allStatus.total || 'null'}
                    </li>
                    <li className={'waitingCount'}>
                        대기중: {allStatus.pending?.length || 'null'}
                    </li>
                    <li className={'approvedCount'}>
                        조회됨: {allStatus.viewed?.length || 'null'}
                    </li>
                    <li className={'rejectedCount'}>
                        승인됨: {allStatus.approved?.length || 'null'}
                    </li>
                </ul>

            </div>
            {/*검색박스, 검색은 마지막에 작성*/}
            <div className={'managementHeader'}>
                <span className={'searchSection'}>

                </span>
            </div>

            <div className={'applicantTable'}>
                {/*코드가 너무 길어져서 따로 뺐어요*/}
                <Manage_applicantTable/>
            </div>

            {/*페이지 번호 확인 */}
            <div className={'pagination'}>
                <span className={'pageNumber'}>
                    <Manage_applicantTable type={'pagination'}/>
                </span>
            </div>


        </div>
    )

}




export default ManageRecruit;