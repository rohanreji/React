import React from 'react';

const input = (props) => {
    return (
        <input type="text" onChange={props.changed} value={props.value} />
    );
}

export default input;