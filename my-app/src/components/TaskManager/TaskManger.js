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
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.name === '' || this.state.description === '' || this.state.assignedTo === '') {
            if (this.state.name === '') {
                this.setState({ nameError: true })
            } else {
                this.setState({ nameError: false})
            }
            if (this.state.description === '') {
                this.setState({ descriptionError: true })
            } else {
                this.setState({ descriptionError: false})
            }
            if (this.state.assignedTo === '') {
                this.setState({ assignedToError: true })
            } else {
                this.setState({ assignedToError: false})
            }
        } else {
            this.props.onSubmit({
                id: shortid.generate(),
                name: this.state.name,
                description: this.state.description,
                assignedTo: this.state.assignedTo,
                date: this.state.date,
                isChecked: false,
                nameError: false,
                descriptionError: false,
                assignedToError: false
            });
            this.setState({
                id: "",
                name: "",
                description: "",
                assignedTo: "",
                date: '',
                nameError: false,
                descriptionError: false,
                assignedToError: false
            });
        }
    }





    render() {
        return (
            <div className="new-task col">
                <h2 className="new-task-title">New Task</h2>
                <form onSubmit={this.handleSubmit} id="new-task-form">
                    <div className="form-group">
                        <div className="flex">
                        <label htmlFor="name-input">Name</label>
                        <div className="errorMessage">{this.state.nameError ? '(Please enter a task name)' : ''}</div>
                        </div>
                        <input style={{ border: this.state.nameError ? '2px red solid' : '' }} name="name" value={this.state.name} onChange={this.handleChange} className="col-12" id="name-input" />
                    </div>
                    <div className="form-group">
                        <div className="flex">
                        <label htmlFor="description-input">Description</label>
                        <div className="errorMessage">{this.state.descriptionError ? '(Please enter a description)' : ''}</div>
                        </div>
                        <textarea style={{ border: this.state.descriptionError ? '2px red solid' : '' }} name="description" value={this.state.description} onChange={this.handleChange} className="col-12" type="text"></textarea>
                    </div>
                    <div className="row-form row">
                        <div className="form-group2 col-6">
                            <div className="flex">
                            <label htmlFor="assignedTo-input">Assigned To</label>
                            <div className="errorMessage">{this.state.assignedToError ? '(Please enter a assigned to)' : ''}</div>
                            </div>
                            <input style={{ border: this.state.assignedToError ? '2px red solid' : '' }} name="assignedTo" value={this.state.assignedTo} onChange={this.handleChange} className="col-12" id="assignedTo-input" />
                        </div>
                        <div className="form-group2 col-6">
                            <label htmlFor="date-input">Date</label>
                            <input name="date" value={this.state.date} onChange={this.handleChange} className="col-12" type="date" id="date-input" />
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