import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state={
    username: "Johan"
  }
  changeHandler=(event)=>{
    this.setState(
      {
        username: event.target.value
      }
    );
  }
  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeHandler} username={this.state.username}/>
        <UserOutput username="Rohan"/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
