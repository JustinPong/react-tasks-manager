import './App.css';
import AddTask from'../../components/AddTask/AddTask';
import TaskList from '../../components/TaskList/TaskList';
import React from 'react';


class App extends React.Component {
  render() {

    return (
      <div className="container">
        <h1 className="title">Task List</h1>
        <AddTask />
        <TaskList />
      </div>
    );
  }
}


export default App;