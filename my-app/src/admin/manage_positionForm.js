import axios from "axios";
import { useState } from "react";
import './manage_positionForm.css';

export default function ManagePositionForm({ onClose, onSuccess }) {
    // 폼 상태 관리
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [fields, setFields] = useState([]);
    const [newField, setNewField] = useState('');
    const [isPublic, setIsPublic] = useState(true);

    // UI 상태
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const baseURL = process.env.REACT_APP_API_URL;

    // 모집 분야 추가
    const handleAddField = () => {
        if (newField.trim() && !fields.includes(newField.trim())) {
            setFields([...fields, newField.trim()]);
            setNewField('');
        }
    };

    // 모집 분야 삭제
    const handleRemoveField = (indexToRemove) => {
        setFields(fields.filter((_, index) => index !== indexToRemove));
    };

    // Enter 키로 분야 추가
    const handleFieldKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddField();
        }
    };

    // 날짜 유효성 검증
    const validateDates = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (end <= start) {
            setError('종료일은 시작일보다 이후여야 합니다.');
            return false;
        }
        return true;
    };

    // 폼 제출
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 유효성 검증
        if (!title.trim() || !startDate || !endDate) {
            setError('제목, 시작일, 종료일은 필수입니다.');
            return;
        }

        if (!validateDates()) return;

        setLoading(true);
        setError(null);

        const token = localStorage.getItem('authToken');

        try {
            const response = await axios.post(
                `${baseURL}/admin/positions`,
                {
                    title: title.trim(),
                    startDate: new Date(startDate).toISOString(),
                    endDate: new Date(endDate).toISOString(),
                    fields,
                    isPublic
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('공고 생성 성공:', response.data);

            if (onSuccess) onSuccess(response.data);
            if (onClose) onClose();

        } catch (err) {
            if (err.response?.status === 400) {
                setError('입력값을 확인해주세요.');
            } else if (err.response?.status === 401) {
                setError('인증이 만료되었습니다. 다시 로그인해주세요.');
            } else {
                setError('공고 생성 중 오류가 발생했습니다.');
            }
            console.error('Position creation error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="positionFormOverlay" onClick={onClose}>
            <div className="positionFormContainer" onClick={(e) => e.stopPropagation()}>
                <div className="positionFormHeader">
                    <h2>신규 모집 공고 작성</h2>
                    <button className="closeBtn" onClick={onClose}>×</button>
                </div>

                <form className="positionForm" onSubmit={handleSubmit}>
                    {error && <div className="errorMessage">{error}</div>}

                    <div className="formGroup">
                        <label htmlFor="title">공고 제목 *</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="예: 2025년 상반기 신입 부원 모집"
                            required
                        />
                    </div>

                    <div className="formGroup dateGroup">
                        <div className="dateField">
                            <label htmlFor="startDate">시작일 *</label>
                            <input
                                type="date"
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                        <span className="dateSeparator">~</span>
                        <div className="dateField">
                            <label htmlFor="endDate">종료일 *</label>
                            <input
                                type="date"
                                id="endDate"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="formGroup">
                        <label>모집 분야</label>
                        <div className="fieldInputGroup">
                            <input
                                type="text"
                                value={newField}
                                onChange={(e) => setNewField(e.target.value)}
                                onKeyPress={handleFieldKeyPress}
                                placeholder="분야 입력 후 추가 (예: 프론트엔드)"
                            />
                            <button type="button" className="addFieldBtn" onClick={handleAddField}>
                                추가
                            </button>
                        </div>
                        {fields.length > 0 && (
                            <div className="fieldTags">
                                {fields.map((field, index) => (
                                    <span key={index} className="fieldTag">
                                        {field}
                                        <button type="button" onClick={() => handleRemoveField(index)}>×</button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="formGroup checkboxGroup">
                        <label>
                            <input
                                type="checkbox"
                                checked={isPublic}
                                onChange={(e) => setIsPublic(e.target.checked)}
                            />
                            공개 (체크 해제 시 비공개)
                        </label>
                    </div>

                    <div className="formActions">
                        <button type="button" className="cancelBtn" onClick={onClose}>
                            취소
                        </button>
                        <button type="submit" className="submitBtn" disabled={loading}>
                            {loading ? '생성 중...' : '공고 생성'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
