import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, Outlet } from "react-router-dom";
import styles from './Navigation.module.css'


const themes = [
    'Структура проекта',
    'Введение в VirtualDOM',
    'Components',
    'Props',
    'State(useState)',
    'LifeCycle(useEffect)',
    'Events',
    'Refs,Fragment,key,React.memo,useMemo,...',
    'Context(useContext)',
    'Routing',
    'react-hook-form VS formik',
    'Про STORAGEs(Local Storage,Session Storage,Local Forage...)',
    'HOC',
    'Flux',
    'React-Redux:actions,reducers,store,...',
];
const LayoutNavigation = () => {

    const itemsId = themes.map((item) => ({ id: uuidv4(), name: item }));

    return (
        <div className='flex'>
            <nav className={styles.nav}>
                {itemsId.map((elem) => (
                    <Link
                        key={elem.id}
                        to={`/${elem.name}`}
                        className={styles.link}
                    >
                        {elem.name}
                    </Link>
                ))}
            </nav>
            <div className={styles.content}>
                <Outlet />
            </div>

        </div>

    );
};

export default LayoutNavigation;