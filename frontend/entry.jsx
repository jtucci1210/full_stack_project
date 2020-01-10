import React from "react";
import ReactDOM from "react-dom";
import configureStore from "../frontend/store/store";
import Root from "../frontend/components/root";
import { logout } from "./actions/session_actions";
import { fetchAllGroups, fetchGroup, createMembership, deleteMembership } from "./util/groups_api_util";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //Testing Start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = logout;
    window.fetchAllGroups = fetchAllGroups
    window.fetchGroup = fetchGroup
    window.createMembership = createMembership
    window.deleteMembership = deleteMembership
    //Testing End
    
    ReactDOM.render(<Root store={store}/>, root);
});