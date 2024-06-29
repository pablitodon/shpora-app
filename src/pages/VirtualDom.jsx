import React from 'react';
import styles from './Pages.module.css'
import CounterVitudalDOM from "./../images/CounterVitudalDOM.png";


const VirtualDom = () => {
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>Введение в VirtualDOM</h1>
            <h2 className={styles.h2}>Определение: Виртуальный DOM</h2>
            <p>Виртуальный DOM - это промежуточное представление DOM в памяти компьютера, используемое React для эффективного обновления пользовательского интерфейса.</p>

            <h2 className={styles.h2}>Процесс Virtual DOM в React</h2>
            <p>React сравнивает виртуальное дерево элементов с реальным DOM и применяет минимальный набор изменений.</p>

            <h2 className={styles.h2}>Польза</h2>
            <ul>
                <li><span className={styles.span}>Эффективность:</span> Минимизация обновлений DOM, повышение производительности.</li>
                <li><span className={styles.span}>Удобство:</span> Упрощение разработки, автоматическое обновление DOM.</li>
                <li><span className={styles.span}>Переносимость:</span> Абстрагирование различий в реализации DOM в разных браузерах.</li>
            </ul>

            <h2 className={styles.h2}>Reconciliation в React</h2>
            <p>Сравнение предыдущего и нового состояний компонента для определения изменений интерфейса.</p>
            <h3 className={styles.h3}>Этапы:</h3>
            <ol>
                <li>Обновление состояния.</li>
                <li>Сравнение элементов и их дочерних элементов.</li>
                <li>Обновление виртуального DOM.</li>
                <li>Эффективные изменения в реальном DOM.</li>
            </ol>

            <h2 className={styles.h2}>Пример с компонентом Counter:</h2>
            <pre className={styles.preCode}>
                <code className= {styles.code} >
                    {`    import React,{useState} from 'react';

            const Counter = () => {
                const [count,setCount] = useState(0);
            
                const increment = () => setCount(count + 1);
            
                const decrement = () => setCount(count - 1);

                return (
                <div>
                    return (
                    <div>
                        <h1>{count}</h1>
                        <button onClick={increment}>+</button>
                        <button onClick={decrement}>-</button>
                    </div>
                    );
                </div>
                );
            };

                export default Counter;
                `}
                </code>
            </pre>


            <ol className='list-decimal list-inside pt-3'>
                <li>При первом рендере компонента Counter, его начальное состояние count равно 0.</li>
                <li>React создает виртуальное дерево элементов (Virtual DOM) на основе JSX-разметки. Он создает элементы для <span className={styles.span}>{'<div>'}</span>, <span className={styles.span}>{'<p>'}</span> , <span className={styles.span}>{'<button>'}</span>, и т. д., а также включает значение count в соответствующем месте интерфейса.</li>
                <li>React обновляет реальный DOM, отображая созданный виртуальный DOM на экране. Мы видим интерфейс счетчика с начальным значением 0 и кнопками для увеличения и уменьшения значения.</li>
                <li>Когда мы нажимаем кнопку "Increment" или "Decrement", вызываются соответствующие функции <span className={styles.span}>increment</span> или <span className={styles.span}>decrement</span>. В этих функциях мы изменяем значение count, используя функцию <span className={styles.span}>setCount</span>.</li>
                <li>После изменения состояния count, <span className={styles.span}>React запускает процесс reconciliation. Он сравнивает предыдущий виртуальный DOM с новым виртуальным DOM</span>, чтобы определить, какие изменения необходимо внести в реальный DOM.</li>
                <li>React определяет, что значение count изменилось, и обновляет соответствующую часть интерфейса. Новое значение count отображается в <span className={styles.span}>{'<h1>'}</span> элементе.</li>
                <li>Вместо полного перерисовывания всего интерфейса, React применяет только необходимые изменения в реальном DOM. В данном случае, он обновляет только текстовое значение внутри <span className={styles.span}>{`h1`}</span> элемента.</li>
            </ol>
            <hr />
            <p>Этот процесс позволяет <span className={styles.span}>React</span> эффективно управлять обновлениями интерфейса, делая изменения только там, где они действительно требуются, что повышает производительность и удобство разработки приложений.</p>
        </div>


    );
};

export default VirtualDom;