import React from 'react';
import Item from '../../components/Item/Item';
import './TaskList.css';



class TaskList extends React.Component {
    render() {
        return (
            <div className="to-do-list">
                <h2 className="table-title">To Do List</h2>
                {/* {this.props.allTask.map((task) => {
                    return <Item title={task.name} />
                })} */}
                {this.props.todos.map(todo => (<Item title={todo.text}/>))}
            </div>
        )
    }
}

export default TaskList;