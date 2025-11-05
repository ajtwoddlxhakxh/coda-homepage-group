import React, { useState, useEffect } from 'react';
import { projectApi } from './projectApi';

function Position() {
    const [positions, setPositions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPositions = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:3000/public/positions');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setPositions(data);
            } catch (err) {
                setError(err.message);
                console.error('공고 목록 조회 실패:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPositions();
    }, []);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>에러: {error}</div>;
    }

    return (
        <div>
            <h2>현재 모집 중인 공고</h2>
            <p>총 {positions.length}개의 공고</p>
            {positions.length === 0 ? (
                <p>현재 모집 중인 공고가 없습니다.</p>
            ) : (
                <div>
                    {positions.map((position, index) => (
                        <div key={position.id || index}>
                            <h3>{position.title || '제목 없음'}</h3>
                            <p>{position.description || '설명 없음'}</p>
                            <div>
                                <div>모집 기간: {position.startDate} ~ {position.endDate}</div>
                                <div>모집 인원: {position.recruitCount || '미정'}명</div>
                                <div>상태: {position.status || '모집중'}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const data = await projectApi.getProjects();
                setProjects(data);
            } catch (err) {
                setError(err.message);
                console.error('프로젝트 목록 조회 실패:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>에러: {error}</div>;
    }

    return (
        <div>
            <h2>프로젝트 목록</h2>
            <p>총 {projects.length}개의 프로젝트</p>
            {projects.length === 0 ? (
                <p>등록된 프로젝트가 없습니다.</p>
            ) : (
                <div>
                    {projects.map((project, index) => (
                        <div key={project.id || index}>
                            <h3>{project.title || '제목 없음'}</h3>
                            <p>{project.description || '설명 없음'}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function RecruitStatus() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [statusData, setStatusData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(null);
            setStatusData(null);

            const data = await projectApi.checkRecruitStatus(email, phone);
            setStatusData(data);
        } catch (err) {
            setError(err.message);
            console.error('지원서 상태 조회 실패:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h2>지원서 상태 확인</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        이메일:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px' }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        전화번호:
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px' }}
                            required
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    style={{ padding: '5px 15px', cursor: 'pointer' }}
                >
                    {loading ? '조회 중...' : '상태 확인'}
                </button>
            </form>

            {error && (
                <div style={{ marginTop: '15px', color: 'red' }}>
                    에러: {error}
                </div>
            )}

            {statusData && (
                <div style={{ marginTop: '15px' }}>
                    <h3>서버 응답 데이터:</h3>
                    <pre style={{
                        backgroundColor: '#f4f4f4',
                        padding: '15px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        overflow: 'auto'
                    }}>
                        {JSON.stringify(statusData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}

function Test() {
    const [healthCheck, setHealthCheck] = useState(null);

    useEffect(() => {
        const checkHealth = () => {
            const status = {
                status: 'OK',
                timestamp: new Date().toISOString(),
                service: 'React App',
                environment: process.env.NODE_ENV || 'development'
            };
            setHealthCheck(status);
        };

        checkHealth();
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'monospace' }}>
            <h2>Health Check</h2>
            {healthCheck && (
                <pre style={{
                    backgroundColor: '#f4f4f4',
                    padding: '15px',
                    borderRadius: '5px',
                    border: '1px solid #ddd'
                }}>
                    {JSON.stringify(healthCheck, null, 2)}
                </pre>
            )}

            <Position />
            <Projects />
            <RecruitStatus />
        </div>
    );
}

export default Test;