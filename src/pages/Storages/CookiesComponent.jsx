import React from 'react';
import styles from './../Pages.module.css'
import ExplainCookies from './ExplainCookies/ExplainCookies';




const finalText = (
    <div>
        <h2>Заключение</h2>
        <p>
            Cookies - это удобный механизм хранения небольших данных на стороне клиента,
            который можно использовать в React приложениях для сохранения состояния,
            аутентификации и персонализации. Однако стоит помнить о его ограничениях,
            таких как ограниченный объем данных и срок хранения. При выборе между Cookies и Local Storage
            важно учитывать конкретные требования вашего приложения и его функциональности.
        </p>
    </div>
)


const installCookies = (
    <div >
        <pre className={styles.preCode}>
            <code className={styles.code}>
                {
                    `
                    document.cookie = "user_id=123; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/"
                    `
                }
            </code>
        </pre>
    </div>
)



const CookiesComponent = () => {
    return (
        <div className={styles.contain}>
            <h1>Cookies</h1>
            <h2>Установка Cookies</h2>
            {installCookies}
            <ExplainCookies />
            {finalText}
        </div>
    );
};

export default CookiesComponent;