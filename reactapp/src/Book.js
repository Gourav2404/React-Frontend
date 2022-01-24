import React from 'react';

const Book = ({img , title , author , /*children*/}) => {
    const clickHandler = (e) => {
        alert('hello world');
        console.log(e);
        console.log(e.target);
        }

    const complexExample = (author) => {
        console.log(author);
    }
    return( 
        <article className="book" onMouseOver={() => {
        console.log(title);
        }}>
            <img src={img} alt='book img'/>
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            {/* {props.children}; */}
            {/* {children} */}
        <button type='button' onClick={clickHandler}>referance example</button>
        <button type='button' onClick={() => complexExample(author)}>more complex exmple</button>
        </article>
    );
}

export default Book;
