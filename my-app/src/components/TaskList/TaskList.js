import React from 'react';
import './TaskList.css';
import { ListGroup } from 'react-bootstrap';

class TaskList extends React.Component {
    render() {
        return (
            <div className="to-do-list">
                <h2 className="table-title">To Do List</h2>
                <table className="task-table col-12">
                    <tr>
                        <th className="task-table-row col-12">
                            <input type="checkbox" />
                            Task1
                        </th>
                    </tr>
                    <tr>
                        <th className="col-12">
                            <input type="checkbox" />
                            Task2
                        </th>
                    </tr>
                    <tr>
                        <th className="col-12">
                            <input type="checkbox" />
                            Task3
                        </th>
                    </tr>
                    <tr>
                        <th className="col-12">
                            <input type="checkbox" />
                            Task4
                        </th>
                    </tr>
                    <tr>
                        <th className="col-12">
                            <input type="checkbox" />
                            Task5
                        </th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default TaskList;