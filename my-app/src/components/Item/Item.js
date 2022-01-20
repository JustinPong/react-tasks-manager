import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import './Item.css';
import App from '../App/App';
import TaskList from '../TaskManager/TaskManger'


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: {
                id: null,
                value: ''
            },
            show: false
        }
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    handleShow = () => {
        this.setState({ show: true })
    }


    render() {
        return (
            <div myid={this.props.item.id} id="items" className="list-items">
                <ListGroup className="task-table col-12">
                    <ListGroup.Item className="task-table-row col-12">
                        <input onClick={this.props.toggleComplete} className="checkbox" type='checkbox' onChange={this.checkingcheckbox}></input>
                        <div style={{ textDecoration: this.props.item.isChecked ? 'line-through' : '' }}>
                            {this.props.item.name}
                        </div>
                        {/* {this.props.item.assignedTo} */}
                        <Button variant="primary" style={{display: this.props.item.isChecked ? 'none' : 'block'}} onClick={this.handleShow} className="edit" >Edit</Button>
                        <Button style={{
                            display: this.props.item.isChecked ? 'block' : 'none'
                        }} onClick={this.props.removeList} className="remove">Remove</Button>
                    </ListGroup.Item>
                </ListGroup>
                <Modal show={this.state.show} onHide={this.handleClose} >
                    <Modal.Header closeButton onClick={this.handleClose}>
                        <Modal.Title>Editing</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                <form onSubmit={this.handleSubmit} id="new-task-form">
                    <div className="form-group">
                        <label for="name-input">Name</label>
                        <input id="yo" style={{ border: this.state.error ? '2px red solid' : '' }} name="name" value={this.props.item.name} onChange={this.handleChange} className="col-12" id="name-input" />

                    </div>
                    <div className="form-group">
                        <label for="description-input">Description</label>
                        <textarea placeholder="Optional..." name="description" value={this.props.item.description} onChange={this.handleChange} className="col-12" type="text"></textarea>
                    </div>
                    <div className="row-form row">
                        <div className="form-group2 col-6">
                            <label for="assignedTo-input">Assigned To</label>
                            <input name="assignedTo" value={this.props.item.assignedTo} onChange={this.handleChange} className="col-12" id="assignedTo-input" />
                        </div>
                        <div className="form-group2 col-6">
                            <label for="date-input">Date</label>
                            <input name="date" onChange={this.handleChange} className="col-12" type="date" id="date-input" />
                        </div>
                    </div>
                    <div className="add-task-btn">
                        <Button className="btn-warning col-12">Save</Button>
                    </div>
                </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Item;