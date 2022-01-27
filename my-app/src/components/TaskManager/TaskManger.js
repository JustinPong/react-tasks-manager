import React, { useDebugValue, useState, useEffect } from 'react';
import { useLocalStorage } from "../useLocalStorage";
import { Button } from 'react-bootstrap'
import './TaskManager.css';
import shortid from 'shortid';


function TaskManager()  {

        const [task, setTask] = useState({
            id: shortid.generate(),
            name: '',
            description: '',
            assignedTo: '',
            date: '',
            isChecked: false,
            nameError: false,
            descriptionError: false,
            assignedToError: false
        })
    
    const handleChange = ({event}) => {
        const {name, value} = event
        setTask(prevTask => ( {
            ...prevTask,
            [name]:value,
        }
        )
        )
    }

    
    const handleSubmit = (event) => {                                            
        if (task.name === '' || task.description === '' || task.assignedTo === '') {
            if (task.name === '') {                                   
            } else {
                ( task.nameError= false)
            }
            if (task.description === '') {
                (task.descriptionError= true)
            } else {
                (task.descriptionError= false)
            }
            if (task.assignedTo === '') {
                ( task.assignedToError= true)
            } else {
                ( task.assignedToError= false)
            }
        } else {
                const {name, value} = event
                // id: shortid.generate(),
                (task.name= name)
                (task.description= task.description)
                (task.assignedTo= task.assignedTo)
                (task.date= task.date)
                (task.isChecked= false)
                (task.nameError= false)
                (task.descriptionError= false)
                (task.assignedToError= false)
            
            ({
                id: "",
                name: "",
                description: "",
                assignedTo: "",
                date: "",
                nameError: false,
                descriptionError: false,
                assignedToError: false
            });
        }
    }
        return (
            <div className="new-task col">
                <h2 className="new-task-title">New Task</h2>
                <form onSubmit={handleSubmit} id="new-task-form">
                    <div className="form-group">
                        <label htmlFor="name-input">Name</label>
                        <input style={{ border: task.nameError ? '2px red solid' : '' }} name="name" value={task.name} onChange={handleChange} className="col-12" id="name-input"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description-input1">Description</label>
                        <textarea style={{ border: task.descriptionError ? '2px red solid' : '' }} name="description" value={task.description} onChange={handleChange} className="col-12" type="text"></textarea>
                    </div>
                    <div className="row-form row">
                        <div className="form-group2 col-6">
                            <label htmlFor="assignedTo-input">Assigned To</label>
                            <input style={{ border: task.assignedToError ? '2px red solid' : '' }} name="assignedTo" value={task.assignedTo} onChange={handleChange} className="col-12" id="assignedTo-input" />
                        </div>
                        <div className="form-group2 col-6">
                            <label htmlFor="date-input">Date</label>
                            <input name="date" onChange={handleChange} className="col-12" type="date" id="date-input" />
                        </div>
                    </div>
                    <div className="add-task-btn">
                        <Button onClick={handleSubmit} className="btn-warning col-12">Add Task</Button>
                    </div>
                </form>
            </div>
        )
    
        }

export default TaskManager;