import React from 'react';
import styles from './Pages.module.css';
import { Link } from "react-router-dom";

const termForm = (
    <div>
        <p>
            <strong>Формы</strong> - это часть большинства веб-приложений.
            Однако их создание и управление может быть сложным для новичков.
        </p>
    </div>
);

const formUsage = [
    {
        title: 'Управляемые компоненты форм:',
        text:
            (
                <p>
                    В этом подходе значения полей формы
                    <strong> хранятся в состоянии </strong>компонента.
                    Каждое поле формы связано с состоянием и обновляется
                    через callback-функцию.
                </p>
            )
    },
    {
        title: 'Неуправляемые компоненты форм:',
        text:
            (
                <p>
                    В этом подходе значения полей формы хранятся непосредственно в DOM,
                    а не в состоянии компонента.
                </p>
            )
    },
    {
        title: 'Ref-подход:',
        text:
            (
                <p>
                    Значения полей формы хранятся непосредственно в DOM, а не в состоянии компонента.
                </p>
            )
    },
    {
        title: 'Библиотеки управления формами:',
        text:
            <p>
                Например, <span>React Hook Form</span> и <span>Formik</span>.
                Предоставляют высокоуровневые решения для работы с формами.
                Упрощают управление состоянием, валидацией,
                обработкой отправки и другими аспектами работы с формами.
            </p>
    },

]




const ReactHookFormAndFormik = () => {
    return (
        <div className={styles.contain}>
            <h1>Формы и их обработка в React. react-hook-form VS formik</h1>
            <div>{termForm}</div>
            <div>
                <h2>Основные варианты использования форм в React приложении:</h2>
                <div>
                    {formUsage.map(({ title, text }, index) => (
                        <div key={index}>
                            <h3>{title}</h3>
                            {text}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className='mt-10'>

                    <Link to='/react-hook-form' className={styles.button} >react-hook-form.Простой пример.</Link>
                </div>
                <div className='mt-10'>
                    <Link to='/formik' className={styles.button} >formik.Простой пример.</Link>
                </div>

                <div className='mt-10'>
                    <Link to='/controller-component' className={styles.button} >Про Controller</Link>
                </div>

                <div className='mt-10'>
                    <Link to='/RhfANTDyup' className={styles.button} >React Hook Form + ANTD + yup</Link>
                </div>

            </div>
        </div>
    );
};

export default ReactHookFormAndFormik;