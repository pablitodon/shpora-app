import React from 'react';
import styles from './../Pages.module.css'
import { useNavigate } from 'react-router-dom';
import ButtonRefsUseMemo from '../../components/ButtonForRefsUseMemo/ButtonRefsUseMemo';




const arrCode = [
    `
    import React, { Fragment } from 'react';

    //Заменяем теги div на Fragment:
    const ChildComponent = () => <Fragment>
        <h1>Hello Child Component</h1>
        <h1>Hello Child Component</h1>
    </Fragment>
    `, `
    'import React, { Fragment } from 'react';

    //так хорошо
    const ChildComponent = () => <>
        <h1>Hello Child Component</h1>
        <h1>Hello Child Component</h1>
    </>
    
    // так нельзя. Будет ошибка
    const ChildComponent = () => < className="child" >
        <h1>Hello Child Component</h1>
        <h1>Hello Child Component</h1>
    </>`
]

const FragmentComponent = () => {


    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Refs,Fragment,key,React.memo,useMemo,...')
    }

    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>Fragment</h1>
            <p>
                С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.
                Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:
            </p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {arrCode[0]}
                </code>
            </pre>
            <p>
                Существует <strong>сокращенная запись</strong> (импортировать не нужно) - недостаток сокращенной записи:
                нельзя использовать атрибуты, например <strong>className</strong> или <strong>key</strong> 😿.
            </p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {arrCode[1]}
                </code>
            </pre>
          <ButtonRefsUseMemo />
        </div>
    );
};

export default FragmentComponent;