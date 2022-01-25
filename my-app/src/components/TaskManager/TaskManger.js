import React, { useDebugValue } from 'react';
import { Button } from 'react-bootstrap'
import './TaskManager.css';
import shortid from 'shortid';

class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: shortid.generate(),
            name: '',
            description: '',
            assignedTo: '',
            date: '',
            isChecked: false,
            nameError: false,
            descriptionError: false,
            assignedToError: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            name: this.state.name,
            description: this.state.description,
            assignedTo: this.state.assignedTo,
            isChecked: false
        });
        this.setState({
            name: ""
        });
    }

    // save method
    save() {
        // Create a JSON string of the tasks
        const tasksJson = JSON.stringify(this.tasks);

        // Store the JSON string in localStorage
        localStorage.setItem('tasks', tasksJson);

        // Convert the currentId to a string;
        const currentId = String(this.currentId);

        // Store the currentId in localStorage
        localStorage.setItem('currentId', Event);
    }

    // load method
    load() {
        // Check if any tasks are saved in localStorage
        if (localStorage.getItem('tasks')) {
            // Get the JSON string of tasks in localStorage
            const tasksJson = localStorage.getItem('tasks');

            // Convert it to an array and store it in our TaskManager
            this.tasks = JSON.parse(tasksJson);
        }

        // Check if the currentId is saved in localStorage
        if (localStorage.getItem('currentId')) {
            // Get the currentId string in localStorage
            const currentId = localStorage.getItem('currentId');

            // Convert the currentId to a number and store it in our TaskManager
            this.currentId = Number(currentId);
        }
    }





    render() {
        return (
            
            <div className="new-task col">
                <h2 className="new-task-title">My task</h2>
                <form onSubmit={this.handleSubmit} id="new-task-form">
                    <div className="form-group">
                        <label for="name-input">Event</label>
                        <input name="name" value={this.state.name} onChange={this.handleChange} className="col-12" id="name-input" />
                    </div>
                    <div className="form-group">
                        <label for="description-input">Description</label>
                        <textarea placeholder="Optional" id="description-input" name="description" value={this.state.description} onChange={this.handleChange} className="col-12" type="text"></textarea>
                    </div>
                    <div className="row-form row">
                        <div className="form-group2 col-6">
                            <label for="assignedTo-input">Assigned To</label>
                            <input name="assignedTo" value={this.state.assignedTo} onChange={this.handleChange} className="col-12" id="assignedTo-input" />
                        </div>
                        <div className="form-group2 col-6">
                            <label htmlFor="date-input">Date</label>
                            <input name="date" value={this.state.date} onChange={this.handleChange} className="col-12" type="date" id="date-input" />
                        </div>
                    </div>
                    <div className="add-task-btn">
                        <Button onClick={this.handleSubmit} className="btn col-12">Add Task</Button>
                    </div>
                </form>
            </div>
        )
    }
}


export default TaskManager;