import React from 'react';
import styles from './Pages.module.css'
import StructureApp from './../images/structure-app.png';
import StructurePackageJsonImg from "./../images/packaje-json-screen.png";

const ProjectStructure = () => {
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>
                Структура проекта
            </h1>
            <p>
                Типичная структура проекта на React, которую часто используют разработчики.
            </p>
            <img src={StructureApp} alt='StructureApp' />
            <div>
                <h2 className={styles.h2}>Структура проекта:</h2>
                <h3 className={styles.h3} >`src`:</h3>
                <p>
                    - <span>`components`</span>: Каталог для компонентов React.<br />
                    - <span>`App.js`</span>: Главный компонент приложения.<br />
                    - <span>`Todo`</span>: Папка для компонентов Todo.<br />
                    - <span>`pages`</span>: Содержит компоненты для отдельных страниц.<br />
                    - <span>`utils`:</span>: Вспомогательные функции и утилиты.<br />
                    - <span>`redux`</span>: Директория для управления состоянием (например, Redux).<br />
                    - <span>`routes`</span>: Определение маршрутов в приложении.<br />
                    - <span>`index.js`</span>: Входная точка для рендеринга в корневой элемент.<br />
                </p>
                <h3 className={styles.h3}>`public`:</h3>
                <p>
                    - `index.html`: Основной HTML-файл с корневым элементом для React.
                </p>
                <h3 className={styles.h3} >`node_modules`:</h3>
                <p>
                    - Хранит все зависимости проекта.
                </p>
                <h3 className={styles.h3}>`package.json`:</h3>
                <p>
                    - Содержит информацию о зависимостях и конфигурации проекта.
                </p>
                <h3 className={styles.h3}>`package-lock.json`:</h3>
                <p>
                    - Содержит информацию о зависимостях и конфигурации проекта.
                </p>
                <h3 className={styles.h3}>`.env`:</h3>
                <p>
                    - Задание переменных окружения для конфигурации приложения.
                </p>

                <h3 className={styles.h3}>`.gitignore`:</h3>
                <p>
                    - Определяет игнорируемые файлы и папки Git.
                </p>

                <h3 className={styles.h3}>`README.md`:</h3>
                <p>
                    - Описание проекта, инструкции по установке и запуску, полезная информация.
                </p>
            </div>


            <h2 className={styles.h2}>package.json</h2>
            <img src={StructurePackageJsonImg} alt="structure-app" />
            <p>Ключевые моменты о файле <span className={styles.span} >package.json</span>:</p>
            <h3 className={styles.h3}> Описание проекта:</h3>
            <p>Название, описание, версия и автор проекта для понимания другими разработчиками.</p>
            <h3 className={styles.h3}> dependencies (зависимости):</h3>
            <p>Список сторонних пакетов и библиотек, необходимых для проекта.</p>
            <h3 className={styles.h3}> scripts:</h3>
            <p>Команды для автоматизации процессов в проекте, как запуск приложения или сборка.</p>
            <h3 className={styles.h3}> Настройки проекта:</h3>
            <p>Определение различных настроек, таких как точка входа, настройки сборки и поддержка браузеров.</p>
            <hr className='mt-5' />
            <p className='pt-5'>

                <span className={styles.span} >Package.json</span> является "сердцем" проекта React, содержащим важную информацию о проекте, зависимостях, настройках и скриптах. Он помогает управлять зависимостями, автоматизировать задачи и поддерживать порядок в проекте.
            </p>
        </div>
    );
};

export default ProjectStructure;