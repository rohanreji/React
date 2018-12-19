import React from 'react';

const validationComponent = (props) => {
    let validation = null;
    if (props.length > 5) {
        validation = (
            <p>Text long enough</p>
        );
    }
    else {
        validation = (
            <p>Text too short</p>
        ); 
    }
    return (
        validation
    );
}

export default validationComponent;