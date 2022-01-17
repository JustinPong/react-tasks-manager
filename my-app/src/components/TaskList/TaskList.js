import React from 'react';
import Item from '../../components/Item/Item';
import './TaskList.css';



class TaskList extends React.Component {

    render() {
        return (
            <div className="to-do-list">
                <h2 className="table-title">To Do List</h2>
                {this.props.items.map(item => (<Item key={item.id} item={item} />))}
            </div>
        )
    }
}

export default TaskList;