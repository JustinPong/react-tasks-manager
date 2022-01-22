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
    this.handleRemove = this.handleRemove.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    
  }

  addItem = (item) => {
    this.setState({
      items: [item, ...this.state.items]
    });
  }

  toggleComplete = (id) => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isChecked: !item.isChecked,
          };
        } else {
          return item;
        }
      })
    })
  }

  handleRemove = (id) => {
    const targetlist = [...this.state.items].filter(item => item.id !== id)
    this.setState({items: targetlist})
    // alert(this.props.items[1]);
    // console.log(targetlist);
  }

  handleUpdate = (id) => {
    const targetlist = [...this.state.items].find(item => item.id === id)
    console.log(targetlist)
    }


  render() {
    return (
      <div className="container">
        <h1 className="title">Task List</h1>
        <TaskManager onSubmit={this.addItem} />
        <TaskList handleRemove={this.handleRemove} handleUpdate={this.handleUpdate} toggleComplete={this.toggleComplete} items={this.state.items} />
      </div>
    );
  }
}


export default App;