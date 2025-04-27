import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/sidebar';
import Header from './Components/header';
import Dashboard from './Pages/Dashboard';

const Main = () => {
    return (
        <>
            <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </div>
        </>
    );
};

export default Main;