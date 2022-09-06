import React from 'react'

const Book = ({img, title, author, authorPage}) => {
  // attribute, evenHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };

  const complexExample = (author) => {
    console.log(author);

  }
  return (
    <article className='book' onMouseOver={()=>{
      console.log(title);
    }}>
      <h1 onClick={()=> console.log(title)}>{title.toUpperCase()}</h1>
      <img src={img} alt= 'some' />
      <div>{author}</div>
      <p>{authorPage}</p>
      <button type='button' onClick={clickHandler}>reference example</button>
      <button type='button' onClick={() => complexExample(author)}>
      more complex example</button>
    </article>
  );
};

export default Book