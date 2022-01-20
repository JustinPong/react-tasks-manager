import React, { useDebugValue } from 'react';
import { Button } from 'react-bootstrap'
import './TaskManager.css';
import shortid from 'shortid';


class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            name: this.state.name,
            description: this.state.description,
            assignedTo: this.state.assignedTo,
            date: this.state.date,
            isChecked: false,
        });
        this.setState({
            id: "",
            name: "",
            description: "",
            assignedTo: "",
            date: "",
            error: true
        });
    }





    render() {
        return (
            <div className="new-task col">
                <h2 className="new-task-title">New Task</h2>
                <form onSubmit={this.handleSubmit} id="new-task-form">
                    <div className="form-group">
                        <label for="name-input">Name</label>
                        <input id="yo" style={{ border: this.state.error ? '2px red solid' : '' }} name="name" value={this.state.name} onChange={this.handleChange} className="col-12" id="name-input" />

                    </div>
                    <div className="form-group">
                        <label for="description-input">Description</label>
                        <textarea placeholder="Optional..." name="description" value={this.state.description} onChange={this.handleChange} className="col-12" type="text"></textarea>
                    </div>
                    <div className="row-form row">
                        <div className="form-group2 col-6">
                            <label for="assignedTo-input">Assigned To</label>
                            <input name="assignedTo" value={this.state.assignedTo} onChange={this.handleChange} className="col-12" id="assignedTo-input" />
                        </div>
                        <div className="form-group2 col-6">
                            <label for="date-input">Date</label>
                            <input name="date" onChange={this.handleChange} className="col-12" type="date" id="date-input" />
                        </div>
                    </div>
                    <div className="add-task-btn">
                        <Button onClick={this.handleSubmit} className="btn-warning col-12">Add Task</Button>
                    </div>
                </form>
            </div>
        )
    }
}


export default TaskManager;