import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getAllTasksAction} from "../store/slices/task-slice";
import {useDispatch} from "react-redux";
import Header from "../components/Header/Header";
import {getParams} from "../services/url-params";
import IFilter from "../common/types/filter";
import TaskCard from "../components/Card/TaskCard";
import TaskList from "../components/List/TaskList";
import styles from "../components/List/TaskList.module.scss"
const Tasks = () => {
    const {data, loading, error} = useTypedSelector(state => state.tasks)
    const [filters, setFilters] = useState<IFilter>({name: "", dateFrom: "", dateTo: "", status: ""})
    const dispatch = useDispatch()
    useEffect(() => {
        const names = getParams(["dateFrom", "dateTo", "status", "name"])
        setFilters(names)
        dispatch(getAllTasksAction(names))
    }, [])

    return (
        <div>
            <Header setFilters={setFilters} filter={filters}/>
            <h1 className={styles.title}>Results</h1>
            <TaskList data={data} error={error} loading={loading}/>
        </div>
    );
};

export default Tasks;