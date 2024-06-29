import React from 'react';
import { useForm } from "react-hook-form";
import { } from "react-router-dom";
import ButtonBackPage from './ButtonFormsBackPage/ButtonBackPage';
import styles from './../../pages/Pages.module.css';




const termReactHookForm =
    (
        <p>
            <span>React Hook Form</span> - это библиотека,
            которая значительно упрощает процесс работы с формами
            в React приложениях. Она позволяет создавать интерактивные
            и дружественные формы с минимумом лишнего кода.
           
        </p>
    );


const codeText = (
    <div>
        <pre className={styles.preCode}>
            <code>
                {
                    `
                const ReactHookForms = () => {

                    const { register, handleSubmit, formState: { errors } } = useForm();

                    const onSubmit = (data) => {
                    console.log(data);
                };

                return (
                    <div className={styles.contain}>
                        <h1>React Hook Form</h1>
                        <div>{termReactHookForm}</div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div>
                                    <input
                                        type="text"
                                        {...register('name', {
                                            required: 'Обязательное поле',
                                            minLength: {
                                                value: 3,
                                                message: 'Не подходит.'
                                            },
                                            maxLength: {
                                                value: 10,
                                                message: 'Не подходит.'
                                            },
                                            pattern: /^[a-zA-Z]+$/
                                        })}
                                        placeholder="Введите имя"
                                    />
                                    <span>{errors.name?.message}</span>
                                </div>

                                <div>
                                    <input
                                        type="number"
                                        {...register('age', {
                                            required: 'Обязательное поле',
                                            min: {
                                                value: 18,
                                                message: 'Не подходит.'
                                            }
                                        })}
                                        placeholder='Укажите возраст'
                                    />
                                    <span>{errors.age?.message}</span>
                                </div>


                                <div>
                                    <label >
                                        <input
                                            type="radio"
                                            {...register('gender', {
                                                required: 'Выберите пол',
                                            })}
                                            value="female"

                                        />
                                        Женский
                                    </label>

                                    <label >
                                        <input
                                            type="radio"
                                            {...register('gender', {
                                                required: 'Выберите пол',
                                            })}
                                            value="male"
                                        />
                                        Мужской
                                    </label>
                                    <span>{errors.gender?.message}</span>
                                </div>
                                <button type='submit'>form go</button>
                            </form>
                        </div>
                        <ButtonBackPage className={styles.button} />
                    </div>
                );
            };

            export default ReactHookForms;
                        `
                }
            </code>
        </pre>
    </div>
)





const ReactHookForms = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className={styles.contain}>
            <h1>React Hook Form</h1>
            <div>{termReactHookForm}</div>
            <div className=' flex justify-center max-w-xm  bg-gray-300 p-5 m-5'  >
                <form className='space-y-5 ' onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <input
                           className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none "
                            type="text"
                            {...register('name', {
                                required: 'Обязательное поле',
                                minLength: {
                                    value: 3,
                                    message: 'Не подходит.'
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Не подходит.'
                                },
                                pattern: /^[a-zA-Z]+$/
                            })}
                            placeholder="Введите имя"
                        />
                        <span>{errors.name?.message}</span>
                    </div>

                    <div>
                        <input  
                         className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none "
                            type="number"
                            {...register('age', {
                                required: 'Обязательное поле',
                                min: {
                                    value: 18,
                                    message: 'Не подходит.'
                                }
                            })}
                            placeholder='Укажите возраст'
                        />
                        <span>{errors.age?.message}</span>
                    </div>


                    <div>
                        <label >
                            <input
                                type="radio"
                                {...register('gender', {
                                    required: 'Выберите пол',
                                })}
                                value="female"

                            />
                            Женский
                        </label>

                        <label >
                            <input
                                type="radio"
                                {...register('gender', {
                                    required: 'Выберите пол',
                                })}
                                value="male"
                            />
                            Мужской
                        </label>
                        <span>{errors.gender?.message}</span>
                    </div>
                    <button className={styles.button} type='submit'>form go</button>
                </form>
            </div>
            <div>{codeText}</div>
            <ButtonBackPage className={styles.button} />
        </div>
    );
};

export default ReactHookForms;