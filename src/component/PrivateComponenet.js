import React from 'react';
import '../App.css';
import {Navigate,Outlet} from 'react-router-dom';

const PrivetComponenet = () => {

    const auth = localStorage.getItem("user");
    return auth ? <Outlet/> : <Navigate to="/signup" />;

}

export default PrivetComponenet;