import React, { useState, useEffect } from 'react';
import styles from '../Pages.module.css';



const setItemGetItemCode = (
    <div>
        <div>
            <p>
                Чтобы записать строку "Hello, Redev!" в Session Storage, можно использовать:
            </p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {
                        `
                    sessionStorage.setItem('myData', 'Hello, Redev!');
                    `
                    }
                </code>
            </pre>
        </div>

        <div>
            <p>
                Чтобы получить данные из Session Storage, можно использовать метод <strong>getItem()</strong> объекта sessionStorage.
                Например, чтобы получить значение, которое мы только что записали, можно использовать следующий код
            </p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {
                        `
                    const myData = sessionStorage.getItem('myData');
                    console.log(myData); // Выводится "Hello, Redev!"
                        `
                    }
                </code>
            </pre>
        </div>
    </div>
);



const SessionStorage = () => {
    const [myData, setMyData] = useState();

    const handleChange = (e) => {
        setMyData(e.target.value);
    };

    const handleClickToSessionStorageSave = () => {
        sessionStorage.setItem('myData', myData);
    };

    useEffect(() => {
        const data = sessionStorage.getItem('myData');
        if (data) {
            setMyData(data);
        }
    }, []);

    const explainSessionStorage = (
        <div className='space-x-5'>
            <input
                className='bg-gray-300'
                type='text'
                placeholder='Введите текст'
                onChange={handleChange}
            />
            <span>{myData}</span>
            <button className='p-3 bg-blue-300 rounded-3xl' onClick={handleClickToSessionStorageSave}>Запомнить.</button>
        </div>
    );



    return (
        <div className={styles.contain}>
            <h1>Session Storage</h1>
            {setItemGetItemCode}
            <h2>Example Session Storage</h2>
            {explainSessionStorage}
            
        </div>
    );
};

export default SessionStorage;