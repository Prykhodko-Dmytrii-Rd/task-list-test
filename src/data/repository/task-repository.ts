import data from "../mock";
import IFilter from "../../common/types/filter";
import ITask from "../../common/types/task";

class TaskRepository {

    public getAllTasksByFilters = async (filter: IFilter) => {
        const {dateFrom, dateTo, name, status} = filter
        const result = await new Promise(resolve => setTimeout(()=>{
            let res: ITask[] = data
            if (name!=="") res = res.filter(el => el.name.match(name))
            if (status!=="") res = res.filter(el => el.status === status)
            if (dateTo!=="") res = res.filter(el => (new Date(el.dateTo).getTime() - new Date(dateTo).getTime()) < 0)
            if (dateFrom!=="") res = res.filter(el => (new Date(el.dateFrom).getTime() - new Date(dateFrom).getTime()) > 0)
            resolve(res)
        },1000))
        return result
    }
}

export default TaskRepository