import React from 'react';
import styles from './../../pages/Pages.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ButtonBackPage from "./ButtonFormsBackPage/ButtonBackPage";

const termFormik = (
    <p>
        <span>Formik</span> - это еще одна библиотека для управления формами в приложениях на React.
        Её основная цель - упростить и облегчить процесс работы с формами,
        сбора данных от пользователя и их валидации.
    </p>
);




const codeFormik = (
    <pre className={styles.preCode}>
        <code className={styles.code}>
            {
                `
                import React from 'react';
                import styles from './../../pages/Pages.module.css';
                import { Formik, Form, Field, ErrorMessage } from 'formik';


                const FormikComponent = () => {
                    return (
                            <div>
                                <Formik
                                    initialValues={{ username: '', email: '' }}
                                    onSubmit={(values) => { console.log(values) }}

                                >
                                    <Form className=''>
                                        <div className='mb-5'>
                                            <label className='' htmlFor="username">Username: </label>
                                            <Field
                                                type='text'
                                                name='username'
                                                placeholder='Имя пользователя.'
                                                validate={(value) => {
                                                    if (!value) {
                                                        return 'Обязательное поле.'
                                                    }
                                                    if (value.length < 3) {
                                                        return 'Минимальная длина 3 символа.'
                                                    }
                                                }}
                                            />
                                            <ErrorMessage name='username' component='span' />
                                        </div>

                                        <div>
                                            <label htmlFor="username">Email: </label>
                                            <Field
                                                type='email'
                                                name='email'
                                                placeholder='Имя пользователя.'
                                                validate={(value) => {
                                                    if (!value) {
                                                        return 'Обязательное поле.'
                                                    }
                                                    if (!/\S+@\S+\.\S+/.test(value)) {
                                                        return 'Некорректный адрес'
                                                    }
                                                }}
                                            />
                                            <ErrorMessage name='email' component='span' />
                                        </div>
                                        <button className={styles.button} type='submit'>Зарегистрировать.</button>
                                    </Form>
                                </Formik>
                            </div>
                    );
                };

                export default FormikComponent;
            `
            }
        </code>
    </pre>
)

const FormikComponent = () => {

    return (
        <div className={styles.contain}>
            <div>
                <h1>Formik</h1>
                {termFormik}
            </div>
            <div className='max-w-xs rounded-lg bg-gray-300 mt-5 p-3 mb-3' >
                <Formik
                    initialValues={{ username: '', email: '' }}
                    onSubmit={(values) => { console.log(values) }}

                >
                    <Form className=''>
                        <div className='mb-5'>
                            <label className='' >Username: </label>
                            <Field
                                type='text'
                                name='username'
                                placeholder='Имя пользователя.'
                                validate={(value) => {
                                    if (!value) {
                                        return 'Обязательное поле.'
                                    }
                                    if (value.length < 3) {
                                        return 'Минимальная длина 3 символа.'
                                    }
                                }}
                            />
                            <ErrorMessage name='username' component='span' />
                        </div>

                        <div>
                            <label >Email: </label>
                            <Field
                                type='email'
                                name='email'
                                placeholder='Ваш Email.'
                                validate={(value) => {
                                    if (!value) {
                                        return 'Обязательное поле.'
                                    }
                                    if (!/\S+@\S+\.\S+/.test(value)) {
                                        return 'Некорректный адрес'
                                    }
                                }}
                            />
                            <ErrorMessage name='email' component='span' />
                        </div>
                        <button className={styles.button} type='submit'>Зарегистрировать.</button>
                    </Form>
                </Formik>
            </div>
            <div>
                <h2>Вот как выглядит код данной формы:</h2>
                <div>{codeFormik}</div>
            </div>
            <ButtonBackPage />
        </div>
    );
};

export default FormikComponent;