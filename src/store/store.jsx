import { configureStore , applyMiddleware } from '@reduxjs/toolkit';
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";


const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}


const store = configureStore({reducer:rootReducer} , applyMiddleware(...middlewares));

export default store