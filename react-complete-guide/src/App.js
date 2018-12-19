import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asa', name:  'Rohan', age: 25},
      {id: 'asd', name: 'Johan', age: 22}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //Dont do this.
    //this.state.persons[0].name = "Rohan Reji"
    this.setState({
      persons: [
        {id: 'asa', name:  newName, age: 25},
        {id: 'asd', name: 'Johan', age: 22}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]=person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //if you directly reference the persons array in state, when you remove an ele
                                                //ment from the array, the element is removed from the reference as well leading to
                                                //unpredictable apps
    //another approach is using spread operator
    const persons =[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
            {
              this.state.persons.map((person, index) => {
                return <Person click={this.deletePersonHandler.bind(this, index)}name={person.name} age={person.age} changed={(event)=>this.nameChangeHandler(event, person.id)} key={person.id}/>;
              })
              /* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, "Rohan Reji")}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}>I love football</Person> */}
        </div>

      );
    }
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button style={style} onClick={()=>this.switchNameHandler("Ro")} >Switch name</button>
        <button style={style} onClick={this.togglePersonHandler} >Toggle Person</button>
        {persons}
      </div>
      //React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, I am a React App'))
    );
  }
}

export default App;
