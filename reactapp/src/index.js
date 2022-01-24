import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {books} from './books'
import SpecificBook from './Book'
import {greeting} from './testing/testing'

function BookList () {  
  console.log(greeting);
  return( 
  <section className='booklist'>
    {books.map((book) => {
      return (
        <SpecificBook key = {book.id} {...book}></SpecificBook>
      );
    })}
  </section>
  )
};

ReactDOM.render(<BookList/>, document.getElementById('root') ); 