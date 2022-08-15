import React from 'react';
import ReactDom from 'react-dom';

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
};

// Book Component is the main component we will use to next the others within

const Book = () => {
  return (
    <article>
      <Title></Title>
      <Image></Image>
      <Author></Author>
      <Purchase></Purchase>
    </article>
  );
};

// Image Component 
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL210_SR195,210_.jpg'
    alt='Atomic Habits Book'
  />
);

// Title Component
const Title = () => (
  <div>
    <h2>Atomic Habits</h2>
    <h4>And how to achieve them</h4>
  </div>
);

// Author Component 
const Author = () => (
  <div>
    <h4>
        { <a href='https://www.amazon.com/James-Clear/e/B07DJTJC3X/ref=dp_byline_cont_book_1'>James Clear </a>}
    </h4>
  </div>
);

// Purchasing Component

const Purchase = () => (
  <div>
    <p>
      Go
       <a href='https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=zg_sccl_2/141-8877677-1519101?pd_rd_w=FGBNb&content-id=amzn1.sym.193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_p=193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_r=05Y9JTEH6A2WHZGD1KVQ&pd_rd_wg=CfgSJ&pd_rd_r=786010b7-955c-44c5-a0ce-197b7a6cf9eb&pd_rd_i=0735211299&psc=1'> here </a>
      to buy a copy now!
    </p>
  </div>
);

ReactDom.render(<BookList />, document.getElementById('root'));
