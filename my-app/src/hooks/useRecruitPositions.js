import { useEffect, useState } from "react";
import axios from "axios";

function useRecruitPositions() {
  const baseURL = process.env.REACT_APP_API_URL;
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!baseURL) {
      setError(new Error("REACT_APP_API_URL이 설정되지 않았습니다."));
      setLoading(false);
      return;
    }

    const endpoint = "/public/positions";

    setLoading(true);
    axios
      .get(`${baseURL}${endpoint}`)
      .then((res) => {
        setPositions(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [baseURL]);

  return { positions, loading, error };
}

export default useRecruitPositions;
