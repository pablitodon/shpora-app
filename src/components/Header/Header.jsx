import React from 'react';
import styles from './Header.module.css';
import logo from './images/logo.jpg';
import {Link, Outlet, } from 'react-router-dom';




const Header = () => {

    return (
        <>
            <header className={styles.header}>
                <Link to="/">Home</Link>
                <Link to="/blog">BLOG</Link>
                <h2>REACTJS</h2>
                <img src={logo} className={styles.logo} alt='logo' />
            </header>
            <Outlet />
        </>
    );
};

export default Header;