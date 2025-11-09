import { useState, useEffect } from 'react';
import axios from 'axios';

function useHealthCheck(autoFetch = false) {
  const [healthStatus, setHealthStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API 호출 함수
  const fetchHealthStatus = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('/public/health');
      setHealthStatus(response.data);
      return response.data;
    } catch (err) {
      const errorMessage = err.message || '서버 상태를 확인할 수 없습니다.';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // autoFetch가 true면 컴포넌트 마운트 시 자동 호출
  useEffect(() => {
    if (autoFetch) {
      fetchHealthStatus();
    }
  }, [autoFetch]);

  return {
    healthStatus,
    loading,
    error,
    refetch: fetchHealthStatus,
  };
}

export default useHealthCheck;
