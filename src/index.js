import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}
// Nested Components -------------------------------

const Person = ()=> <h4>Hello my name is anita </h4>;
const Message = () => <p>This is the message I'd like you to see</p>


ReactDom.render(<Greeting />, document.getElementById('root'));
