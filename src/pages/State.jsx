import React from 'react';
import styles from './Pages.module.css';
import Counter from '../components/Counter/Counter';
const State = () => {
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>State(useState)</h1>
            <p>
                При разработке приложений состояние (state) играет важную роль.
                Оно представляет собой данные, которые используются внутри компонента для отслеживания
                и обновления информации. Состояние позволяет компонентам быть динамичными
                и реагировать на изменения данных или взаимодействие пользователя. Простыми словами,
                это то, что ИЗМЕНЯЕТСЯ в компоненте, нежели props-ы которые неизменны.
            </p>
            <p className='pt-2'>В React есть возможность использовать <span className={styles.span}>state</span> в функциональных компонентах,путем использования хука <span className={styles.span}>useState</span></p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {
                    `
                    const [state,setState] = useState(initialState)
                    `
                    }
                </code>
            </pre>
            <p className='pt-3'>Хук <span className={styles.span}>useState</span> позволяет функциональным компонентам в React добавлять локальное состояние.<br />

                <span className={styles.span}>Он возвращает массив с парой значений: </span><br />
                - текущее <span className={styles.span}>значение состояния</span><br />
                -  <span className={styles.span}>функцию для его обновления</span><br />


                При вызове функции обновления, React перерисует компонент с новым значением состояния.
                <br />
                - <span className={styles.span}>state:</span> текущее значение состояния.<br />
                - <span className={styles.span}>setState:</span> функция для обновления значения состояния.<br />

                <h2 className={styles.h2}>Параметры</h2>
                -<span className={styles.span}>initialState</span> (необязательный): начальное значение состояния.
                Может быть примитивным типом данных, объектом или функцией.
            </p>
             <p>Примером работы со state является счётчик, который изменяется при нажатии на кнопку. <br />
             <Counter/>
             Код имеет следующий вид:</p>
            <pre className= {styles.preCode}>
                <code className={styles.code}>
                        {`
                    const Counter = () => {
                        const [state,setState] = useState(0)
                        const increment = () => setState(state => state + 1);
                        const decrement = () => setState(state => state - 1);
                        return (
                            <div className={styles.counterWrapp}>
                               <h1 className='text-xl font-bold'>Counter:{state}</h1>
                               <button onClick={increment} className={styles.btn__change}>count + 1 </button>
                               <button onClick={decrement} className={styles.btn__change}>count - 1 </button>
                            </div>
                        );
                    };
                        `}
                </code>
            </pre>


            <h1 className={styles.h1}>State в классах:</h1>  
                    
            <h3 className={styles.h3}>Пример классовой компоненты:</h3>

            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {
                    `
                    class Example extends React.Component {
                        constructor() {
                            this.state = { count: 0 }
                        }
                    
                        handleClick = () => {
                            this.setState((state) => ({ count: state.count + 1 }));
                        }
                    
                        render() {
                            return (
                                <div>
                                    <p>Ты кликнул {this.state.count} раз</p>
                                    <button onClick={this.handleClick}>Клик</button>
                                </div>
                            );
                        }
                    }
                    `
                    }
                </code>
            </pre>
        </div>
    );
};

export default State;