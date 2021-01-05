import React from'react'
import ReactDom from 'react-dom'


function BookList(){
  return (
    <section>
      <Book />
    </section>
  );
};

const Book = () => {
  return (<article>
    <Image></Image>
    <Title />
    <Author />
  </article>
  );
};

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71Ctz4sO6KL._AC_UL200_SR200,200_.jpg" alt="pic"/>

const Title = () => <h1>Keep Sharp</h1>;

const Author = () => <h4>Sanjay Gupta Dr</h4>

ReactDom.render(<BookList />, document.getElementById('root'));

