import React from'react'
import ReactDom from 'react-dom'
//CSS
import './index.css'
//setup vars
const books = [
{ id: 1,
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wRjbln9eL._AC_UL200_SR200,200_.jpg',
  title: 'Light of the Jedi',
  author: 'Luke Skywalker'
},
{ id: 2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg',
  title: 'Build better brain',
  author: 'Sanjay Gupta DR'
},
{ id:3,
  img: 'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg',
  title: 'Atomic Habits',
  author: 'James Clear'
}
];



function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const {img, title,author} = book;
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>

  );
}

//before refactoring
// function BookList(){
//   return (
//     <section className='booklist'>
//       <Book img={firstBook.img} 
//             title={firstBook.title}
//             author={firstBook.author}
//       >
     
//       </Book>
//       <Book img={secondBook.img} 
//             title={secondBook.title}
//             author={secondBook.author}/>
//     </section>
//   );
// };


//(props) = ({img, title, author}) is another way to declare props

const Book = (props) => {
  const {img, title, author} = props;
  return (
  <article className='book'>
    <img src={img} alt=''/>
      <h1>{title}</h1>
      <h4>{author}</h4>
     
  </article>
  );
};



ReactDom.render(<BookList />, document.getElementById('root'));

