import React from 'react';
import styles from './../../Pages.module.css';


const ExplainCookies = () => {
    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        // Wed Jul 17 2024 09:58:51 GMT+0300 (Москва, стандартное время)
        const expires = `expires=${date.toUTCString()}`
        // expires=Wed, 17 Jul 2024 06:59:13 GMT
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }


    const getCookie = (name) => {
        const cookies = document.cookie.split('; ');
        const foundResultCookie = cookies.find(cookie => cookie.startsWith(`${name}=`));
        const cookiesObject = {};
        const [nameCookies, value] = foundResultCookie.split('=');
        cookiesObject[nameCookies] = value;
        return cookiesObject
    }
    const deleteCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }


    setCookie('user_id', 'Javascript', 100);
    setCookie('user_admin', 'REACT', 100);
    const user = getCookie('user_id');
    const user1 = getCookie('user_admin');
    // deleteCookie('user_admin');
    return (
        <div >
            <h3>Работа с Cookies в React:</h3>
            <div>
                <p>UserID: {user.user_id}</p>
                <p>UserID: {user1.user_admin}</p>
            </div>
        </div>
    );
};

export default ExplainCookies;