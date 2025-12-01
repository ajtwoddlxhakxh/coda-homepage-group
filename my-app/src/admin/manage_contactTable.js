import { useEffect, useState, useRef } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Manage_applicantTable({ currentPage, items = [], itemsPerPage = 6 }) {

    // 현재 페이지에 해당하는 항목만 추출
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    // 선택된 항목들의 ID를 관리하는 상태
    const [selectedItems, setSelectedItems] = useState(new Set());

    // 현재 확장된 행의 ID를 관리하는 상태
    const [expandedId, setExpandedId] = useState(null);

    // 페이지 변경 시 확장된 행 초기화
    useEffect(() => {
        setExpandedId(null);
    }, [currentPage]);

    // 행 클릭 핸들러 (확장/축소)
    const handleRowClick = (itemId) => {
        setExpandedId(expandedId === itemId ? null : itemId);
    };

    // 전체 선택/해제 핸들러 (현재 페이지 기준)
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            // 현재 페이지의 모든 항목 선택
            const newSelected = new Set(selectedItems);
            currentItems.forEach(item => newSelected.add(item._id));
            setSelectedItems(newSelected);
        } else {
            // 현재 페이지의 모든 항목 선택 해제
            const newSelected = new Set(selectedItems);
            currentItems.forEach(item => newSelected.delete(item._id));
            setSelectedItems(newSelected);
        }
    };

    // 개별 항목 선택/해제 핸들러
    const handleSelectItem = (itemId) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(itemId)) {
            newSelected.delete(itemId);
        } else {
            newSelected.add(itemId);
        }
        setSelectedItems(newSelected);
    };

    // 날짜를 년-월-일 형식으로 포맷팅
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const getCellContent = (header, item) => {
        if (header.type === 'checkbox') {
            return (
                <input
                    type="checkbox"
                    onChange={() => handleSelectItem(item._id)}
                    checked={selectedItems.has(item._id)}
                />
            );
        }
        if (header.key === 'createdAt') {
            return formatDate(item[header.key]);
        }
        // if (header.key === 'status') {
        //     return (
        //     )
        // }
        return item[header.key];
    };

    const manageTableHeaders = [
        { key: 'checkbox', data: '', type: 'checkbox' },
        { key: '_id', data: '번호' },
        { key: 'email', data: '이메일' },
        { key: 'tag', data: '문의 유형' },
        { key: 'createdAt', data: '신청일시' },
        { key: 'status', data: '상태' }
    ];

    // 현재 페이지의 모든 항목이 선택되었는지 확인
    const isAllCurrentPageSelected = currentItems.length > 0 &&
        currentItems.every(item => selectedItems.has(item._id));

    return (
        <table>
            {/*테이블 머리*/}
            <thead>
            <tr>
                {manageTableHeaders.map((header) => (
                    <th key={header.key}>
                        {header.type === 'checkbox' ? (
                            <input
                                type={'checkbox'}
                                onChange={handleSelectAll}
                                checked={isAllCurrentPageSelected}
                            />
                        ) : (
                            header.data
                        )}
                    </th>
                ))}
            </tr>
            </thead>

            <tbody>
            {
                currentItems.map((item, id) => (
                    <React.Fragment key={item._id}>
                        {/* 신청자 정보 행 */}
                        <tr
                            onClick={() => handleRowClick(item._id)}
                            className={`clickableRow ${expandedId === item._id ? 'expanded' : ''}`}
                        >
                            {
                                manageTableHeaders.map((header) => (
                                    <td
                                        key={header.key + id}
                                        onClick={header.type === 'checkbox' ? (e) => e.stopPropagation() : undefined}
                                    >
                                        {getCellContent(header, item)}
                                    </td>
                                ))
                            }
                        </tr>

                        {/* 클릭한 행 바로 아래에 상세 정보 표시 */}
                        {expandedId === item._id && (
                            <tr className="detailRow">
                                <td colSpan={manageTableHeaders.length}>
                                    <div className="detailContent">
                                        <div className="detailHeader">상세 정보</div>
                                        <div className="detailGrid">
                                            <div className="detailItem">
                                                <span className="detailLabel">이메일</span>
                                                <span className="detailValue">{item.email || '-'}</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="detailLabel">연락처</span>
                                                <span className="detailValue">{item.phone ? item.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') : '-'}</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="detailLabel">신청일시</span>
                                                <span className="detailValue">{formatDate(item.createdAt)}</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="detailLabel">상태</span>
                                                <span className="detailValue">{item.status}</span>
                                            </div>
                                        </div>
                                        <div className="detailDocuments">
                                            <span className="detailLabel">지원내용</span>
                                            <div className="documentsText">
                                                {item.documents || '지원내용이 없습니다.'}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))
            }
            </tbody>
        </table>
    );
}

export function getPage() {
    alert('ggg');
}

export default Manage_applicantTable;