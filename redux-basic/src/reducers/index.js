import hobbyReducer from "./hobby";
import { combineReducers } from "redux";

const rootProducer = combineReducers({
    hobby: hobbyReducer
})
export default rootProducer;
//tong hop tat ca cac reducer trong toan app  dum  combineReducers de combin lai 
