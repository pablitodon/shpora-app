import React from 'react';
import styles from './Pages.module.css'


const contextEplanation = (
    <p>
        <strong>Context </strong> предоставляет способ  <strong>передачи данных через дерево компонентов
            без явной передачи пропсов от родительских компонентов к дочерним</strong>.
        Это особенно полезно, когда необходимо передать данные глубоко в иерархии компонентов,
        избегая "просачивания" пропсов через несколько промежуточных компонентов.
    </p>
)

const contextStepOnReact = [
    {
        title: 'Создание контекста',
        codeStep:
            `
            // MyContext.js
            import React from 'react';

            const MyContext = React.createContext();

            export default MyContext;
        `,
        text: (
            <p>В этом примере создается новый контекст с помощью <strong>createContext() </strong>
                и экспортируется для дальнейшнего использования.
            </p>
        ),

    },
    {
        title: 'Предоставление значения контекста',
        codeStep:
            `
            // App.js
            import React from 'react';
            import MyContext from './MyContext';
            import ComponentA from './ComponentA';

            const App = () => {
            const value = 'Hello, Context!';

            return (
                <MyContext.Provider value={value}>
                <ComponentA />
                </MyContext.Provider>
            );
            }

            export default App;
        `,
        text: (
            < p >
                В этом примере используется <strong> MyContext.Provider</strong> для предоставления значения контекста.
                Значение <strong><span className={styles.span}>value</span> будет доступно всем дочерним компонентам</strong>, которые подписаны на этот контекст.
            </p >
        )
    },
    {
        title: 'Использование хука useContext',
        codeStep:
            `
            // ComponentA.js
            import React, { useContext } from 'react';
            import MyContext from './MyContext';
            import ComponentB from './ComponentB';
            
            function ComponentA() {
            const value = useContext(MyContext);
            
            return (
                <div>
                <h2>Component A</h2>
                <p>Received value from Context: {value}</p>
                <ComponentB />
                </div>
            );
            }
            
            export default ComponentA;
        `,
        text: (
            <p>
                В этом примере  импортируем <span className={styles.span}>useContext </span>
                из <span className={styles.span}>react</span> и вызываем его,
                передавая контекст <span className={styles.span}>MyContext</span>.
                Хук <span className={styles.span}>useContext</span> возвращает текущее значение контекста,
                которое мы присваиваем переменной <span className={styles.span}>value</span>.
                Теперь можно использовать значение <span className={styles.span}>value</span> внутри компонента
                без необходимости использования <span className={styles.span}>MyContext.Consumer</span>.
            </p>
        )
    },
    {
        title: 'Подписка на контекст.MyContext.Consumer.(еще один вариант)',
        codeStep:
            `
        // ComponentA.js
        import React from 'react';
        import MyContext from './MyContext';
        import ComponentB from './ComponentB';

        function ComponentA() {
        return (
            <div>
            <h2>Component A</h2>
            <MyContext.Consumer>
                {(value) => (
                <p>Received value from Context: {value}</p>
                )}
            </MyContext.Consumer>
            <ComponentB />
            </div>
        );
        }

        export default ComponentA;
        `,
        text: (
            <p>
                В этом примере используется <span>MyContext.Consumer</span> для получения значения контекста и
                отображения его внутри компонента. Значение контекста будет доступно внутри функции-рендерера
                в виде аргумента.
            </p>
        )
    },
]

const inferenceText = (
    <p>
        Context в React предоставляет способ передачи данных через компоненты без использования пропсов.
        Он позволяет легко передавать данные во всем дереве компонентов и
        упрощает управление состоянием и данными приложения. <br />
        Context является инструментом, но его следует использовать с умом.
        Перегрузка контекстом всего приложения может привести <strong>к усложнению и запутыванию кодa</strong>
    </p>
)



const Context = () => {
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>Context (useContext)</h1>
            <div>{contextEplanation}</div>
            <h2>Использование Context:</h2>
            <div>
                {contextStepOnReact.map((elem, index) => {
                    return (
                        <div key={index}>
                            <h3 className={styles.h3}>{index + 1}.{elem.title}:</h3>
                            <pre className={styles.preCode}>
                                <code className={styles.code}>
                                    {elem.codeStep}
                                </code>
                            </pre>
                            {elem.text}
                        </div>
                    )
                })}
            </div>
            <h2>Заключение:</h2>
            <div>{inferenceText}</div>
        </div>
    );
};


export default Context;