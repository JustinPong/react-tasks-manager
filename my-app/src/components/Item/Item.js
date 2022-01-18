import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Item.css';
import App from '../App/App';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    

    
    render() {
        return (
                <div myid={this.props.item.id} id="items" className="list-items">
                    <ListGroup className="task-table col-12">
                        <ListGroup.Item className="task-table-row col-12">
                            <input onClick={this.props.toggleComplete} className="checkbox" type='checkbox' onChange={this.checkingcheckbox}></input>
                            <div style={{  textDecoration: this.props.item.isChecked ? 'line-through' : '' }}>
                                {this.props.item.name}
                            </div>
                            {/* {this.props.item.assignedTo} */}
                            <Button style={{
                                display: this.props.item.isChecked ? 'block' : 'none'
                            }} onClick={this.props.removeList} className="remove">Remove</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
        )
    }
}

export default Item;