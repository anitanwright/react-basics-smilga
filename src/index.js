import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
    return <h4>This is Anita and this is my first component</h4>;
    
}

// function passing in two things- what is being rendered and where it is being rendered

ReactDom.render(<Greeting />, document.getElementById('root'));