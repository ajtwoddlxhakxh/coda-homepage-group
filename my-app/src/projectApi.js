const BASE_URL = process.env.REACT_APP_API_URL;

export const projectApi = {
    // GET /projects - 프로젝트 목록 조회
    getProjects: async () => {
        try {
            const response = await fetch(`${BASE_URL}/projects`, {
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('프로젝트 목록 조회 실패:', error);
            throw error;
        }
    },

    // POST /public/recruits/status - 지원서 상태 확인
    checkRecruitStatus: async (email, phone) => {
        try {
            const response = await fetch(`${BASE_URL}/public/recruits/status`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, phone })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('지원서 상태 조회 실패:', error);
            throw error;
        }
    }
};