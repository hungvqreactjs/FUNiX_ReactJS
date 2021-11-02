import React from 'react';
import Header from '../components/Header'

const Layout = ({children}) => {
    return (
        <div className="main-layout">
            <Header />
            {children}
        </div>
    )
}

export default Layout

