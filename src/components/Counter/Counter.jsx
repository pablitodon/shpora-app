import React, { useState } from 'react';
import styles from './Counter.module.css'
const Counter = () => {
    const [state, setState] = useState(0)
    const increment = () => setState(state => state + 1);
    const decrement = () => setState(state => state - 1);
    return (
        <div className={styles.counterWrapp}>
            <h1 className='text-xl font-bold'>Counter:{state}</h1>
           
            <button
                onClick={increment}
                className={styles.btn__change}
            >
                count + 1
            </button>

            <button
                onClick={decrement}
                className={styles.btn__change}
            >
                count - 1
            </button>
        </div>
    );
};

export default Counter;