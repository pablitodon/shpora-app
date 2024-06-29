import React from 'react';
import styles from './../Pages.module.css'
import { useNavigate } from 'react-router-dom';

const mainText = (
    <p>
        <strong>React.memo</strong> — это функция высшего порядка (Higher Order Component) в библиотеке React, которая оптимизирует производительность функциональных компонентов. Она предназначена для предотвращения ненужного повторного рендеринга компонента, когда его пропсы и состояние не изменились.
        <br />
        По умолчанию, при каждом изменении состояния или пропсов компонент перерисовывается, даже если результирующий визуальный вывод не изменился. Это может быть неэффективно для компонентов, которые не зависят от изменений внешних данных и всегда отображают одинаковый результат.
        <br />
        <strong>React.memo</strong> использует механизм мемоизации, чтобы запоминать предыдущий результат рендеринга компонента и сравнивать его с текущими пропсами. Если пропсы не изменились, <strong>React.memo</strong> предотвращает повторный рендеринг компонента, возвращая сохраненный результат.`
    </p>
);

const mainCodeOne = `
                    import React from 'react';

                    const MyComponent = React.memo((props) => {
                    // Компонент будет перерисовываться только при изменении пропсов
                    return (
                        <div>
                        {props.text}
                        </div>
                    );
                    });
                `;

const mainCodeTwo = `
                    import React from 'react';

                    const ExpensiveComponent = React.memo((props) => {
                    // Компонент перерисуется только при изменении text и если text содержит более 5 символов
                    return (
                        <div>
                        {props.text}
                        </div>
                    );
                    }, (prevProps, nextProps) => {
                    // Пользовательская функция сравнения
                    // Возвращает true, если text в prevProps и nextProps одинаков и меньше или равно 5 символам
                    return prevProps.text === nextProps.text && prevProps.text.length <= 5;
                    });

                    // Использование оптимизированного компонента
                    function App() {
                    const shortText = 'Hello'; // Меньше или равно 5 символам
                    const longText = 'Hello, World!'; // Больше 5 символов

                    return (
                        <div>
                        <h1>Компоненты:</h1>
                        <ExpensiveComponent text={shortText} /> {/* Не будет перерисован */}
                        <ExpensiveComponent text={longText} /> {/* Будет перерисован */}
                        </div>
                    );
                    }
                `


const codeBlock = (
<>
    <pre className={styles.preCode}>
        <code className={styles.code}>
            {mainCodeOne}
        </code>
    </pre>
    <h2 className={styles.h2}>Пример:</h2>
    <pre className={styles.preCode}>
        <code className={styles.code}>
            {mainCodeTwo}
        </code>
    </pre>

</>
)






const ReactMemo = () => {


    const navigate = useNavigate();
  
    const handleClick =  () => {
        navigate('/Refs,Fragment,key,React.memo,useMemo,...')
    }

 
  
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>React.memo</h1>
            <div>{mainText}</div>
            <h2 className={styles.h2}>Пример использования:</h2>
            <div>{codeBlock}</div>
            <div className='flex justify-center text-xl'>
            <button className={styles.button} onClick={handleClick}>Назад</button>
            </div>
        </div>
    );
};

export default ReactMemo;