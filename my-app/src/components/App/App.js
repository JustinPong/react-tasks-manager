import TaskManager from '../TaskManager/TaskManger';
import TaskList from '../../components/TaskList/TaskList';
import Item from '../../components/Item/Item';
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem = (item) => {
    this.setState({
      items: [item, ...this.state.items]
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Task List</h1>
        <TaskManager onSubmit={this.addItem} />
        <TaskList items={this.state.items} />
        {console.log(this.state.items)}
      </div>
    );
  }
}


export default App;