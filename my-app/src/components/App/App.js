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
    this.removeList = this.removeList.bind(this);
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

  removeList = (id) => {
    const targetlist = [...this.state.items].filter(item => item.id !== id)
    this.setState({items: targetlist})
    // alert(this.props.items[1]);
    // alert(this.props.item);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Task List</h1>
        <TaskManager onSubmit={this.addItem} />
        <TaskList removeList={this.removeList} toggleComplete={this.toggleComplete} items={this.state.items} />
      </div>
    );
  }
}


export default App;