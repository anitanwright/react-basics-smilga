import React from 'react';
import ReactDom from 'react-dom';
// css relative path file
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

// Book Component is the main component we will use to nest the others within
const Book = () => {
  const title = 'Atomic Habits';
  const author = 'James Clear';
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL210_SR195,210_.jpg'
        alt='Atomic Habits Book'
      />
      <h1>{title.toUpperCase()}</h1>
      {author.toUpperCase()}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
