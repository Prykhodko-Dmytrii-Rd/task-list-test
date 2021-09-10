import {all} from 'redux-saga/effects';
import taskSagaWatcher from "./task-saga";

function* rootSaga(): Generator {
    yield all([taskSagaWatcher()]);
}

export default rootSaga;
