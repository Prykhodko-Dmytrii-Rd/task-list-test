import data from "../mock";
import IFilter from "../../common/types/filter";
import ITask from "../../common/types/task";

class TaskRepository {

    public getAllTasksByFilters = async (filter: IFilter) => {
        const {dateFrom, dateTo, name, status} = filter
        const result = await new Promise(resolve => setTimeout(()=>{
            let res: ITask[] = data
            if (name!=="") res = res.filter(el => el.name === name)
            if (status!=="") res = res.filter(el => el.status === status)
            if (dateTo!=="") res = res.filter(el => el.dateTo === dateTo)
            if (dateFrom!=="") res = res.filter(el => el.dateFrom === dateFrom)
            resolve(res)
        },1000))
        return result
    }
}

export default TaskRepository