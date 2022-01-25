import React from 'react';
import Item from '../../components/Item/Item';
import './TaskList.css';



class TaskList extends React.Component {

    


    render() {
        return (
            <div className="to-do-list">
                <h2 className="table-title">To Do List</h2>
                {this.props.items.map(item => (
                <Item handleRemove={() => this.props.handleRemove(item.id)} handleUpdate={this.props.handleUpdate} toggleComplete={() => this.props.toggleComplete(item.id)} key={item.id} item={item} />
                ))}
            </div>
        )
    }
}
// 123
export default TaskList;