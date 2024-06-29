import React from 'react';
import styles from './../Pages.module.css'
import ButtonRefsUseMemo from '../../components/ButtonForRefsUseMemo/ButtonRefsUseMemo';

const textUseMemo = (
    <div>
        <p>
            React хук useMemo предназначен для <strong>мемоизации вычислений в функциональных компонентах</strong>.
            Он позволяет сохранять результат вычислений и повторно использовать его,
            если входные значения (зависимости) не изменились. Это может существенно повысить производительность,
            особенно в случаях, когда сложные вычисления выполняются при каждом рендеринге компонента.
        </p>
    </div>
)

const textForExampleOne = (
    <p>
        В этом примере результат вычисления <strong>processData</strong> будет сохраняться и пересчитываться только при изменении значения пропса <strong>data</strong>.
        При последующих рендерах, если  <strong>data</strong> не изменилось, будет использован сохраненный результат.
    </p>
)
const textForExampleTwo = (
    <p>
        В этом примере компонент <strong>ExpensiveComponent</strong> будет кэширован при каждом изменении <strong>propA</strong> или <strong>propB</strong> .
        При последующих рендерах, если <strong>propA</strong> или <strong>propB</strong>  не изменились, будет использован сохраненный результат.
    </p>
)


const divCodeExampleOne = (
    <div>
        <h2 className={styles.h2}>Вычисление производительной функции:</h2>
        <pre className={styles.preCode}>
            <code className={styles.code}>
                {
                    `
                    import React, { useMemo } from 'react';

                    const MyComponent = ({ data }) => {
                    const processedData = useMemo(() => {
                        // Вычисления, требующие много времени или ресурсов
                        // Например, фильтрация или сортировка массива данных
                        return processData(data);
                    }, [data]); // Зависимость - значение пропса "data"

                    return (
                        <div>
                        {processedData}
                        </div>
                    );
                    };
                `
                }
            </code>
        </pre>
        <div>{textForExampleOne}</div>
    </div>
);


const divCodeExampleTwo = (
    <div>
        <h2 className={styles.h2}>Кэширование компонента:</h2>
        <pre className={styles.preCode}>
            <code className={styles.code}>
                {
                    `
                    import React, { useMemo } from 'react';

                    const ExpensiveComponent = ({ propA, propB }) => {
                    // Сложный компонент, требующий много ресурсов
                    return (
                        // ...
                    );
                    };

                    const MyComponent = ({ data }) => {
                    const cachedComponent = useMemo(() => {
                        // Компонент будет кэширован при каждом изменении propA или propB
                        return <ExpensiveComponent propA={propA} propB={propB} />;
                    }, [propA, propB]);

                    return (
                        <div>
                        {cachedComponent}
                        </div>
                    );
                    };
                    `
                }
            </code>
        </pre>
        <div>{textForExampleTwo}</div>
    </div>
)


const UseMemo = () => {
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>useMemo</h1>
            <p>{textUseMemo}</p>
            <h2 className={styles.h2}>Примеры использования:</h2>
            <div>{divCodeExampleOne} </div>
            <div>
                {divCodeExampleTwo}
            </div>
            <ButtonRefsUseMemo/>
        </div>
    );
};

export default UseMemo;