import React from 'react';
import GroupShowIndexItem from './group_show_index_item';

class GroupShowIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    render () {
        const { group, members, currentUser } = this.props;
        if (!group) return null;
        return (
            <div>
                <GroupShowIndexItem group={group} members={members} currentUser={currentUser}/>
                {(this.props.match.path === ("/groups/:groupId")) ?
                    <p className="group-show-page-description">{group.description}</p> :
                    null
                }
            </div>
        )
    }
}

export default GroupShowIndex;