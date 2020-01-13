import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchAllGroups();
    }

    render () {
        const { groups } = this.props;
        if (!groups) return null;
        return (
            <div className="groups-container">
                    <div className="groups-index">
                        <h4 className="groups-index-header">ALL GROUPS</h4>
                        <div className="groups-index-div">
                            {groups.map(group => (
                                <GroupIndexItem key={group.id} group={group} />
                            ))
                            }
                        </div>
                    </div>
            </div>
        )
    }
}


export default GroupIndex;