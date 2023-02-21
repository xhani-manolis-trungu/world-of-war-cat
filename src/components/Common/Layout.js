import React from 'react';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div className="page">
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;


