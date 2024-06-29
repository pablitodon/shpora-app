import React, { useEffect, useState } from 'react';
import styles from "./../Pages.module.css";



const setItemGetItemCode = (
    <div>
        <div>
            <p>
                Чтобы записать строку "Hello, Redev!" в LocalStorage, можно использовать:
            </p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {
                        `
                    localStorage.setItem('myData', 'Hello, Redev!');
                    `
                    }
                </code>
            </pre>
        </div>

        <div>
            <p>
                Чтобы получить данные из LocalStorage, можно использовать метод <strong>getItem()</strong> объекта localStorage.
                Например, чтобы получить значение, которое мы только что записали, можно использовать следующий код
            </p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {
                        `
                    const myData = localStorage.getItem('myData');
                    console.log(myData); // Выводится "Hello, Redev!"
                        `
                    }
                </code>
            </pre>
        </div>
    </div>
);


const codeBlock = (
    <div className='mt-5'>
        <pre className={styles.preCode}>
        <code className={styles.code}>
            {
            `
             import React, { useEffect, useState } from 'react';
             import styles from "./../Pages.module.css";

             
            const LocalStorageComponent = () => {
            const [myData, setMyData] = useState()

                const handleChange = (e) => {
                    setMyData(e.target.value)
                };

                const handleClickToLocalStorageSave = () => {
                    localStorage.setItem('myData', myData);
                }

                useEffect(() => {
                    const data = localStorage.getItem('myData', myData);
                    if (data) {
                        setMyData(data)
                    }
                },[]);

                const explainLocalStorage = (
                    <div className='space-x-5'>
                        <input 
                            className='bg-gray-300'
                            type='text'
                            placeholder='Введите текст'
                            onChange={handleChange}
                        />
                        <span>{myData}</span>
                        <button className='p-3 bg-red-300 rounded-3xl '
                         onClick={handleClickToLocalStorageSave}
                         >
                         Запомнить.
                        </button>
                    </div>
                )
                return (
                    <div className={styles.contain}>
                        <div>
                            <h1>Local Storage</h1>
                            {setItemGetItemCode}
                        </div>
                        <h2>Простой пример  LocalStorage</h2>
                        {explainLocalStorage}
                    </div>
                );
            };

            export default LocalStorageComponent;
            
            `
            }
        </code>
        </pre>

    </div>
)




const LocalStorageComponent = () => {
    const [myData, setMyData] = useState()

    const handleChange = (e) => {
        setMyData(e.target.value)
    };

    const handleClickToLocalStorageSave = () => {
        localStorage.setItem('myData', myData);
    }

    useEffect(() => {
        const data = localStorage.getItem('myData', myData);
        if (data) {
            setMyData(data)
        }
    },[]);

    const explainLocalStorage = (
        <div className='space-x-5'>
            <input 
                className='bg-gray-300'
                type='text'
                placeholder='Введите текст'
                onChange={handleChange}
            />
            <span>{myData}</span>
            <button className='p-3 bg-red-300 rounded-3xl ' onClick={handleClickToLocalStorageSave}>Запомнить.</button>
        </div>
    )

    
    return (
        <div className={styles.contain}>
            <div>
                <h1>Local Storage</h1>
                {setItemGetItemCode}
            </div>
            <h2>Простой пример  LocalStorage</h2>
            {explainLocalStorage}
            {codeBlock}
        </div>
    );
};

export default LocalStorageComponent;