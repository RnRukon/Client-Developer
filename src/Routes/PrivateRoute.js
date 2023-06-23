import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useSelector(state => state.auth);
    let location = useLocation();

    if (isLoading) {
        return <div className='h-screen
         flex justify-center items-center ' ><h1>Loading...</h1></div>
    }
    else if (!user?.email) {
        return <Navigate to="/login" replace={true} state={{ from: location }} />
    }
    else {
        return children;
    }
};
export const CompanyRoute = ({ children }) => {
    const { user, isLoading } = useSelector(state => state.auth);


    if (isLoading) {
        return <div className='h-screen
         flex justify-center items-center ' ><h1>Loading...</h1></div>
    }
    else if (!user?.role === 'company') {
        return <Navigate to="/" />
    }
    else {
        return children;
    }
};
export const AdminRoute = ({ children }) => {
    const { user, isLoading } = useSelector(state => state.auth);


    if (isLoading) {
        return <div className='h-screen
         flex justify-center items-center ' ><h1>Loading...</h1></div>
    }
    else if (!user?.role === 'admin') {
        return <Navigate to="/" />
    }
    else {
        return children;
    }
};

