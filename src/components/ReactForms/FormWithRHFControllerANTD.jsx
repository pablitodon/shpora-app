import React from 'react';
import styles from './../../pages/Pages.module.css';
import { useForm, Controller , } from 'react-hook-form';
import { Input, Checkbox, Radio } from 'antd'
import ButtonBackPage from './ButtonFormsBackPage/ButtonBackPage';



const usageController = [
    <p>
        <strong>Использование сторонних библиотек (ANTD или MUI): </strong>
        React Hook Form сделал интеграцию с внешними библиотеками
        компонентов пользовательского интерфейса очень простой
    </p>,
    <p>
        <strong> Использование сторонних библиотек валидации: </strong>
        Если вы используете сторонние библиотеки валидации, такие как <span>yup</span> или <span>joi</span>,
        <span>Controller</span> позволяет вам интегрировать их правила валидации с формой.
    </p>
];



const codeFormsControllerANTD = (
    <div>
        <h2>Код данной формы:</h2>
        <pre className={styles.preCode}>
            <code className={styles.code}>
                {



                    `

                    import { useForm, Controller } from 'react-hook-form';
                    import { Input, Checkbox, Radio } from 'antd'


                 const { control, handleSubmit, formState: { errors } } = useForm();
                 const onSubmit = (data) => console.log(data);
                
                
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='max-w-2xl'>
                        <h3 htmlFor="">Ваше Имя:</h3>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: 'Обязательное поле',
                                minLength: {
                                    value: 3,
                                    message: 'Не подходит.'
                                }
                            }}
                            render={({ field }) => <Input {...field} placeholder='Укажите пол' />}
                        />
                        <span>{errors.name?.message}</span>
                    </div>

                    <div className='max-w-2xl'>
                        <h3 htmlFor="">Ваш пол:</h3>
                        <Controller
                            name="gender"
                            control={control}
                            rules={{
                                required: 'Выберите пол',
                            }
                            }
                            render={({ field }) => (
                                <Radio.Group {...field}>
                                    <Radio value="male">Мужской</Radio>
                                    <Radio value="female">Женский</Radio>
                                </Radio.Group>
                            )}
                        />
                        <p>{errors.gender?.message}</p>
                    </div>


                    <div className='max-w-2xl text-blue-900  '>
                        <h3>Password:</h3>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: 'Обязательное поле',
                                validate: (value) => value.length >= 6 || 'Пароль должен быть не менее 6 символов'
                            }}
                            render={({ field }) =>
                                <Input.Password {...field} />
                            }
                        />
                        <span className='text-gray-700'>{errors.password?.message}</span>
                    </div>

                    <div className='max-w-2xl text-blue-900  '>
                        <h3 htmlFor="">Checkbox:</h3>
                        <Controller
                            name="checkbox"
                            control={control}
                            rules={{ required: 'Подтвердите свой выбор .' }}
                            render={({field}) => (
                                <Checkbox
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                >
                                    Я подтверждаю
                                </Checkbox>
                            )}
                        />
                        <span className='text-gray-700'>{errors.checkbox?.message}</span>
                    </div>
                </form>
                `
                }
            </code>
        </pre>
    </div>
)




const FormWithRHFControllerANTD = () => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

   

    return (
        <div className={styles.contain}>
            <h1>Про Controller</h1>
            <h4>Вот несколько ситуаций, когда стоит использовать <span>Controller</span>:</h4>
            <div>
                {
                    usageController.map((item, index) => <div key={index}>{index + 1}.{item}</div>)
                }
            </div>
            <h2>Пример интеграции React Hook Form + ANTD:</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='max-w-2xl'>
                        <h3 >Ваше Имя:</h3>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: 'Обязательное поле',
                                minLength: {
                                    value: 3,
                                    message: 'Не подходит.'
                                }
                            }}
                            render={({ field }) => <Input {...field} placeholder='Укажите пол' />}
                        />
                        <span>{errors.name?.message}</span>
                    </div>

                    <div className='max-w-2xl'>
                        <h3 htmlFor="">Ваш пол:</h3>
                        <Controller
                            name="gender"
                            control={control}
                            rules={{
                                required: 'Выберите пол',
                            }
                            }
                            render={({ field }) => (
                                <Radio.Group {...field}>
                                    <Radio value="male">Мужской</Radio>
                                    <Radio value="female">Женский</Radio>
                                </Radio.Group>
                            )}
                        />
                        <span className='text-gray-700'>{errors.gender?.message}</span>
                    </div>


                 
                    <div className='max-w-2xl text-blue-900  '>
                        <h3>Password:</h3>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: 'Обязательное поле',
                                validate: (value) => value.length >= 6 || 'Пароль должен быть не менее 6 символов'
                            }}
                            render={({ field }) =>
                                <Input.Password {...field} />
                            }
                        />
                        <span >{errors.password?.message}</span>
                    </div>

                    <div className='max-w-2xl text-blue-900  '>
                        <h3 >Checkbox:</h3>
                        <Controller
                            name="checkbox"
                            control={control}
                            rules={{ required: 'Подтвердите свой выбор .' }}
                            render={({ field }) => (
                                <Checkbox
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                >
                                    Я подтверждаю
                                </Checkbox>
                            )}
                        />
                        <span className='text-gray-700'>{errors.checkbox?.message}</span>
                    </div>
                  
                    <button className={styles.button} type='submit'>Отправить!</button>

                </form>
            </div>
            {codeFormsControllerANTD}
            <ButtonBackPage className={styles.button} />

        </div>
    );
};

export default FormWithRHFControllerANTD;