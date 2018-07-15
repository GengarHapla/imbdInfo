import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "../reducers/reducer";

export const store = createStore(reducer, {}, applyMiddleware(thunk, promise()));
