/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDom from 'react-dom';

// css relative path file
import './index.css';
const books = [
  { id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL210_SR195,210_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
    authorPage: (
      <a href='https://www.amazon.com/James-Clear/e/B07DJTJC3X/ref=dp_byline_cont_pop_book_1'>
        Click here to find out more about the author!
      </a>
    ),
  },

  { id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51hb6+asUeL._SX321_BO1,204,203,200_.jpg',
    title: 'Unaccustomed Earth',
    author: 'Jhumpa Lahiri',
    authorPage: (
      <a href='https://m.media-amazon.com/images/I/91-p01XE3PL._AC_UL640_FMwebp_QL65_.jpg'>
        Click here to find out more about the author!
      </a>
    ),
  },
  { id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41lkouDhm5L._SY354_BO1,204,203,200_.jpg',
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
    authorPage: (
      <a href='https://www.amazon.com/Eric-Carle/e/B00DVY7LO0/ref=aufs_dp_fta_dsk'>
        Click here to find out more about the author!
      </a>
    ),
  },
];
// using .map to iterate over the array to access the Book obj
//and the spread operator to spread out all the props in the book

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
// using props destructuring to access and render the properties listed above
const Book = ({img, title, author, authorPage}) => {
  //const { img, title, author, authorPage } = props;
  return (
    <article className='book'>
      <h1>{title.toUpperCase()}</h1>
      <img src={img} />
      <div>{author}</div>
      <p>{authorPage}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
