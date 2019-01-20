import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log("[Perons.js] inside the App constructor", props);
        this.lastPersonRef = React.createRef();
      }
    
      componentWillMount() {
        console.log("[Perons.js] inside componentWillMount");
      }
    
      componentDidMount() {
        console.log("[Perons.js] inside componentDidMount");
        this.lastPersonRef.current.focus();
      }

      componentWillReceiveProps(nextProps) {
          console.log("[UPDATE Persons.js] inside componentWillReceiveProps");
      }

    //   shouldComponentUpdate(nextProps, nextState) {
    //       console.log("[UPDATE Persons.js] inside shouldComponentUpdate", nextProps,nextState);
    //       return (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked);
    //   }

      componentWillUpdate(nextProps,nextState) {
          console.log("[UPDATE Persons.js] inside componentWillUpdate");
      }
      componentDidUpdate(){
          console.log("[UPDATE Persons.js] inside componentDidUpdate");
          
      }
    render() {
        console.log("[Persons.js] inside render");
        return this.props.persons.map((person, index) => {
            return <Person  ref={this.lastPersonRef} position={index} click={this.props.clicked.bind(this, index)} name={person.name} age={person.age} changed={(event)=>this.props.changed(event, person.id)} key={person.id}/>;    
            } );
    }
} 
// const Persons= (props) => props.persons.map((person, index) => {
//     return <Person click={props.clicked.bind(this, index)} name={person.name} age={person.age} changed={(event)=>props.changed(event, person.id)} key={person.id}/>;    
//     }
// );

export default Persons;


