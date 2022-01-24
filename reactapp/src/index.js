import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function BookList () {
  return <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
}

const Book = () => {
  return( 
    <artical className="book">
      <Image/>
      <Title/>
      <Author/>
    </artical>
  );
}

const Image = () => (
  <img 
    src='https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg'
    alt=''
  />
  
);

const Title = () => <h1>The Power of Your Subconscious Mind</h1>;

const Author = () => <h4>Joseph Murphy </h4>;

ReactDOM.render(<BookList/>, document.getElementById('root') );