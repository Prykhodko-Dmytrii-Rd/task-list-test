import {configureStore} from '@reduxjs/toolkit';
import {taskReducer} from './slices';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        "tasks": taskReducer,
    },
    middleware: (cdm) => cdm(
        {
            serializableCheck: {
                ignoredActions: ["LOAD_TO_CLOUD"],
            },
        },
    ).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export {store};