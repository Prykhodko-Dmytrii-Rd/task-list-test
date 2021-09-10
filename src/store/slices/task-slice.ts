import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import ITaskState from "../../common/types/taskState";
import ITask from "../../common/types/task";
import {TaskSagaTypes} from "../../common/enums/actions";
import IFilter from "../../common/types/filter";

const initialState: ITaskState = {
    data: [],
    error: null,
    loading: false,
}

const {reducer, actions} = createSlice({
    name: "task",
    initialState,
    reducers: {
        startRequest: (state) => {
            state.loading = true
            state.error = null
            state.data = []
        },
        successRequest: (state, action: PayloadAction<ITask[]>) => {
            state.loading = false
            state.data = action.payload
        },
        errorRequest: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
            state.data = []
        },
    },
});

export const getAllTasksAction = (data: IFilter) => ({
    type: TaskSagaTypes.GET_ALL_TASKS,
    payload: data
})

const taskActionCreators = {
    ...actions,
};

export {taskActionCreators, reducer}