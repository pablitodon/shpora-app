import React from 'react';
import styles from "./Pages.module.css";
import lifecyclepng from './../images/lifecyclepng.png'
import UseEffectComponent from '../components/UseEffectComponent/UseEffectComponent';
import ClassesComponent from './ClassesComponent';
const LifeCycle = () => {
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>LifeCycle (Жизненный цикл)</h1>

            <p className='mb-4'>
                <span className={styles.span}>Жизненный цикл</span> компонента -это набор этапов,
                через которые компонент проходит,
                чтобы правильно работать на странице.
            </p>
            <div>
                <h2 className={styles.h2}>
                    Методы жизненного цикла в React можно разделить на следующие группы:
                </h2>

                <h3 className={styles.h3}>{`1. Методы монтирования (Mounting Methods):`}</h3>
                <p>
                    - {`constructor()`} <br />
                    - {`render()`} <br />
                    - {` componentDidMount()`} <br />
                </p>

                <h3 className={styles.h3}>{`2. Методы обновления (Updating Methods):`}</h3>
                <p>
                    - {`shouldComponentUpdate()`} <br />
                    - {`render()`} <br />
                    - {`componentDidUpdate()`} <br />
                </p>

                <h3 className={styles.h3}>{`3.Методы размонтирования (Unmounting Methods):`}</h3>
                <p>
                    - {`componentWillUnmount()`} <br />
                </p>

                <h3 className={styles.h3}>{`4.Методы обработки ошибок (Error Handling Methods):`}</h3>
                <p>
                    - {`componentDidCatch()`} <br />
                </p>

                <img src={lifecyclepng} alt='lifeCycle' />
            </div>

            <div>


                <h3 className={styles.h3}>
                    Жизненный цикл функциональных компонентов:
                </h3>

                <p>
                    <span className={styles.span}>useEffect</span> - это хук в React, предназначенный для работы с методами жизненного цикла в функциональных компонентах.
                    <br />
                    По сути вот ОДИН ТАКОЙ ХУК заменяет ОСНОВНЫЕ методы жизненного цикла.
                </p>
                <p>
                    <span className={styles.span}>Первый параметр: Функция</span>, которая должна выполниться
                    при монтировании компонента и при каждом обновлении.
                </p>

                <p className='pt-5'>
                    <span className={styles.span}>Второй параметр: Массив зависимостей</span>,
                    определяет, на что конкретно должен реагировать useEffect.
                    Если массив пуст, useEffect выполняется только при монтировании и размонтировании.
                    Если в массиве указаны определенные значения,
                    то useEffect будет выполняться только тогда, когда эти значения изменяются.
                </p>

                <div>
                    <h3 className={styles.h3}>1.Mounting (Монтирование):</h3>
                    <pre className={styles.preCode}>
                        <code className={styles.code}>
                            {
                                `
                            useEffect(() => { console.log("componentDidMount") }, []) 
                            `
                            }
                        </code>
                    </pre>
                    <p>
                        Заменяет <span className={styles.span}>componentDidMount()</span>.
                        Выполняет побочные эффекты только один раз после монтирования.
                        Передавая пустой массив зависимостей <span className={styles.span}>[]</span>,
                        можно сделать хук  <span className={styles.span}>useEffect</span> аналогом <span className={styles.span}>componentDidMount()</span>.
                    </p>

                </div>


                <div>
                    <h3 className={styles.h3}>2.Updating (Обновление):</h3>
                    <pre className={styles.preCode}>
                        <code className={styles.code}>
                            {
                                `
                            useEffect(() => { console.log("componentDidUpdate") }, [dependency])) 
                            `
                            }
                        </code>
                    </pre>
                    <p>
                        Заменяет  <span className={styles.span}>componentDidUpdate()</span>.
                        .Позволяет указать зависимость для выполнения функции  <span className={styles.span}>
                            только при изменении определенных props или state
                        </span>.
                    </p>
                    <pre className={styles.preCode}>
                        <code className={styles.code}>
                            {
                                `
                            useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 
                            `
                            }
                        </code>
                    </pre>
                    <p>
                        Выполняет функцию после каждого рендеринга компонента. <br />
                        Отрабатывает как <span className={styles.span}> componentDidMount()</span> и <span className={styles.span}> componentDidUpdate()</span>
                    </p>

                </div>

                <div>
                    <h3 className={styles.h3}>3.Unmounting (Размонтирование):</h3>
                    <pre className={styles.preCode}>
                        <code className={styles.code}>
                            {
                                `
                            useEffect(() => {return () => console.log('componentWillUnmount')}, []) 
                            `
                            }
                        </code>
                    </pre>
                    <p>
                        Заменяет <span className={styles.span}>componentWillUnmount()</span>.
                        Выполняет очистку и отписку от побочных эффектов при размонтировании (удалении из DOM) компонента.
                    </p>
                </div>
            </div>
            <div>
                <h2 className={styles.h2}>Жизненный цикл классовых компонентов:</h2>

                <div>
                    <h3 className={styles.h3}>{`1. Методы монтирования (Mounting Methods):`}</h3>
                    <p>
                        <span className={styles.span}>{`-constructor()`}</span>: Вызывается при создании экземпляра компонента. Используется для <span className={styles.name}>инициализации состояния и привязки методов.</span><br />
                        <span className={styles.span}>{`-render()`}</span>: Вызывается при создании экземпляра компонента. Используется для инициализации состояния и привязки методов.<br />
                        <span className={styles.span}>{`-componentDidMount()`}</span>: Вызывается <span className={styles.span}>после рендеринга</span> компонента и его добавления в DOM. Используется для выполнения запросов к серверу, подписки на события и других побочных эффектов.<br />
                    </p>
                </div>

                <div>
                    <h3 className={styles.h3}>{`2. Updating (Обновление):`}</h3>
                    <p>
                        <span className={styles.span}>{`-shouldComponentUpdate(nextProps, nextState)`}</span>: Вызывается перед обновлением компонента.
                        Используется для оптимизации перерисовки компонента путем возврата <span className={styles.span}>false</span>,
                        если обновление не требуется. <br />
                        <span className={styles.span}>{`-render()`}</span>: Отрисовывает компонент и возвращает React элементы.
                        Используется для инициализации состояния и привязки методов.<br />
                        <span className={styles.span}>{`-componentDidUpdate(prevProps, prevState)`}</span>: Вызывается <span className={styles.span}>после обновления компонента и его рендеринга.</span>
                        Используется для выполнения дополнительных действий после обновления компонента,
                        например, для выполнения запросов к серверу на основе новых пропсов.<br />
                    </p>
                </div>

            </div>


            <div>
                <h3 className={styles.h3}>{`3.Unmounting (Размонтирование):`}</h3>
                <p>
                    <span className={styles.span}>{`-componentWillUnmount()`}</span>: Вызывается<span className={styles.span}> перед удалением компонента из DOM</span>.
                    Используется для выполнения необходимых очисток, отписки от событий и освобождения ресурсов.
                    <br />
                </p>
            </div>


            <div>
                <h3 className={styles.h3}>{`4.Error Handling (Обработка ошибок):`}</h3>
                <p>
                    <span className={styles.span}>{`-componentDidCatch(error, info):`}</span>: Вызывается при возникновении ошибки в дочерних компонентах.
                    Используется для отлавливания и обработки ошибок.
                    <br />
                </p>
            </div>
            <div>
                <UseEffectComponent/>
                <pre className={styles.preCode}>
                    <code className={styles.code}>
                        {
                            `

                        import React, { useEffect, useState } from 'react';
                        import styles from './/Pages.module.css'


                        const UseEffectComponent = () => {

                            const [count, setCount] = useState('');
                            const [respData, setData] = useState('');

                            const handleChange = (e) => {
                                setCount(e.target.value);
                            }

                            useEffect(() => {
                                const fetchData = async () => {
                                    try {
                                        const response = await fetch(https://jsonplaceholder.typicode.com/todos/{count});
                                        const data = await response.json();
                                        setData(data)
                                    } catch (error) {
                                        console.error('Error fetching.1-100');
                                    }
                                };
                                fetchData()

                                return () => {
                                };
                            }, [count]);

                            return (
                                <div>
                                    <h2 className={styles.h2}>Пример жизненного цикла (useEffect)</h2>
                                    <div className='max-w-sm h-[150px] bg-slate-300 p-5 rounded-lg '>
                                        <label className='font-bold ' >
                                            Введи цифру 1-100:
                                            <input
                                                type="text"
                                                value={count}
                                                onChange={handleChange}
                                            />
                                        </label>
                                        <div>
                                            <span className={styles.span}>Текст твоего номера:<br />
                                                {respData.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            );
                        };

                        export default UseEffectComponent;
                    `
                        }
                    </code>
                </pre>
            </div>

            <div>
                <h2 className={styles.h2}>Пример классового компонента:</h2>
                <pre className={styles.preCode} >
                    <code className={styles.code}>
                        {
                            `
                        import styles from './Pages.module.css'
                        import React, { Component } from "react";

                        class ClassesComponent extends Component {
                            constructor(props) {
                                super(props);
                                this.state = {
                                    number: '',
                                    respData: ''
                                };
                            }
                            fetchData = async () => {
                                try {
                                    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/{this.state.number}");
                                    const data = await resp.json();
                                    this.setState((prevState) => ({ respData: {...prevState.respData, ...data }}));
                                } catch (error) {
                                    alert(error)
                                }
                            }

                            handleChange = (e) => {
                                this.setState((prevState) => ({ number: e.target.value }))

                            }



                            componentDidMount() {
                                this.fetchData();
                            }

                            componentDidUpdate(prevProps, prevState) {
                                if (prevState.number !== this.state.number) {
                                    this.fetchData();
                                }
                            }



                            render() {
                                return (
                                    <div className='pb-5'>
                                        <h2 className={styles.h2}>Пример жизненного цикла (useEffect)</h2>
                                        <div className='max-w-sm h-[150px] bg-slate-300 p-5 rounded-lg '>
                                            <label className='font-bold ' >
                                                Введи цифру 1-100:
                                                <input
                                                    type="number"
                                                    value={this.state.number}
                                                    onChange={this.handleChange}
                                                />
                                            </label>
                                            <div>
                                                <span className={styles.span}>Текст твоего номера:<br />
                                                    {this.state.respData.title}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        }




                        export default ClassesComponent;
                    `
                        }
                    </code>
                </pre>
            </div>
            <div>
                <h2>Error Handling(обработка ошибок)</h2>
                <pre className={styles.preCode}>
                    <code className={styles.code}>
                        {
                            `
                import React, { Component } from 'react';

                class ErrorBoundaryExample extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                    hasError: false,
                    error: null,
                    errorInfo: null
                    };
                }

                componentDidCatch(error, errorInfo) {
                    this.setState({
                    hasError: true,
                    error: error,
                    errorInfo: errorInfo
                    });
                }

                render() {
                    if (this.state.hasError) {
                    return (
                        <div>
                        <h2>Что-то пошло не так.</h2>
                        <p>{this.state.error && this.state.error.toString()}</p>
                        <p>Дополнительная информация: {this.state.errorInfo && this.state.errorInfo.componentStack}</p>
                        </div>
                    );
                    }

                    return this.props.children;
                }
                }

                class App extends Component {
                render() {
                    return (
                    <div>
                        <h1>Пример использования ErrorBoundary</h1>
                        <ErrorBoundaryExample>
                        {/* Твой компонент с возможной ошибкой */}
                        <ComponentWithError />
                        </ErrorBoundaryExample>
                    </div>
                    );
                }
                }

                const ComponentWithError = () => {
                const [throwError, setThrowError] = useState(false)

                const handleClick = () => setThrowError(presState => !presState.throwError)

                if (throwError) {
                    // Имитация ошибки
                    throw new Error('Это ошибка в компоненте ComponentWithError')
                }

                return (
                    <div>
                    <h3>Компонент с возможной ошибкой</h3>
                    <button onClick={() => handleClick()}>Генерировать ошибку</button>
                    </div>
                )
                }

                export default App;
                            `
                        }
                    </code>
                </pre>

            </div>

        </div>

    );
};

export default LifeCycle;