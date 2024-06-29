import React from 'react';
import styles from './Pages.module.css'


const propsTask = [
    'Что такое пропсы и зачем они нужны',
    'Передача пропсов компонентам',
    'Доступ к пропсам внутри компонентов'
];

const Props = () => {
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>Props</h1>

            <ul className={styles.ul}>
                {propsTask.map((item) => <li>{item}</li>)}
            </ul>

            <h2 className={styles.h2}>Что такое пропсы и зачем они нужны</h2>
            <p>
                Пропсы - это способ передачи данных от родительского компонента к дочернему.
            </p>
            <h2 className={styles.h2}>Передача пропсов компонентам</h2>
            <p>
                Пропсы передаются в компоненты в виде атрибутов при их использовании в JSX. Например, <span className={styles.span}>{`<ChildComponent message="Привет, Redev!" />`}</span> передает пропс <span className={styles.span}>message</span> со значением "Привет, Redev!" в компонент <span className={styles.span}>ChildComponent</span>.
            </p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {`
                // Родительский компонент
                const ParentComponent = () => {
                    const message = 'Hello,Pavel';
                    return <ChildComponent  message = {message}/>
                };
                

                // Дочерний компонент
                const ChildComponent = (props) => {
                    return <div>{props.message}</div>
                };
                
                `}
                </code>
            </pre>

            <h2 className={styles.h2}>Доступ к пропсам внутри компонентов</h2>
            <p>В функциональных компонентах пропсы доступны как параметр функции компонента. Например, <span className={styles.span}>{`(props) => {...}`}</span>.</p>
            <pre className={styles.preCode}>
                <code className={styles.code}>
                    {`
                    // Родительский компонент
                    const ParentComponent = () => {
                        const message = 'Привет,Redev!'
                        return <ChildComponent message={message} />
                    };
                    
                    // Дочерний компонент
                    const ChildComponent = () => {
                        return <h1>{props.message}</h1>
                    }
                    
                    //  либо сразу сделать деструктуризацию, ведь props это обычный объект
                    const ChildComponent = ({message}) => {
                        return <h1>{message}</h1>
                    }
                    `}
                </code>
            </pre>
            <p>
                В классовых компонентах пропсы доступны через <span className={styles.span}>`this.props`</span>. Например, <span className={styles.span}> this.props.message</span><br />
                Пример с классовой компонентой:
            </p>
            <pre className={styles.preCode}>
                <code >
                    {`
                // Родительский компонент

                const obj = {name:'Pasha'}
                const ParentComponent = () => {
                return <ChildComponent 
                age= {25}
                isMan = {true}
                object = {obj}
                />
            };


            // Дочерний компонент
            class ChildComponent extends React.Component {
            render () {
                return (
                    <div>
                        
                        <h1>{this.props.age}</h1>
                        <h1>{this.props.isMan}</h1>
                        <h1>{this.props.children}</h1>
                        <h1>{this.props.object}</h1>
                    </div>
                )
            }
            }
            `
                    }
                </code>
            </pre>

            <p>
                <span className={styles.span}>Props</span> можно использовать для передачи <span className={styles.span}>любых данных, включая строки, числа, массивы, объекты и функции</span>.
                Пропсы являются <span className={styles.span}>неизменяемыми (immutable)</span>, их нельзя изменять напрямую.

                <span className={styles.span}>this.props.name = "Vasya"</span> то есть вот так изменить пропс name НЕЛЬЗЯ!
                <br />
                Однако, можно использовать <span className={styles.span}>состояние компонента (state)</span> для изменения пропсов.
            </p>
        </div>
    );
};

export default Props;