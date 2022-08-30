/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDom from 'react-dom';

// css relative path file
import './index.css';

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL210_SR195,210_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
    authorPage: (
      <a href='https://www.amazon.com/James-Clear/e/B07DJTJC3X/ref=dp_byline_cont_pop_book_1'>
        Click here to find out more about the author!
      </a>
    ),
  }
  ,
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51hb6+asUeL._SX321_BO1,204,203,200_.jpg',
    title: 'Unaccustomed Earth',
    author: 'Jhumpa Lahiri',
    authorPage: (
      <a href='https://m.media-amazon.com/images/I/91-p01XE3PL._AC_UL640_FMwebp_QL65_.jpg'>
        Click here to find out more about the author!
      </a>
    ),
  }
  ,
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41SGvgCtOoL._SX330_BO1,204,203,200_.jpg',
    title: 'The Namesake',
    author: 'Jhumpa Lahiri',
    authorPage: (
      <a href='https://m.media-amazon.com/images/I/91-p01XE3PL._AC_UL640_FMwebp_QL65_.jpg'>
        Click here to find out more about the author!
      </a>
    ),
  }
  ,
  {
    img: 'https://m.media-amazon.com/images/I/51anXfZ6NAL.jpg',
    title: 'Whereabouts: A novel',
    author: 'Jhumpa Lahiri',
    authorPage: (
      <a href='https://m.media-amazon.com/images/I/91-p01XE3PL._AC_UL640_FMwebp_QL65_.jpg'>
        Click here to find out more about the author!
      </a>
    ),
  }
  ,
  {
    img: 'https://m.media-amazon.com/images/I/51dWTylZVFS.jpg',
    title: 'Entitled: A Novel',
    author: 'Cookie Boyle',
    authorPage: (
      <a href='https://www.amazon.com/Cookie-Boyle/e/B08P3QTSQ5/ref=aufs_dp_fta_dsk'>
        Click here to find out more about the author!
      </a>
    ),
  }
  ,
];

const names = ['john', 'peter', 'susan'];

function BookList() {
  return <section className= {names}></section>;
}

// using props to access and render the properties listed above used for firstBook and thirdBook
const Book = (props) => {
  return (
    <article className='book'>
      <h1>{props.title.toUpperCase()}</h1>
      <img src={props.img} />
      <div>{props.author}</div>
      <p>{props.authorPage}</p>
    </article>
  );
};

// alternate way of object destructuring used for secondBook and fourthBook
const BookTwo = (props) => {
  const { title, img, author, authorPage } = props;
  return (
    <article className='book'>
      <h1>{title.toUpperCase()}</h1>
      <img src={img} alt='' />
      <div>{author}</div>
      <p>{authorPage}</p>
    </article>
  );
};

// alternate way to use object destructuring used for fifthBook


ReactDom.render(<BookList />, document.getElementById('root'));
