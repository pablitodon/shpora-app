import React from 'react';
import styles from "./../Pages.module.css";
import { Link } from 'react-router-dom';




const RefsKeysUseMemoHome = () => {
    return (
        <div className={styles.contain}>
            <h1 className={styles.h1}>(Refs, Fragment, key, React.memo, useMemo, …)</h1>
            <div className=' flex mx-auto space-x-10 '>
            <Link className={styles.links} to='/Refs' >Refs</Link>
            <Link className={styles.links} to='/Keys' >Keys</Link>
            <Link className={styles.links} to='/react-memo' >React.memo</Link>
            <Link className={styles.links} to='/fragment' >Fragment</Link>
            <Link className={styles.links} to='/useMemo' >useMemo</Link>
            <Link className={styles.links} to='/useCallback' >useCallback</Link>
            </div>
            

        </div>

    );
};

export default RefsKeysUseMemoHome;