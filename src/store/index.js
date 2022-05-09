import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from "redux-logger";
import subjectReducer from './reducers/subject-reducer';
import userReducer from './reducers/user-reducer';

const logger = createLogger();

const store = configureStore({
    reducer: {
        user: userReducer,
        subject: subjectReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV === "development",
});

export default store;