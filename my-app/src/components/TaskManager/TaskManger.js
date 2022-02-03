import React, { useDebugValue, useState, useEffect } from 'react';
import { useLocalStorage } from "../useLocalStorage";
import { Button } from 'react-bootstrap'
import './TaskManager.css';
import shortid from 'shortid';
import { API_GET_TASK } from '../../global/constants';

async function fetchTask(setTask) {
    const res = await fetch(API_GET_TASK)
    const { task } = await res.json()
    return task
}


function TaskManager(props) {

    const [task, setTask] = useState ({
        id: shortid.generate(),
        name: '',
        description: '',
        assignedTo: '',
        date: '',
        isChecked: false,
        nameError: false,
        descriptionError: false
    })

    useEffect(() => {
        fetchTask(setTask)
    }, [])


    //system past event into event handling function as first input, 
    //first input= first argument
    //destructing method
    //const (target) = event 


    const handleChange = ({ target }) => {
        // alert(target.name);
        const { name, value } = target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value,
        }
        )
        )
    }


    const handleSubmit = (event) => {
        if (task.name === '' || task.description === '' || task.assignedTo === '') {
            if (task.name === '') {
                setTask(prevTask => ({...prevTask, nameError: true}))
            } else {
                setTask(prevTask => ({...prevTask, nameError: false}))
            }
            if (task.description === '') {
               setTask(prevTask => ({...prevTask, descriptionError: true}))
            } else {
                setTask(prevTask => ({...prevTask, descriptionError: false}))
            }
        } else if(task.name && task.description && task.assignedTo) {
             props.onSubmit(task)
               setTask({
                    id: "",
                    name: "",
                    description: "",
                    assignedTo: "",
                    date: "",
                    nameError: false,
                    descriptionError: false
                });
        }
    }
    return (
        <div className="new-task col">
            <h2 className="new-task-title">New Task</h2>
            <form onSubmit={handleSubmit} id="new-task-form">
                <div className="form-group">
                    <label htmlFor="name-input">Name</label>
                    <div className="errorMessage">{task.nameError ? '(Please enter a task name)' : ''}</div>
                    <input style={{ border: task.nameError ? '2px red solid' : '' }} name="name" value={task.name} onChange={handleChange} className="col-12" id="name-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="description-input1">Description</label>
                    <div className="errorMessage">{task.descriptionError ? '(Please enter a description)' : ''}</div>
                    <textarea style={{ border: task.descriptionError ? '2px red solid' : '' }} name="description" value={task.description} onChange={handleChange} className="col-12" type="text"></textarea>
                </div>
                <div className="row-form row">
                    <div className="form-group2 col-6">
                        <label htmlFor="assignedTo-input">Assigned To</label>
                        <input name="assignedTo" value={task.assignedTo} onChange={handleChange} className="col-12" id="assignedTo-input" />
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