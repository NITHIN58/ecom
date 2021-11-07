import {createStore} from "redux";
import rootReducer from "./Reducer/rootReducer";

const reduxStore=createStore(rootReducer);
export default reduxStore