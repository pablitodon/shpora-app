import React from 'react';
import styles from './../../pages/Pages.module.css';
import * as yup from 'yup';
import { Input, Button } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const titlePage = (<h1>Пример интеграции React Hook Form + ANTD + yup</h1>);

const codeBlockAntdRhfYup = (
    <div className='mt-10'>
 <pre className={styles.preCode}>
        <code className={styles.code}>
            {
                `   
            import React from'react';
            import styles from './../../pages/Pages.module.css';
            import * as yup from 'yup';
            import { Input, Button } from 'antd';
            import { useForm, Controller } from'react-hook-form';
            import { yupResolver } from '@hookform/resolvers/yup';
              
         const { handleSubmit, control, formState: { errors } } = useForm({
         resolver: yupResolver(schema)
        });


        const schema = yup.object().shape({
            name: yup.string().required('Введите имя'),
            email: yup
                .string()
                .required('Обязательное поле')
                .email('Введите корректный адрес')
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Неверный формат email'),
            password: yup.string().required('Обязательное поле').min(6, 'Минимум 6 символов'),
            confirmPassword: yup.string().required('Обязательное поле').oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
        })


        const RhfANTDyup = () => {
            const { handleSubmit, control, formState: { errors } } = useForm({
                resolver: yupResolver(schema)
            });


            const onSubmit = data => console.log(data);


            const exampleOfRhfAntdYup = (
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='max-w-xs'>
                            <div>
                                <strong>Введите имя:</strong>
                                <Controller
                                    name='name'
                                    control={control}
                                    render={({ field }) => <Input {...field} placeholder='Name' />}
                                />
                                <span>{errors.name?.message}</span>
                            </div>
                            <div>
                                <strong>Ваш email:</strong>
                                <Controller
                                    name='email'
                                    control={control}
                                    render={({ field }) => <Input {...field} placeholder='Email' />}
                                />
                                <span>{errors.email?.message}</span>
                            </div>

                            <div>
                                <strong>Ваш пароль:</strong>
                                <Controller
                                    name='password'
                                    control={control}
                                    render={({ field }) => <Input {...field} placeholder='Password' />}
                                />
                                <span>{errors.password?.message}</span>
                            </div>
                            <div>
                                <strong>Подтвердите пароль:</strong>
                                <Controller
                                    name='confirmPassword'
                                    control={control}
                                    render={({ field }) => <Input {...field} placeholder='Confirm' />}
                                />
                                <span>{errors.confirmPassword?.message}</span>
                            </div>

                            <div />
                            <Button
                                className='mt-5'
                                type='primary'
                                htmlType='submit'
                            >
                                Зарегистрироваться.
                            </Button>

                        </div>
                    </form>


                </div>

            );


            return (
                <div className={styles.contain}>
                    {titlePage}
                    {exampleOfRhfAntdYup}
                    {codeBlockAntdRhfYup}
                </div>




            );
        };

        export default RhfANTDyup;
            `

            }
        </code>
    </pre>

    </div>
   
)


const schema = yup.object().shape({
    name: yup.string().required('Введите имя'),
    email: yup
        .string()
        .required('Обязательное поле')
        .email('Введите корректный адрес')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Неверный формат email'),
    password: yup.string().required('Обязательное поле').min(6, 'Минимум 6 символов'),
    confirmPassword: yup.string().required('Обязательное поле').oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
})







const RhfANTDyup = () => {

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);


    const exampleOfRhfAntdYup = (
        <div className='mt-2'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='max-w-xs'>
                    <div>
                        <strong>Введите имя:</strong>
                        <Controller
                            name='name'
                            control={control}
                            render={({ field }) => <Input {...field} placeholder='Name' />}
                        />
                        <span>{errors.name?.message}</span>
                    </div>
                    <div>
                        <strong>Ваш email:</strong>
                        <Controller
                            name='email'
                            control={control}
                            render={({ field }) => <Input {...field} placeholder='Email' />}
                        />
                        <span>{errors.email?.message}</span>
                    </div>

                    <div>
                        <strong>Ваш пароль:</strong>
                        <Controller
                            name='password'
                            control={control}
                            render={({ field }) => <Input {...field} placeholder='Password' />}
                        />
                        <span>{errors.password?.message}</span>
                    </div>
                    <div>
                        <strong>Подтвердите пароль:</strong>
                        <Controller
                            name='confirmPassword'
                            control={control}
                            render={({ field }) => <Input {...field} placeholder='Confirm' />}
                        />
                        <span>{errors.confirmPassword?.message}</span>
                    </div>

                    <div />
                    <Button
                        className='mt-5'
                        type='primary'
                        htmlType='submit'
                    >
                        Зарегистрироваться.
                    </Button>
                </div>
            </form>
        </div>
    );


    return (
        <div className={styles.contain}>
            {titlePage}
            {exampleOfRhfAntdYup}
            {codeBlockAntdRhfYup}
        </div>
    );
};

export default RhfANTDyup;