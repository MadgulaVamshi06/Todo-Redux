import todoReducer from "./reducer";
import {legacy_createStore} from 'redux'


const store = legacy_createStore(todoReducer);

export default store ;