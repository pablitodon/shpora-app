import React from 'react';
import styles from './Pages.module.css'

const routingGoal = (
    <p>
        Основная цель роутинга в веб-приложениях заключается в том,
        <strong>чтобы позволить пользователям перемещаться по различным частям приложения БЕЗ ПЕРЕЗАГРУЗКИ</strong> страницы.
        Вместо того, чтобы каждый раз отправлять запрос на сервер и загружать новую страницу,
        роутинг позволяет динамически обновлять только необходимые компоненты или данные в соответствии с выбранным маршрутом.
    </p>
)

const codeInstall = (
    <div>
        <p>Для установки React Router Dom v6 с помощью npm выполни следующую команду:</p>
        <pre >
            <code>
                {`
            npm install react-router-dom@latest
            `}
            </code>
        </pre>
    </div>
);


const majorComponents = [
    {
        title: 'Routes',
        text: 'Контейнер для определения всех маршрутов в приложении.Группирует несколько Route компонентов.'
    },
    {
        title: 'Route',
        text: 'Определяет отдельный маршрут внутри Routes.Имеет путь (path) и элемент (element) для отображения.'
    },
    {
        title: 'Link',
        text: 'Создает ссылки для навигации между маршрутами.'
    },
    {
        title: 'NavLink',
        text: 'Создает активные ссылки, добавляя класс "active" к текущему активному маршруту.'
    },
    {
        title: 'useNavigate',
        text: 'Хук для перенаправления пользователя на другие маршруты.'
    },
    {
        title: 'useParams',
        text: 'Хук для получения параметров из маршрута.'
    },
    {
        title: 'useLocation',
        text: 'Хук для получения информации о текущем URL.'
    },
    {
        title: 'Outlet',
        text: 'Контейнер для отображения компонентов, соответствующих текущему маршруту.'
    }
]

const importUsageBrowserRouter =
    (
        <div>
            <h2>Импорт и использование BrowserRouter</h2>
            <div>
                <p>1.Импортируйте BrowserRouter из 'react-router-dom'.</p>
                <p>2.Оберните приложение в BrowserRouter в корневом файле проекта,в index.js.</p>
            </div>
            <pre >
                <code>
                    {`
           import { BrowserRouter } from 'react-router-dom';
            `}
                </code>
            </pre>
            <pre >
                <code>
                    {`
            import React from 'react';
            import ReactDOM from 'react-dom';
            import { BrowserRouter } from 'react-router-dom';
            import App from './App';

            ReactDOM.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
            document.getElementById('root')
            );
            `}
                </code>
            </pre>
        </div>
    )


const codeExplain = (
    <pre>
        <code>
            {
                `
                    import React from "react";
                    import { Link, Routes, Route, Outlet } from "react-router-dom";
                    import Component from "./components/Component";
                    import Home from "./components/Home";

                    const App = () => {
                    return (
                        <div>
                        <div>
                            <Link to="/component" element={<Component />}>
                            ComponentLink
                            </Link>
                            <Link to="/home" element={<Component />}>
                            HomeLink
                            </Link>
                        </div>

                        <Routes>
                            <Route path="/component" element={<Component />} />
                            <Route path="/home" element={<Home />} />
                        </Routes>
                        
                        <main>
                        <Outlet />
                        </main>
                        </div>
                    );
                    };

                    export default App;

                    `
            }
        </code>
    </pre>
)



const Routing = () => {
    return (
        <div className={styles.contain}>
            <h1>Роутинг в React с помощью React Router V6</h1>
            <h2>Значение роутинга в веб-приложениях:</h2>
            <div>{routingGoal}</div>
            <div>
                <h2>Установка и настройка React Router Dom v6:</h2>
                <div>{codeInstall}</div>
            </div>
            <div>{importUsageBrowserRouter}</div>
            <div>
                <h2>Основные компоненты React Router Dom v6:</h2>
                {majorComponents.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>Простой пример:</h2>
                <div>{codeExplain}</div>
            </div>

        </div>
    );
};

export default Routing;