import ITask from "./task";

interface ITaskState {
    data: ITask[],
    loading: boolean,
    error: null | string,
}

export default ITaskState