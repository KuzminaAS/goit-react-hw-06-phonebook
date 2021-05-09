import React from 'react';
import styles from './ButtonForm.module.css';

const ButtonForm = () => {
    return (
        <button className={styles.button} type="submit">
            <svg className={styles.border}  width="120px" height="40px" fill="none" viewBox="0 0 180 60">
            <polyline points="179,1 179,59 1,59 1,1 179,1" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" />
            </svg>
            <span className={styles.text}>Add contact</span>
         </button>
    )
};

export default ButtonForm;
