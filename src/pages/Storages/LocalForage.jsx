import React, { useState } from 'react';
import localforage from 'localforage';
import styles from './../Pages.module.css'
import { useEffect } from 'react';

const LocalForage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    // Извлекаем сохраненный язык при загрузке компонента
    useEffect(() => {
        localforage.getItem('language')
            .then((language) => {
                if (language) {
                    setSelectedLanguage(language);
                }
            })
    }, []);

    const handleLanguageChange = (e) => {
        // Сохраняем выбранный язык в LocalForage
        const newLang = e.target.value;
        localforage.setItem('language', newLang)
            .then(() => setSelectedLanguage(newLang));

    }

    const codeBlock = (
        <div>
            <pre>
                <code>
                    {
                        `
                    import React, { useState } from 'react';
                    import localforage from 'localforage';
                    import styles from './../Pages.module.css'
                    import { useEffect } from 'react';

                    const LocalForage = () => {
                        const [selectedLanguage, setSelectedLanguage] = useState('');
                        // Извлекаем сохраненный язык при загрузке компонента
                        useEffect(() => {
                            localforage.getItem('language')
                                .then((language) => {
                                    if (language) {
                                        setSelectedLanguage(language);
                                    }
                                })
                        }, []);

                        const handleLanguageChange = (e) => {
                            // Сохраняем выбранный язык в LocalForage
                            const newLang = e.target.value;
                            localforage.setItem('language', newLang)
                                .then(() => setSelectedLanguage(newLang));

                        }


                            return (
                            <div className={styles.contain}>
                                <h1>LocalForage</h1>
                                <h2>Explain</h2>
                                <select value={selectedLanguage} onChange={handleLanguageChange}>
                                    <option value="ru">Russian</option>
                                    <option value="en">English</option>
                                    <option value="de">Deutsche</option>
                                </select>
                            </div>
                        );
                    };

                    export default LocalForage;



                    `}
                </code>
            </pre>
        </div>
    )

    return (
        <div className={styles.contain}>
            <h1>LocalForage</h1>
            <h2>Explain:</h2>
            <select className='max-w-xs mb-5 bg-gray-300' value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="ru">Russian</option>
                <option value="en">English</option>
                <option value="de">Deutsche</option>
            </select>
            {codeBlock}
        </div>
    );
};

export default LocalForage;