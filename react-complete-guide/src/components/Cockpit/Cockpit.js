import React from 'react';
import styles from './Cockpit.css'
import Aux from "../../hoc/Aux";

const Cockpit = (props) => {
    const classes = [];
    let btnClass = styles.Button;
    if(props.showPersons)
        btnClass = [styles.Red, styles.Button].join(" ");
    if(props.persons.length <= 2) {
      classes.push(styles.Red);
    }
    if(props.persons.length <= 1 ) {
      classes.push(styles.bold);
    }

    return(
            <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked} >Toggle Person</button>
            <button onClick={props.login}>Login</button>
            </Aux>
    );
};

export default React.memo(Cockpit);