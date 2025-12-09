import { useEffect, useState } from "react";
import './manage_pagenation.css';

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
        <nav className="pagination">
            {/* 이전 버튼 */}
            <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>

            {/* 페이지 번호 버튼 */}
            {pageButtons.map((pageNum) => (
                <button
                    key={pageNum}
                    className={`pagination-btn ${currentPage === pageNum ? "active" : ""}`}
                    onClick={() => handlePageChange(pageNum)}
                >
                    {pageNum}
                </button>
            ))}

            {/* 다음 버튼 */}
            <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPage}
            >
                &gt;
            </button>
        </nav>
    );
}

export default Manage_pagenation;