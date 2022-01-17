import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Item.css';
import App from '../App/App';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.removeList = this.removeList.bind(this);
    }

    removeList = () => {
        const targetlist = document.getElementById('items'); 
        targetlist.remove();
        // alert(this.props.items[1]);
        // alert(this.props.item);
    }

    checkingcheckbox = () => {
        if (this.props.isChecked) {

        }
    }

    render() {
        return (
            <div>
            <div myid={this.props.item.id} id="items" className="list-items">
                <ListGroup className="task-table col-12">
                    <ListGroup.Item className="task-table-row col-12">
                        <input className="checkbox" type='checkbox' onChange={this.checkingcheckbox}></input>
                        {this.props.item.name}
                        <Button onClick={this.removeList} className="remove">Remove</Button>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            </div>
        )
    }
}

export default Item;