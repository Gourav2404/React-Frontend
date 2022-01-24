import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const firstBook = {
  img : 'https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg',
  title : 'The Power of Your Subconscious Mind',
  author : 'Joseph Murphy'  
}

const secondBook = {
  img : 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg',
  title : 'The Psychology of Money',
  author : 'Morgan Housel ' 
}

const ThirdBook = {
  img : 'https://m.media-amazon.com/images/I/81tSFxicufL._AC_UY218_.jpg',
  title : '400 Days',
  author : 'Chetan Bhagat' 
}

const FourthBook = {
  img : 'https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY218_.jpg',
  title : 'As a Man Thinketh',
  author : 'James Allen' 
}

const FifthBook = {
  img : 'https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_UY218_.jpg',
  title : 'The Monk Who Sold His Ferrari',
  author : 'Robin Sharma' 
}

const SixthBook = {
  img : 'https://m.media-amazon.com/images/I/813uPMOnskL._AC_UY218_.jpg',
  title : 'You Can',
  author : 'George Matthew Adams' 
}

function BookList () {  
  return <section className='booklist'>
    <Book img={firstBook.img} title = {firstBook.title} author = {firstBook.author}>
      <p>Ex sunt sit ea proident magna labore 
        magna aliqua voluptate aliquip eu 
        esse nisi adipisicing. 
        Officia non est minim commodo consectetur 
        nulla proident anim deserunt tempor minim 
        labore occaecat ipsum. Tempor consequat et 
        fugiat sit deserunt dolore ea. Lorem enim 
        eiusmod aute et esse do non proident laboris 
        non laboris proident
      </p>
    </Book>
    <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author}/>
    <Book img = {ThirdBook.img} title = {ThirdBook.title} author = {ThirdBook.author}/>
    <Book img = {FourthBook.img} title = {FourthBook.title} author = {FourthBook.author}/>
    <Book img = {FifthBook.img} title = {FifthBook.title} author = {FifthBook.author}/>
    <Book img = {SixthBook.img} title = {SixthBook.title} author = {SixthBook.author}/>
    
  </section>
}

const Book = (props) => {
  const {img , title , author , children} = props
  return( 
    <artical className="book">
      <img src={img} alt='book img'/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* {props.children}; */}
      {children}
    </artical>
  );
}

ReactDOM.render(<BookList/>, document.getElementById('root') ); 