import React from 'react';
import styles from './../Pages.module.css'
import ButtonRefsUseMemo from '../../components/ButtonForRefsUseMemo/ButtonRefsUseMemo';



const codeUseCallbackExplain = (
    <pre className={styles.preCode}>
        <code className={styles.code}>
            {
                `
                import React, { useState, useCallback } from 'react';

                const ComponentUseCallback = () => {
                    const [count, setCount] = useState(0);
                    
                    const  handleClick = useCallback(() => {
                        setCount((prevCount) => prevCount + 1)
                    },[count])

                    return (
                        <div>
                        <p>{count}</p>

                        <button onClick={handleClick}>+</button>
                        </div>
                    )
                }
                
        `
            }
        </code>
    </pre>
)

const textUseCallbackExplain =
    (
        <p>
            В этом примере <strong> handleClick</strong> будет мемоизирован и будет пересоздаваться только при изменении зависимости
            (в данном случае <strong>count</strong>), что поможет избежать лишних перерисовок компонента.
        </p>
    )


const UseCallback = () => {
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>useCallback</h1>
            <p>
                Хук <strong>useCallback</strong> принимает два параметра:
            </p>
            <div>
                <ul>
                    <li><strong>useCallback</strong> Это функция, которую мы хотим мемоизировать. Когда этот сallback вызывается, <strong>useCallback</strong> возвращает эту же функцию, если зависимости не изменились.</li>
                    <li><strong>deps</strong> - массив зависимостей, которые будут проверяться перед каждым вызовом.</li>
                </ul>
            </div>
            <div>{codeUseCallbackExplain}</div>
            <div>{textUseCallbackExplain}</div>
            <ButtonRefsUseMemo />
        </div>

    );
};

export default UseCallback;