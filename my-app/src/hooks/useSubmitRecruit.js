import { useState } from 'react';
import axios from 'axios';

const useSubmitRecruit = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const baseURL = process.env.REACT_APP_API_URL;

    const submitRecruit = async (recruitData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post(
                `${baseURL}/public/recruits`,
                recruitData
            );
            setSuccess(true);
            return response.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { submitRecruit, loading, error, success };
};

export default useSubmitRecruit;
