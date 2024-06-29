import React from 'react';
import styles from './Pages.module.css'
import { useState } from 'react';








const termBlockHoc = (
    <div>
        Higher Order Components (HOC) являются паттерном в библиотеке React,
        позволяющим <strong>повысить переиспользуемость компонентов </strong>
        и управление состоянием.
        <br />
        <strong>HOC</strong> — это функции высшего порядка,
        которые принимают компонент и возвращают новый компонент с расширенным функционалом.
        <br />
        Они помогают избежать дублирования кода, управлять состоянием,
        обеспечивают абстракцию поведения и <strong> позволяют добавлять
            функциональность к компонентам без изменения их кода.</strong>
    </div>
)


const arrUsagesHOC = [
    {
        title: 'Логическое переиспользование',
        text: `HOC позволяют выделить общую логику компонентов,
    такую как обработка аутентификации или получение данных, 
    и применять ее ко множеству компонентов без дублирования кода.`
    },
    {
        title: 'Прокинуть дополнительные props',
        text: `HOC позволяют добавлять или модифицировать props компонентов.
         Это удобно, например, для передачи данных из контекста или
          оборачивания компонентов в дополнительные компоненты высшего порядка.`
    },
    {
        title: 'Обертывание компонентов',
        text: `HOC могут использоваться для обертывания компонентов
         дополнительным функциональным слоем, например, для логирования,
          манипуляции с состоянием и т.д.`
    }

]


const conclusionBlock = (
    <div>
        <h3>Заключение:</h3>
        <p>
            Higher Order Components предоставляют инструмент <strong>для повышения
                переиспользуемости компонентов</strong> и добавления функциональности.
            При правильном использовании они помогают улучшить структуру и
            модульность твоего кода в приложении на React.
        </p>
    </div>
)



const usageHOC = (
    <div className=''>
        <h2>Проблемы, которые решает HOC:</h2>
        <ul className='list-decimal pl-4'>
            {arrUsagesHOC.map((item, index) => <li key={index}>
                <strong>{item.title}</strong>
                <br />
                {item.text}
            </li>)}
        </ul>
    </div>
);




// HOC
const withCounter = (WrappedComponent) => {
    return (props) => {
        console.log(props);
        const [count, setCount] = useState(0);

        const incrementCount = () => [
            setCount((prevCount) => prevCount + 1)
        ]
        return (
            <WrappedComponent
                count={count}
                incrementCount={incrementCount}
                {...props}
            />
        )
    }
};




// Компонент, который будет обернут HOC
const countCounter = ({ count, incrementCount }) => {
    return (
        <div>
            <p><strong>Count</strong> - {count}</p>
            <button className={styles.button} onClick={incrementCount}>++++</button>
        </div>
    )
};

const CounterWithHOC = withCounter(countCounter);


const HOCBlock = (
    <div>
        <h2>HOC Example</h2>
        <CounterWithHOC />
    </div>
)




const HocComponent = () => {
    return (
        <div className={styles.contain}>
            <h1>HOС (Higher-Order Components)</h1>
            {termBlockHoc}
            {usageHOC}
            {HOCBlock}
            {conclusionBlock}
        </div>
    );
};



export default HocComponent; 