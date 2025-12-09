import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import useContact from '../hooks/useContact'
import ManageContact from './manage_contactTable';

import Manage_pagenation from "./manage_pagenation";
    import Manage_contactTable from "./manage_contactTable";

const ITEMS_PER_PAGE = 6;

function ManageRecruit(token) {
    const { data, status, error, loading } = useContact();

    // 로컬 상태로 status 관리
    const [localStatus, setLocalStatus] = useState([]);

    // useContact에서 받은 status를 로컬 상태로 동기화
    useEffect(() => {
        if (status) {
            setLocalStatus(status);
        }
    }, [status]);

    const allStatus = {
        total: localStatus?.length,
        progress: localStatus?.filter((item) => item.status === "pending"),
        resolved: localStatus?.filter((item) => item.status === "resolved")
    };

    // 상태 변경 핸들러
    const handleStatusChange = (itemId, newStatus) => {
        setLocalStatus(prevStatus =>
            prevStatus.map(item =>
                item._id === itemId ? { ...item, status: newStatus } : item
            )
        );
    };

    // 페이지 위치 관리
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil((localStatus?.length || 0) / ITEMS_PER_PAGE);
    // 쿠키인증시간 끝나면??
    console.log(data)
    return (
        <div className={"recruitContainer"}>
            {/*상태확인*/}
            <div className={"summarySection"}>
                <span className={"summaryHeader"}>요약</span>
                <span>
                <ul className={"summaryStats"}>
                    <li className={"totalCount"}>전체: {allStatus.total ?? 0}</li>
                    <li className={"waitingCount"}>
                        대기: {allStatus.progress?.length || 'null'}
                    </li>
                    <li className={"approvedCount"}>
                        완료: {allStatus.resolved?.length ?? null}
                    </li>
                </ul>
                    </span>
            </div>
        {/*    <div className={"managementHeader"}>*/}
        {/*<span className={"searchSection"}>*/}
        {/*    <input type={'search'} placeholder={'Search'}/>*/}
        {/*    <button className={"selectAllButton"}>전체 선택</button>*/}
        {/*</span>*/}
        {/*    </div>*/}
            <div className={"applicantTable"}>
                {/*코드가 너무 길어져서 따로 뺐어요*/}
                <span><h1>문의관리</h1> </span>

                <Manage_contactTable
                    currentPage={currentPage}
                    items={localStatus}
                    onStatusChange={handleStatusChange}
                    className={"contactTable"}
                />
            </div>

            {/*페이지 번호 확인 */}
            <div className={"pagination"}>
        <span className={"pageNumber"}>
          <Manage_pagenation
              totalPage={totalPages}
              onPageChange={setCurrentPage}
          />
        </span>
            </div>
        </div>
    );
}

export default ManageRecruit;
