import TaskManager from '../TaskManager/TaskManger';
import TaskList from '../../components/TaskList/TaskList';
import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isDark: false
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
    const targetlist = [...this.state.items].find(item => item.id === id);
    alert(targetlist);
    }

    handleDark = () => {
      this.setState({isDark: true})
    }

    handleWhite = () => {
      this.setState({isDark: false})
    }

  render() {
    return (
      <div className="background" style={{backgroundColor: this.state.isDark ? 'rgb(21,21,21)' : 'white'}} >
      <div className="container">
        <div className="top-bar" style={{display: 'flex'}}>
        <h1 className="title" style={{color: this.state.isDark ? 'white' : 'black'}}>Welcome Back</h1>
        {!this.state.isDark && <a onClick={this.handleDark} href="#" className="dark-mode">
        <BsFillMoonFill />
        </a>}
        {this.state.isDark && <a onClick={this.handleWhite} href="#" className="dark-mode">
        <BsFillSunFill style={{color: 'white'}} />
        </a>}
        
        </div>
        <TaskManager onSubmit={this.addItem} />
        <TaskList isDark={this.state.isDark} handleRemove={this.handleRemove} handleUpdate={this.handleUpdate} toggleComplete={this.toggleComplete} items={this.state.items} />
      </div>
      </div>
    );
  }
}


export default App;
