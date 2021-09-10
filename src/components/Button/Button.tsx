import React from 'react';
import styles from "./Button.module.scss"

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    like?: "primary" | "secondary",
    title: string,
    onClick?:()=>void
}

const Button = ({title, like = "primary", type = "button",onClick}: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className={`${styles.main} ${styles[like]}`}>
            {title}
        </button>
    );
};

export default Button;