import React from 'react';
const userInput = (props) => {
    const style={
        border: "2px solid red",
        font: "inherit",
        padding: "2px"
      }
    return(
        <input type="text" style={style} onChange={props.changed} value={props.username}/>
    );
}
export default userInput;