import React from "react";
import { Route, Link, Switch, HashRouter, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './user_form/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import Modal from "./modal/modal";
import UserGroupsIndexContainer from "./user_groups/user_groups_container";
import GroupIndexContainer from "./group_index/group_index_container";
import GroupShowContainer from "./group_show/group_show_container";
import Members from '../components/group_show/members';
import UserShowContainer from './user_profile/user_show_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link"><h1>FeetUp</h1></Link>
            <GreetingContainer />
        </header>
            <ProtectedRoute path="/groups/:groupId" component={GroupShowContainer} />
            <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
            <ProtectedRoute exact path="/" component={UserGroupsIndexContainer} />
            <ProtectedRoute exact path="/" component={GroupIndexContainer} />
    </div>
);

export default App;