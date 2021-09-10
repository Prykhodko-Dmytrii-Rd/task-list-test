import {Action,PayloadAction} from "@reduxjs/toolkit";

interface SagaAction<T> extends Action, PayloadAction<T> {
    type: string;
}

export default SagaAction