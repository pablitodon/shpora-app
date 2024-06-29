import React from 'react';
import styles from './Pages.module.css';
import { v4 as uuidv4 } from 'uuid';


let arrEventsContent = [
    {
        name: 'onClick (Клик):',
        content: 'Событие onClick возникает при клике на элементе. Это одно из наиболее распространенных событий в React.',
        code: `
                const handleClick = () => {
                    console.log('Кликнули!');
                }
                
                const MyComponent = () => {
                    return (
                    <button onClick={handleClick}>Нажми меня</button>
                    );
                }
              `,

    },
    {
        name: 'onChange (Изменение)',
        content: 'Событие onChange возникает при изменении значения элемента формы, такого как текстовое поле (input), флажок (checkbox) или выбор элемента списка (radio).',
        code: `
                const handleChange = (event) => {
                    console.log('Изменилось значение:', event.target.value);
                }
                
                const MyComponent = () => {
                    return (
                    <input type="text" onChange={handleChange} />
                    или
                    <input type="text" onChange={event => handleChange(event)} />
                    );
                }
              `,

    },
    {
        name: 'onSubmit (Отправка формы)',
        content: 'Событие onSubmit возникает при отправке формы. Оно позволяет выполнить действия, связанные с отправкой данных формы на сервер.',
        code: `
                const handleSubmit = (event) => {
                    event.preventDefault();
                    console.log('Форма отправлена!');
                }
                
                const MyComponent = () => {
                    return (
                    <form onSubmit={handleSubmit}>
                        {/* поля формы */}
                        <button type="submit">Отправить</button>
                    </form>
                    );
              `,

    },
    {
        name: 'onMouseOver (Наведение курсора)',
        content: 'Событие onMouseOver возникает, когда курсор наводится на элемент. Оно может использоваться для отображения дополнительной информации или изменения состояния компонента при наведении.',
        code: `
                const handleMouseOver = () => {
                    console.log('Курсор наведен!');
                }
                
                const MyComponent = () => {
                    return (
                    <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
                    );
                }
              `,

    },
    {
        name: 'onKeyDown (Нажатие клавиши)',
        content: 'Событие onKeyDown возникает при нажатии клавиши на клавиатуре. Оно позволяет реагировать на определенные комбинации клавиш или выполнять действия на основе нажатых клавиш.',
        code: `
                const handleKeyDown = (event) => {
                    console.log('Нажата клавиша:', event.key);
                }
                
                const MyComponent = () => {
                    return (
                    <input type="text" onKeyDown={handleKeyDown} />
                    );
                }
              `,

    },
];

arrEventsContent = arrEventsContent.map(el => ({ name: el.name, content: el.content, code: el.code, id: uuidv4() }));


const Events = () => {

    const handleMouseOver = () => {
        alert('Привет!');
    }

    return (
        <div className={styles.contain}>
            <div>
                <h1 className={styles.h1}>Events и как работать с ними</h1>
                <p>
                    В React события (events) являются важной частью взаимодействия с пользователем.
                    Они позволяют обрабатывать действия пользователя, такие как клики, наведение, отправка формы и другие.
                </p>
            </div>
            <div>
                <h3 className={styles.h3}> Пять наиболее часто используемых событий:</h3>
                <div>
                    {arrEventsContent.map((event, index) => {
                        return (
                            <div key={event.id}>
                                <h3 className={styles.h3}>{index + 1}.{event.name}</h3>
                                <p className={styles.p}>{event.content}</p>
                                <pre className={styles.preCode}>
                                    <div className={styles.code}>{event.code}</div>
                                </pre>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <h2 className={styles.h2}>target VS currentTarget</h2>
                <p>
                    Отличие между <span className={styles.span}>event.target.value</span> и <span className={styles.span}>event.currentTarget.value</span> состоит в том,
                    как React интерпретирует их в контексте обработчика событий.
                </p>
                <p className='pt-3' >
                    1.<span className={styles.span}>event.target.value</span> : Это значение, которое было изменено в результате действия пользователя.
                    Например, если есть текстовое поле <span className={styles.span}>{`<input>`}</span> и пользователь вводит в него текст, то <span className={styles.span}>event.target.value </span>
                    будет содержать значение этого текста.
                </p>
                <p className='pt-3'>
                    2.<span className={styles.span}>event.currentTarget.value </span> :  Это значение, которое ассоциировано с элементом,
                    к которому привязан обработчик событий.В контексте React <span className={styles.span}>currentTarget </span> обычно ссылается на элемент,
                    к <span className={styles.span}>которому был привязан обработчик событий</span>, и значение value будет доступно только если этот элемент имеет свойство <span className={styles.span}>value</span>,
                    например, <span className={styles.span}>{`<input>`}</span>, <span className={styles.span}>{`<textarea>`}</span> или <span className={styles.span}>{`<select>`}</span>.
                </p>
                <h3 onMouseOver={handleMouseOver} className={styles.h3}>Пример:</h3>
                <pre className={styles.preCode}>
                    <code className={styles.code}>
                        {
                            `
                                const App = () => {
                                const [targetValue, setTargetValue] = useState('')
                                const [currentTargetValue, setCurrentTargetValue] = useState('')
                              
                                const handleClick = event => {
                                  // event.target.value — значение элемента, который был непосредственно изменен
                                  setTargetValue(event.target.value)
                              
                                  // event.currentTarget.value — значение элемента, к которому привязан обработчик событий
                                  setCurrentTargetValue(event.currentTarget.value)
                                }
                              
                                return (
                                  <div>
                                    <h1>
                                      Демонстрация сравнения event.target.value и event.currentTarget.value
                                    </h1>
                                    <button value='Parent Button' onClick={handleClick}>
                                      Parent Button
                                      <input type='button' value='Child Button' onClick={handleClick} />
                                    </button>
                              
                                    <p>event.target.value: {targetValue}</p>
                                    <p>event.currentTarget.value: {currentTargetValue}</p>
                                  </div>
                                )
                              }
                      `
                        }
                    </code>
                </pre>
                <span> В этом примере:</span><br />
                <p>
                    1. Когда кликнешь на кнопку "Parent Button",
                    <span className={styles.span}>event.target</span> и <span className={styles.span}>event.target.value </span>
                    будут указывать на один и тот же элемент (кнопку), поэтому оба значения будут "Parent Button".
                </p>
                <p>
                    2. Когда кликнешь на "Child Button",
                    <span className={styles.span}>event.target</span> укажет на "Child Button", а  <span className={styles.span}>event.target.value </span>
                    укажет на "Parent Button", так как обработчик события привязан к элементу <span className={styles.span}>{`<button>`}</span> родительского уровня.
                </p>
                        
            </div>

        </div>

    );
};

export default Events;