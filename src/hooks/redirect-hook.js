import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useRedirectLogUser = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.token) {
            navigate('/');
        }
    });
};

