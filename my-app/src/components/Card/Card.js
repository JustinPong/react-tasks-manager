import React from 'react';


class Card extends React.Component {
    render() {
        return (
            <div id="list-items">
                <div className="card" style="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">Event 1</h5>
                        <p className="card-text">Details</p>
                        <p className="card-text">Venue</p>
                        <p className="card-text">Due date: Aug 20 - 2020</p>
                        <span className="badge bg-primary">In progress</span>
                        <a href="#" className="btn btn-primary">Remove</a>
                    </div>
                </div>
                <div className="card" style="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">Event 2</h5>
                        <p className="card-text">Details</p>
                        <p className="card-text">Venue</p>
                        <p className="card-text">Due date: Aug 20 - 2020 </p>
                        <span className="badge bg-success">In progress</span>
                        <a href="#" className="btn btn-primary">Remove</a>
                    </div>
                </div>
                <div className="card" style="width: 18rem">
                    <div className="card-body">
                        <h5 className="card-title">Event 3</h5>
                        <p className="card-text">Details</p>
                        <p className="card-text">Venue</p>
                        <p className="card-text">Due date: Aug 20 - 2020</p>
                        <span className="badge bg-warning">Pending</span>
                        <a href="#" className="btn btn-primary">Remove</a>
                    </div>
                </div>
                <div className="card" style="width: 18rem">
                    <div className="card-body">
                        <h5 className="card-title">Event 4</h5>
                        <p className="card-text">Details</p>
                        <p className="card-text">Venue</p>
                        <p className="card-text">Due date: Aug 20 - 2020</p>
                        <span className="badge bg-success">Pending</span>
                        <a href="#" className="btn btn-primary">Remove</a>
                    </div>
                </div>
                <div className="card" style="width: 18rem">
                    <div className="card-body">
                        <h5 className="card-title">Event 5</h5>
                        <p className="card-text">Details</p>
                        <p className="card-text">Venue</p>
                        <p className="card-text">Due date: Aug 20 - 2020</p>
                        <span className="badge bg-warning">Pending</span>
                        <a href="#" className="btn btn-primary">Remove</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;