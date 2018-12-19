import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Output from './Output/Output';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'


class App extends Component {
  state = {
    text: ""
  };

  textChangeHandler = (event) => {
    this.setState(
      {
        text: event.target.value
      }
    );
  }

clickHandler = (event, index) => {
  let characters = this.state.text.split('');
  characters.splice(index, 1);
  let text = characters.join('');
  this.setState(
    {
      text: text
    }
  )
}

  render() {
    let characters = this.state.text.split('');
    return (
      <div className="App">
        <Input changed={this.textChangeHandler} value={this.state.text} />
        <Output value={this.state.text}/>
        <ValidationComponent length={this.state.text.length} />
        {/* { this.state.text.length > 0 ?
            <CharComponent char={this.state.text[0]} />
            : null
        } */}
        {characters.map((character, i)=>{
          return <CharComponent char={character} key={i} clicked={(event)=> this.clickHandler(event, i)} />
        })}
      </div>
    );
  }
}

export default App;
