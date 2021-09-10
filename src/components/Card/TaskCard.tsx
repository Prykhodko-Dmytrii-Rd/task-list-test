import React from 'react';
import ITask from "../../common/types/task";
import {BsPeople, BsClock} from "react-icons/bs"
import styles from "./TaskCard.module.scss"
import date from "date-and-time"
interface CardProps {
    card:ITask
}

const TaskCard = ({card}: CardProps) => {
    const dateTo = new Date(card.dateTo)
    const now = new Date()
    const expired = (now.getTime() - dateTo.getTime()) > 0
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardNameStatusContainer}>
                <div className={styles.name}>{card.name}</div>
                <div className={styles.status}>{card.status}</div>
            </div>
            <div className={styles.cardCatDateContainer}>
                <div className={styles.category}><BsPeople/> {card.category}</div>
                <div className={styles.date}><BsClock color={ expired ? "red" : "green"}/> {date.format(dateTo,'MMM DD, YYYY')}</div>
            </div>
        </div>
    );
};

export default TaskCard;