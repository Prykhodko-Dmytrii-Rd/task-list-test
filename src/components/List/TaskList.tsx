import React from 'react';
import ITask from "../../common/types/task";
import TaskCard from "../Card/TaskCard";
import styles from "./TaskList.module.scss"

interface ListProps {
    data: ITask[],
    loading: boolean,
    error: string | null
}

const TaskList = ({data, loading, error}: ListProps) => {

    if (loading) {
        return <div className={styles.messages}>Loading...</div>
    }
    if (error) {
        return <div  className={styles.messages}>{error}</div>
    }
    if (data.length === 0) {
        return <div  className={styles.messages}>There are no cards for your filters</div>
    }
    return (
        <div>
            <div className={styles.cardContainer}>
                {
                    data.map((el, idx) => <TaskCard key={idx} card={el}/>)
                }
            </div>
        </div>
    );
};

export default TaskList;