import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/share/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    );
};

export default Main;