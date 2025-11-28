import { useEffect, useState } from "react";

function Manage_pagenation({ totalPage, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
        onPageChange(pageNum);
    };

    // 페이지 버튼 배열 생성
    const pageButtons = [];
    for (let i = 1; i <= totalPage; i++) {
        pageButtons.push(i);
    }

    return (
        <nav>
            {/* 이전 버튼 */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                이전
            </button>

            {/* 페이지 번호 버튼 */}
            {pageButtons.map((pageNum) => (
                <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={currentPage === pageNum ? "active" : ""}
                >
                    {pageNum}
                </button>
            ))}

            {/* 다음 버튼 */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPage}
            >
                다음
            </button>
        </nav>
    );
}

export default Manage_pagenation;