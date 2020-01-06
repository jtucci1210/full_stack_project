import React from "react";
import ReactDOM from "react-dom";
import configureStore from "../frontend/store/store";
import Root from "../frontend/components/root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    //Testing Start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //Testing End
    
    ReactDOM.render(<Root store={store}/>, root);
});