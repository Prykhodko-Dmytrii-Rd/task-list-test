import SagaAction from "../../common/types/sagaAction";
import {PayloadAction} from "@reduxjs/toolkit";
import {taskActionCreators} from "../slices";
import {call, put, takeEvery} from 'redux-saga/effects';
import {TaskSagaTypes} from "../../common/enums/actions";
import TaskRepository from "../../data/repository/task-repository";
import IFilter from "../../common/types/filter";

const taskRepo = new TaskRepository()

function* getAllTasks(data: PayloadAction<IFilter>):any {
    try {
        yield put(taskActionCreators.startRequest())
        const response = yield call(taskRepo.getAllTasksByFilters,data.payload)
        yield put(taskActionCreators.successRequest(response))
    } catch (error: any) {
        yield put(taskActionCreators.errorRequest(error))
    }
}

function* taskSagaWatcher() {
    yield takeEvery<SagaAction<IFilter>>(TaskSagaTypes.GET_ALL_TASKS, getAllTasks)
}

export default taskSagaWatcher