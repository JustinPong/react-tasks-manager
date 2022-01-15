import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './Item.css';

class Item extends React.Component {
    render() {
        return (
            <div className="list-items">
                <ListGroup className="task-table col-12">
                    <ListGroup.Item className="task-table-row col-12">
                        <input className="checkbox" type='checkbox'></input>
                        {this.props.title}
                        <Button className="remove">Remove</Button>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default Item;