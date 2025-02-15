import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import './Item.css';




class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.item.name,
            description: this.props.item.description,
            assignedTo: this.props.item.assignedTo,
            date: this.props.item.date,
            show: false,
            newName: this.props.item.name,
            newDescription: this.props.item.description,
            newAssignedTo: this.props.item.assignedTo,
            newDate: this.props.item.date
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.assignedToChange = this.assignedToChange.bind(this);
        this.dateChange = this.dateChange.bind(this);
    }

    nameChange = (e) => {
        const newName = e.target.value;
        this.setState({
            newName: newName
        })
    }

    descriptionChange = (e) => {
        const newDescription = e.target.value;
        this.setState({
            newDescription: newDescription
        })
    }

    assignedToChange = (e) => {
        const newAssignedTo = e.target.value;
        this.setState({
            newAssignedTo: newAssignedTo
        })
    }

    dateChange = (e) => {
        const newDate = e.target.value;
        this.setState({
            newDate: newDate
        })
    }

    handleSave = (e) => {
        e.preventDefault();
        const newName = this.state.newName
        const newDescription = this.state.newDescription;
        const newAssignedTo = this.state.newAssignedTo;
        const newDate = this.state.newDate;
        this.setState({
            name: newName,
            description: newDescription,
            assignedTo: newAssignedTo,
            date: newDate,
            show: false
        })
    }

    //To close the Modal window
    handleClose = () => {
        const newName = this.state.name;
        const newDescription = this.state.description;
        const newAssignedTo = this.state.assignedTo;
        const newDate = this.state.date;
        this.setState({
            show: false,
            newName: newName,
            newDescription: newDescription,
            newAssignedTo: newAssignedTo,
            newDate: newDate
        })
    };

    //To popout the Modal window
    handleShow = () => {
        this.setState({ show: true })
    };

    render() {
        return (
            <div myid={this.props.item.id} id="items" className="list-items">
                <ListGroup className="task-table col-12">
                    <ListGroup.Item className="task-table-row col-12" style={{backgroundColor: this.props.isDark ? 'rgb(29,29,29)' : 'white'}}>
                        <input onClick={this.props.toggleComplete} className="checkbox" type='checkbox'></input>
                        <div style={{ textDecoration: this.props.item.isChecked ? 'line-through' : '' }, {color: this.props.isDark ? 'white' : 'black'}}>
                            {this.state.name}
                        </div>
                        <Button variant="primary" style={{ display: this.props.item.isChecked ? 'none' : 'block' }} onClick={this.handleShow} className="edit" >Edit</Button>
                        <Button style={{
                            display: this.props.item.isChecked ? 'block' : 'none'
                        }} onClick={this.props.handleRemove} className="remove">Remove</Button>
                    </ListGroup.Item>
                </ListGroup>
                <Modal show={this.state.show} onHide={this.handleClose} >
                    <Modal.Header style={{backgroundColor: this.props.isDark ? 'rgb(29,29,29)' : 'white'}} closeButton>
                        <Modal.Title style={{color: this.props.isDark ? 'white' : 'black'}}>Editing</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{backgroundColor: this.props.isDark ? 'rgb(29,29,29)' : 'white'}}>
                        <form id="new-task-form">
                            <div className="form-group">
                                <label htmlFor="name-input" style={{color: this.props.isDark ? 'white' : 'black'}}>Name</label>
                                <input style={{ border: this.state.error ? '2px red solid' : '' }} onChange={this.nameChange} name="name" value={this.state.newName} className="col-12" id="name-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description-input" style={{color: this.props.isDark ? 'white' : 'black'}}>Description</label>
                                <textarea name="description" onChange={this.descriptionChange} value={this.state.newDescription} className="col-12" type="text"></textarea>
                            </div>
                            <div className="row-form row">
                                <div className="form-group2 col-6">
                                    <label htmlFor="assignedTo-input" style={{color: this.props.isDark ? 'white' : 'black'}}>Assigned To</label>
                                    <input name="assignedTo" value={this.state.newAssignedTo} onChange={this.assignedToChange} className="col-12" id="assignedTo-input" />
                                </div>
                                <div className="form-group2 col-6">
                                    <label htmlFor="date-input" style={{color: this.props.isDark ? 'white' : 'black'}}>Date</label>
                                    <input value={this.state.newDate} onChange={this.dateChange} name="date" className="col-12" type="date" id="date-input" />
                                </div>
                            </div>
                            <div className="add-task-btn">
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer style={{backgroundColor: this.props.isDark ? 'rgb(29,29,29)' : 'white'}}>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button type='submit' onClick={this.handleSave} variant="primary" >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Item;