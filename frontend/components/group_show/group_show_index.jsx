import React from 'react';
import GroupShowIndexItem from './group_show_index_item';
import { ProtectedRoute } from '../../util/route_util';
import { Route, Link, Switch, HashRouter, Redirect } from 'react-router-dom';
import Members from './members';

class GroupShowIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    render () {
        const { group, members, currentUser, createMembership, deleteMembership, fetchGroup } = this.props;
        if (!group) return null;
        return (
            <div>
                <GroupShowIndexItem group={group}
                members={members} currentUser={currentUser}
                createMembership={createMembership} 
                deleteMembership={deleteMembership}
                fetchGroup={fetchGroup}/>
                <Switch>
                    <Route exact path="/groups/:groupId/members" 
                        render={(props) => ( currentUser ?
                            <Members {...props} members={members} /> :
                            <Redirect to="/" />
                         )} />
                    {/* <ProtectedRoute exact path="/groups/:groupId/events" component={Events}/> */}
                </Switch> 
            </div>
        )
    }
}

export default GroupShowIndex;