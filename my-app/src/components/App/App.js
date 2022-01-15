import TaskManager from '../TaskManager/TaskManger';
import TaskList from '../../components/TaskList/TaskList';
import Item from '../../components/Item/Item';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
  };
  }

  addTodo = (todo) => {
      this.setState({
          todos: [todo, ...this.state.todos]
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Task List</h1>
        <TaskManager onSubmit={this.addTodo} />
        <TaskList todos={this.state.todos} onDelete={this.handleChangeDelete} />
      </div>
    );
  }
}


export default App;