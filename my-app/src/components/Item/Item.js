import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import './Item.css';
import App from '../App/App';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import { Modal } from 'react-bootstrap';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.removeList = this.removeList.bind(this);
        this.state = {
            show: false
        }
    }

    removeList = () => {
        const targetlist = document.getElementById('items');
        targetlist.remove();
        // alert(this.props.items[1]);
        // alert(this.props.item);
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

    handleClose = () => {
        this.setState({
            show: false
        })
    }   

    handleShow = () => {
        this.setState({
            show: false
        })
    }

    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);


    render() {
        return (
            <div>
                <div myid={this.props.item.id} id="items" className="list-items">
                    <ListGroup className="task-table col-12">
                        <ListGroup.Item className="task-table-row col-12">
                            <input className="checkbox" type='checkbox' onChange={this.checkingcheckbox}></input>
                            {this.props.item.name}
                            <Button onClick={this.removeList} className="remove">Remove</Button>
                            

                            {/* <div class="box">
                                <a class="button" href="#popup1">Click for more</a>
                                <Modal.Dialog>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            Sample Modal Heading
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <p>Event: {this.props.item.name}</p>
                                    <br />                                 
                                    <p>Detail:{this.props.item.description}</p>
                                    <br />
                                    <p>Assigned To: {this.props.item.assignedTo}</p>
                                    <br />
                                    <p>Due Date:</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary">
                                            Save changes
                                        </Button>
                                        <Button variant="secondary">
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </div>
                     */}
                            

                            <div class="box">
                                <a class="button" href="#popup1">Click for more</a>
                            </div>
                            <div id="popup1" class="overlay">
                                <div class="popup">
                                    <h2>Details</h2>
                                    <br />
                                    <a class="close" href="#">&times;</a>
                                    <div class="content">
                                    <p>Event: {this.props.item.name}</p>
                                    <br />                                 
                                    <p>Detail:{this.props.item.description}</p>
                                    <br />
                                    <p>Assigned To: {this.props.item.assignedTo}</p>
                                    <br />
                                    <p>Due Date:</p>
                                    </div>
                                </div>
                            </div>



                            {/* <div className="Popup">
                                <Popup className="box" trigger={<Button href="#" onClick={this.handleClick}>Click for more</Button>}
                                    position="right center">
                                    <p>Event: {this.props.item.name}</p>
                                    <p>Detail:{this.props.item.description}</p>
                                    <p>Assigned To: {this.props.item.assignedTo}</p>
                                    <p>Due Date:</p>
                                </Popup>
                            </div> */}

                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default Item;