import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './../../../pages/Pages.module.css';

const ButtonBackPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/react-hook-form VS formik');
    }

    return (
        <div>
        <button className={styles.button}  onClick={handleClick}>Back</button>
        </div>
    );
};

export default ButtonBackPage;