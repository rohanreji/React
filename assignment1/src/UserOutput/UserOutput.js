import React from "react";
import "./UserOutput.css"
const userOutput = (props) => {
    return(
    <div className="UserOutput">
        <p>Username</p>
        <p>Value: {props.username}</p>
    </div>
    )
}

export default userOutput;