import React from 'react';
import useHealthCheck from './hooks/useHealthCheck';

function HealthCheck() {
  const { healthStatus, loading, error, refetch } = useHealthCheck(true);

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '30px' }}>
      <h2>서버 상태 체크</h2>

      <button onClick={refetch} disabled={loading}>
        {loading ? '확인 중...' : '상태 새로고침'}
      </button>

      {loading && <p>서버 상태를 확인하는 중...</p>}

      {error && (
        <div style={{ color: 'red', padding: '10px', border: '1px solid red' }}>
          <p>오류: {error}</p>
        </div>
      )}

      {healthStatus && !loading && (
        <div style={{ color: 'green', padding: '10px', border: '1px solid green' }}>
          <h3>서버 응답:</h3>
          <pre>{JSON.stringify(healthStatus, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default HealthCheck;
