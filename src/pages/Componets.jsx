import React from 'react';
import styles from './Pages.module.css'


const Componets = () => {
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>Components</h1>
            <ul className={styles.ul}>
                <li>Создание функциональных компонентов</li>
                <li>Создание классовых компонентов</li>
                <li>Отличия и выбор между функциональными и классовыми компонентами</li>
            </ul>
            <p>
                <span className={styles.span}>Компоненты</span> - это небольшие, переиспользуемые элементы пользовательского интерфейса,
                которые объединены вместе, чтобы создать более крупные приложения.
            </p>
            <p className='pt-5'>
                Во многом компоненты ведут себя <span className={styles.span}>как обычные функции JavaScript</span>. Они принимают произвольные
                входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране.
            </p>
            <p className='pt-5'>React компоненты могут быть <span className={styles.span}>классовыми</span> или <span className={styles.span}>функциональными</span>.
                Пример объявления классового компонента в React:
            </p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {
                        `class MyComponent extends React.Component {
                            render() {
                                return <div>Hello, Redev!</div>;
                            }
                        }
                          export default MyComponent;`

                    }
                </code>
            </pre>
            <p className='pt-5'>
                Пример объявления функционального компонента в React:
            </p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {
                        `const MyComponent = () => {
                       return <div>Hello, Redev!</div>;
                        }
                          export default MyComponent;`
                    }
                </code>
            </pre>
            <hr className='m-3' />
            <p className='pb-5'>
                Разница заключается в том,что классовый компонент наследуется от базового класса React.Component и <span className={styles.span}>имеет доступ к дополнительным функциям,таким как состояние и методы жизненного цикла</span>.
            </p>
            <span className={styles.span}>Компонента должна себя вести как чистая функция.</span>
            <p><span className={styles.span}>“Чистой”</span> называется функция, которая:</p>
            <ul className={styles.ul}>
                <li>Для одинаковых входных данных всегда возвращает один результат.</li>
                <li>Не имеет побочных эффектов (то есть не изменяет внешние состояния).</li>
                <li>Не зависит от внешних состояний.</li>
            </ul>
        </div>
    );
};

export default Componets;