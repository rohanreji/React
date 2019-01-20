import React, { Component } from 'react';
import styles from "./Person.css"
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types';

import {AuthContext} from "../../../containers/App"

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Peron.js] inside the App constructor", props);
        this.inputElement = React.createRef();
      }
    
      componentWillMount() {
        console.log("[Peron.js] inside componentWillMount");
      }
    
      componentDidMount() {
        console.log("[Peron.js] inside componentDidMount");
        //this.focusInput();
      }
      focus() {
            this.inputElement.current.focus();
      }
    render() {
        console.log("[Person.js] inside render");
        return (
                    <Aux>
                        <AuthContext.Consumer>
                            {value => value ? <p>I am authenticated!</p>: null }
                        </AuthContext.Consumer>
                        {/* {(this.props.authenticated?<p>I am authenticated!</p>: null)} */}
                        <p onClick={this.props.click}>I'm {this.props.name}. And I am {this.props.age}. {this.props.children}</p>
                        {/* <input ref={(inp)=>{this.inputElement=inp;}}type="text" onChange={this.props.changed} value={this.props.name}/> */}
                        <input ref={this.inputElement} type="text" onChange={this.props.changed} value={this.props.name}/>
                    </Aux>
                );
                // return [
                //     <p key="1" onClick={this.props.click}>I'm {this.props.name}. And I am {this.props.age}. {this.props.children}</p>,
                //     <input key="2" type="text" onChange={this.props.changed} value={this.props.name}/>
                // ];
    }
}
// const person = (props) => {
//     return (
//         <div className={styles.Person}>
//             <p onClick={props.click}>I'm {props.name}. And I am {props.age}. {props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     )
// }

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClass(Person,styles.Person);