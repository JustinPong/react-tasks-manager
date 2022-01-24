import TaskManager from '../TaskManager/TaskManger';
import TaskList from '../../components/TaskList/TaskList';
import Item from '../../components/Item/Item';
import React from 'react';
import './App.css'
import { BsMoonStarsFill } from "react-icons/bs";


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
      <BsMoonStarsFill/>
        <h1 className="title">Welcome back !</h1>
        <TaskManager onSubmit={this.addItem} />
        <TaskList items={this.state.items} />
        {console.log(this.state.items)}
      </div>
      
    );
  }
}


export default App;