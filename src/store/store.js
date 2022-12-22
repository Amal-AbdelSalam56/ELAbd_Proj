
import { legacy_createStore as createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combineReducers from './reducers/allReducers';


const store=createStore(combineReducers,
    composeWithDevTools(applyMiddleware(thunk)))

export default store