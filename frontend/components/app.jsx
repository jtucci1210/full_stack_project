import React from "react";
import { Route, Link, Switch, HashRouter, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, UnProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import Modal from "./modal/modal";
import UserGroupsIndexContainer from "./user_groups/user_groups_container";
import GroupIndexContainer from "./group_index/group_index_container";
import EventIndexContainer from "./events/event_index_container";
import EventShowContainer from "./events/event_show_container";
import GroupShowContainer from "./group_show/group_show_container";
import UserShowContainer from './user_profile/user_show_container';
import SplashContainer from './splash/splash_container';
import NewEventContainer from './events/new_event_container';
import EditEventContainer from './events/edit_event_container';
import Footer from './footer/footer';

const App = () => (
    <div className="whole-page-div">
        <Modal />
        <header>
            <Link to="/" className="header-link"><h1>FeetUp</h1></Link>
            <GreetingContainer />
        </header>
            <Route path="/groups/:groupId" component={GroupShowContainer} />
            <Route path="/events/:eventId" component={EventShowContainer} />
            <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
            <ProtectedRoute exact path="/" component={UserGroupsIndexContainer} />
            <ProtectedRoute exact path="/" component={GroupIndexContainer} />
            <ProtectedRoute exact path="/events" component={EventIndexContainer} />
            <ProtectedRoute exact path="/:groupId/events/new" component={NewEventContainer} />
            <ProtectedRoute exact path="/:groupId/events/:eventId/edit" component={EditEventContainer} />
            <UnProtectedRoute exact path="/" component={SplashContainer} />
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;