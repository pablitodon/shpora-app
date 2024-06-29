import React from 'react';
import styles from './../../pages/Pages.module.css'
import { useNavigate } from 'react-router-dom';

const ButtonRefsUseMemo = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Refs,Fragment,key,React.memo,useMemo,...')
    }
    return (
        <div className=' flex justify-center text-xl'>
                <button className={styles.button} onClick={handleClick}>Назад</button>
            </div>
    );
};

export default ButtonRefsUseMemo;