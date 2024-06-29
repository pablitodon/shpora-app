import React from 'react';

import styles from "./../Pages.module.css";
import { useNavigate } from 'react-router-dom';







const Keys = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Refs,Fragment,key,React.memo,useMemo,...')
    }

    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>Keys</h1>
            <div>
                <p>
                    Ключи помогают React определять, какие элементы были изменены, добавлены или удалены.
                    Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени.
                </p>
                <p>
                    Лучший способ выбрать ключ — это использовать строку, которая будет <span className={styles.span}> явно отличать элемент списка от его соседей.</span>
                    Чаще всего ты будешь использовать ID из твоих данных как ключи. Если нет ID используй библиотеку uuid:
                </p>
            </div>
            <div>
                <pre className={styles.preCode}>
                    <code className={styles.code} >
                        {
                            `
                        import { v4 as uuidv4 } from 'uuid';


                        const items = ['a', 'b', 'c'];

                        const todos = items.map(elem => {
                            return { name: elem, id: uuidv4() }
                        })


                        const Keys = () => {
                            return (
                                <div>
                                    {todos.map((todo) => <li key={todo.id}>{todo.name}</li>)}
                                </div>
                            )

                        }
                        `
                        }
                    </code>
                </pre>
                <p>
                    Без key механизм reconciliation сверяет компоненты попарно между текущим и новым VDOM.
                    Из-за этого может происходить большое количество лишних перерисовок интерфейса, что замедляет работу приложения.
                </p>
            </div>
            <div className=' flex justify-center text-xl'>
                <button className={styles.button} onClick={handleClick}>Назад</button>
            </div>

        </div>
    );
};

export default Keys;