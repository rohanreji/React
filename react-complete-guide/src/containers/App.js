import React, { PureComponent } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Au';
import withClass from '../hoc/withClass';

// import Radium, {StyleRoot} from 'radium';
export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log("[App.js] inside the App constructor", props);
    this.state = {
      persons: [
        {id: 'asa', name:  'Rohan', age: 25},
        {id: 'asd', name: 'Johan', age: 22}
      ],
      showPersons: false,
      toggleClicked: 0,
      isAuthenticated: false
    }
  }

  componentWillMount() {
    console.log("[App.js] inside componentWillMount");
  }
  componentDidMount() {
    console.log("[App.js] inside componentDidMount");
  }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[UPDATE App.js] inside shouldComponentUpdate", nextProps,nextState);
//     return nextState.persons!==this.state.persons || nextState.showPersons!==this.state.showPersons;
// }

componentWillUpdate(nextProps,nextState) {
    console.log("[UPDATE App.js] inside componentWillUpdate");
}
componentDidUpdate(){
    console.log("[UPDATE App.js] inside componentDidUpdate");
}
static getDerivedStateFromProps(nextProps, prevState) {
  console.log("[App.js] Update. Inside getDerivedStatesFromProps", nextProps, prevState);
  return prevState;
}

getSnapshotBeforeUpdate() {
  console.log("[App.js] Update. Inside getSnapshotBeforeUpdate");
}
  // state = {
  //   persons: [
  //     {id: 'asa', name:  'Rohan', age: 25},
  //     {id: 'asd', name: 'Johan', age: 22}
  //   ],
  //   showPersons: false
  // }

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
    //since we are using this.state inside this.setState
    this.setState((prevState, props) => {
        return {
          showPersons: !doesShow, toggleClicked: prevState.toggleClicked + 1
        }
    });
    //this.setState({showPersons: !doesShow, toggleClicked: this.state.toggleClicked + 1});
  }

  loginHandler = () => {
    this.setState({isAuthenticated: true})
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
    console.log("[App.js] inside render");
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white', 
    //   font: 'inherit',
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // }
    let persons = null;
    // let btnClass = '';
    if(this.state.showPersons) {
      persons = (
        <div>
            
              <Persons clicked={this.deletePersonHandler} changed={this.nameChangeHandler} persons={this.state.persons} />
              {/* // this.state.persons.map((person, index) => {
              //   return <Person click={this.deletePersonHandler.bind(this, index)}name={person.name} age={person.age} changed={(event)=>this.nameChangeHandler(event, person.id)} key={person.id}/>;
              // })
              /* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, "Rohan Reji")}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}>I love football</Person> */
             }
            
        </div>
      );
      //style.backgroundColor="red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

      // btnClass = styles.Red;
    }
    // const classes = [];
    // if(this.state.persons.length <= 2) {
    //   classes.push(styles.red);
    // }
    // if(this.state.persons.length <= 1 ) {
    //   classes.push(styles.bold);
    // }

    return (
      // <StyleRoot>
      <Aux>
        <button onClick={()=>{this.setState({showPersons: true})}}>showPersons</button>
        <Cockpit login={this.loginHandler} appTitle={this.props.title} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonHandler}/>
        {/* {/* <h1>Hi, I am a React App</h1> */}
        {/* <p className={classes.join(' ')}>This is really working!</p> */} 
        {/* <button style={style} onClick={()=>this.switchNameHandler("Ro")} >Switch name</button> */}
        {/* <button className={btnClass} onClick={this.togglePersonHandler} >Toggle Person</button> */}
        <AuthContext.Provider value={this.state.isAuthenticated}>
        {persons}
        </AuthContext.Provider>
      </Aux>
      // </StyleRoot>
      //React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, I am a React App'))
    );
  }
}

export default withClass(App, styles.App);
