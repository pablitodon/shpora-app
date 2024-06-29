import React from 'react';
import styles from './../Pages.module.css'
import {  useNavigate } from 'react-router-dom';


const arrUsageExampleRef = [
    'Управление фокусом, выделение текста.',
    'Выполнение анимаций.',
    'Интеграция со сторонними библиотеками, взаимодействующие с DOM.'
]


const Refs = () => {

const navigate = useNavigate();

const handleClick =  () => {
    navigate('/Refs,Fragment,key,React.memo,useMemo,...')
}

    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>Refs</h1>
            <p>
                Refs (далее просто “ссылки”) предоставляет способ доступа к DOM-узлам или React-элементам,
                созданным в методе<span className={styles.span}>{` render()`}</span>.
            </p>
            <p className='pt-2'>
                <span className={styles.span}>Ссылки </span> 
                 позволяют вам получить доступ к DOM-узлам или
                React-элементам, созданным в
                методе<span className={styles.span}>{` render()`}</span>.
            </p>
            <div>
                <p className='pt-2'>Есть несколько хороших примеров использования ссылок:</p>
                <ul className='font-bold'>
                    {arrUsageExampleRef.map((text, id) => {
                        return <li key={id}>-{text}</li>
                    })}
                </ul>
            </div>
            <div>
                <p>Пример(управление focus):</p>
                <pre className={styles.preCode}>
                    <code className={styles.code}>
                        {
                            `
                            import React, { useEffect, useState, Fragment, useRef } from 'react'

                            const Test = () => {
                                const [text, setText] = useState('')
                                const textInput = useRef(null)
                                const valid = () => {
                                    textInput.current.focus()
                                }
                                return (
                                    <div>
                                        <input ref={textInput} value={text} />
                                        <button onClick={() => valid()}>
                                            Click to focus
                                        </button>
                                    </div>
                                )
                            }
                            
                            export default Test 
                    `
                        }
                    </code>
                </pre>
            </div>
            <div className=' flex justify-center text-xl'>
                <button className={styles.button} onClick={handleClick}>Назад</button>
            </div>
        </div>
    );
};

export default Refs;