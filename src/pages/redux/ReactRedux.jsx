import React from 'react';
import styles from './../Pages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counter'


const basciConseptReact =
    (
        <div>
            <div>
                <h2>Store</h2>
                <p>
                    <span>Store</span> - это центральное хранилище состояния приложения.
                    Он содержит все данные, необходимые для работы приложения.
                    Данные в Store организованы в виде древовидной структуры состояния.
                </p>
            </div>
            <div>
                <h2> Actions</h2>
                <p> <span>Actions</span> представляют собой объекты,которые описывают какое изменение
                    должно произойти в состоянии приложения. Они содержат два ключевых свойства:
                    <span>type</span> (тип действия) и <span>payload</span> (полезная нагрузка - данные, необходимые для изменения состояния).
                </p>
            </div>
            <div>
                <h2>Reducers</h2>
                <p>
                <span>Reducers</span> это чистые функции*,
                которые принимают текущее состояние и действие, и возвращают
                новое состояние. Они определяют, как изменения, описанные в действиях,
                должны быть применены к состоянию..
                </p>
            </div>
        </div>
    );




const ReactRedux = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count)
    return (
        <div className={styles.contain}>
            <h1>React-Redux: actions, reducers, store,…</h1>
            <h2>Основные понятия Redux</h2>
            {basciConseptReact}
            <div>
                <h2>counter: {count}</h2>
                <button className={styles.button} onClick={() => dispatch(increment())} >Increment</button>
                <button className={styles.button} onClick={() => dispatch(decrement())} >Decrement</button>
            </div>
        </div>
    );
};

export default ReactRedux;