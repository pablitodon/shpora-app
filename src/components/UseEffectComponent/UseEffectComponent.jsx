import React, { useEffect, useState } from 'react';
import styles from './../../pages/Pages.module.css'
const UseEffectComponent = () => {

    const [count, setCount] = useState('');
    const [respData, setData] = useState('');


    const handleChange = (e) => {
        setCount(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
                const data = await response.json();
                setData(data)
            } catch (error) {
              alert(error)
            }
        };
        fetchData()

        return () => {
        };
    }, [count]);

    return (
        <div className='pb-5'>
            <h2 className={styles.h2}>Пример жизненного цикла (useEffect)</h2>
            <div className='max-w-sm h-[150px] bg-slate-300 p-5 rounded-lg '>
                <label className='font-bold ' >
                    Введи цифру 1-100:
                    <input
                        type="text"
                        value={count}
                        onChange={handleChange}
                    />
                </label>
                <div>
                    <span className={styles.span}>Текст твоего номера:<br />
                        {respData.title}
                    </span>
                </div>
            </div>
        </div>

    );
};

export default UseEffectComponent;