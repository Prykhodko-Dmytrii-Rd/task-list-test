import React from 'react';
import styles from "./Input.module.scss"
interface InputProps {
    id: string,
    title: string,
    type: string,
    field: any,
    placeholder: string
}

const Input = ({field, type, id, placeholder, title}: InputProps) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={id}>{title}</label>
            <input className={styles.input} {...field} type={type} placeholder={placeholder}/>
        </div>
    );
};

export default Input;