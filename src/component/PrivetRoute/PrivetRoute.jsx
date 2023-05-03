
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);
    if (loading) {
        return <progress className="progress progress-success w-56" value="100" max="100"></progress>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
        // <Navigate></Navigate>

    );
};

export default PrivetRoute;
