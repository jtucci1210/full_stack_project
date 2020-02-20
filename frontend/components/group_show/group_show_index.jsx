import React from 'react';
import GroupShowIndexItem from './group_show_index_item';
import { ProtectedRoute } from '../../util/route_util';
import { Route, Link, Switch, HashRouter, Redirect } from 'react-router-dom';
import Members from './members';
import GroupEventIndex from './group_event_index';

class GroupShowIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    render () {
        const { group, members, currentUser, createMembership, deleteMembership, fetchGroup, events, createRsvp, deleteRsvp, openModal } = this.props;
        if (!group) return null;
        return (
            <div>
                <GroupShowIndexItem group={group}
                members={members} currentUser={currentUser}
                createMembership={createMembership} 
                deleteMembership={deleteMembership}
                fetchGroup={fetchGroup}
                openModal={openModal}/>
                <Switch>
                    <Route exact path="/groups/:groupId/members" 
                        render={(props) => ( currentUser ?
                            <Members {...props} members={members} /> :
                            <Redirect to="/" />
                         )} />
                    <Route exact path="/groups/:groupId/events" 
                        render={(props) => ( currentUser ?
                            <GroupEventIndex {...props} events={events} currentUser={currentUser} createRsvp={createRsvp} deleteRsvp={deleteRsvp} openModal={openModal}/> :
                            <Redirect to="/" />
                         )} />
                </Switch> 
            </div>
        )
    }
}

export default GroupShowIndex;