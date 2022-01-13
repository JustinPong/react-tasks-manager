import './App.css';
import TaskManager from'../TaskManager/TaskManger';
import TaskList from '../../components/TaskList/TaskList';
import Card from '../../components/Card/Card';
import React from 'react';


class App extends React.Component {
  render() {

    return (
      <div className="container">
        <h1 className="title">Task List</h1>
        <TaskManager />
        <TaskList />
        {/* <Card /> */}
      </div>
    );
  }
}


export default App;