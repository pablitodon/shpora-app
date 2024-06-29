import React from 'react';
import styles from '../Pages.module.css';
import { Link } from "react-router-dom";
import LocalStorageComponent from './LocalStorageComponent';
import LocalForage from './LocalForage';
import SessionStorage from './SessionStorage';
import CookiesComponent from './CookiesComponent';


const titlePage = (
    <div>
        <h1>Про STORAGEs (Local Storage, Session Storage, Local Forage…)</h1>
    </div>);


const termAndLinkLocalStorage = (
    <div >
        <h2>LocalStorage</h2>
        <p>
            <Link className="text-teal-500 underline decoration-teal-500 hover:opacity-80" to="/localstorage" element={<LocalStorageComponent />}>Local Storage </Link>
            - это механизм, который позволяет веб-приложениям сохранять данные локально в браузере.
            Это означает, что данные <strong>будут сохранены после закрытия браузера и перезагрузки страницы.</strong>
            <br />
            <br />
            <span>LocalStorage</span> может быть использован для хранения различных типов данных, таких как строки, числа,
            булевы значения и объекты. Он может быть полезен для хранения пользовательских настроек (например темная тема на сайте),
            предпочтений пользователя и других данных, которые могут быть использованы для персонализации пользовательского опыта.
        </p>
    </div>
)


const termAndLinkCookies = (
    <div >
        <h2>Cookies</h2>
        <p>
            <Link className="text-teal-500 underline decoration-teal-500 hover:opacity-80" to="/cookiescomponent" element={<CookiesComponent />}>Cookies </Link>
            это небольшие текстовые файлы, которые веб-сайты отправляют и хранят на компьютере пользователя через его веб-браузер.
            Они представляют собой удобный механизм для хранения небольших данных, связанных с пользователем и веб-сайтом.
            В контексте React приложений, cookies могут быть использованы для сохранения состояния приложения и обеспечения персонализации.
            <br />
            <br />
            <span>LocalStorage</span> может быть использован для хранения различных типов данных, таких как строки, числа,
            булевы значения и объекты. Он может быть полезен для хранения пользовательских настроек (например темная тема на сайте),
            предпочтений пользователя и других данных, которые могут быть использованы для персонализации пользовательского опыта.
        </p>
    </div>
)

const termAndLinkSessionStorage = (
    <div >
        <h2>SessionStorage</h2>
        <p>
            <Link className="text-teal-500 underline decoration-teal-500 hover:opacity-80" to="/sessionStorage" element={<SessionStorage />}>Session Storage </Link>
            - это еще один механизм хранения данных в браузере, который работает так же, как и LocalStorage. Однако Session Storage имеет ряд отличий от LocalStorage.
            <br />
            <br />
            <strong>Session Storage сохраняет данные только на время сеанса браузера.</strong> Это означает,
            что данные будут удалены после закрытия браузера или вкладки. Это может быть полезно для хранения временных данных,
            таких как формы, которые не нужно сохранять после закрытия браузера.Кроме того, Session Storage имеет более ограниченный
            объем хранения данных, чем LocalStorage. Это означает, что он может быть полезен <strong>для хранения небольших объемов</strong> данных,
            которые нужно сохранить только на время сеанса браузера.
        </p>
    </div>
)

const termAndLinkLocalForage = (
    <div >
        <h2>LocalForage</h2>
        <p>
            <Link className="text-teal-500 underline decoration-teal-500 hover:opacity-80" to="/localforage" element={<LocalForage />}>LocalForage </Link>
            это JavaScript-библиотека, предоставляющая удобный асинхронный интерфейс для работы с локальными хранилищами в браузерах.
            Эта библиотека позволяет сохранять данные в браузере пользователя,
            используя различные хранилища, такие как IndexedDB, WebSQL
            и localStorage, в зависимости от поддержки браузера.
            <br />
            <br />
            Эта библиотека позволяет асинхронно сохранять и извлекать данные из различных хранилищ, обеспечивая более эффективное управление данными на стороне клиента.
             Работа с <span>localForage</span> интуитивно понятна и удобна для сохранения пользовательских настроек,
             кэширования данных и других задач, требующих локального хранения данных.
        </p>
    </div>
)


const StoragesComponent = () => {
    return (
        <div className={styles.contain}>
            {titlePage}
            {termAndLinkLocalStorage}
            {termAndLinkCookies}
            {termAndLinkSessionStorage}
            {termAndLinkLocalForage}
        </div>
    );
};

export default StoragesComponent;