import rootProducer from "./reducers";
import { legacy_createStore as createStore } from "redux";
const store = createStore(rootProducer);

export default store;