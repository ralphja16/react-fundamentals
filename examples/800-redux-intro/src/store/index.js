
// src/js/store/index.js

// Step 1 - Create the store
import { createStore } from "redux";
import rootReducer from "../reducers/index"; // To be created

const store = createStore(rootReducer);

export default store;
