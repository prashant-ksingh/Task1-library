import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import './index.css'


const books=[
{
    id: 1,
    img : "https://m.media-amazon.com/images/I/51oOobVQpkS._AC_UY218_.jpg",
    title: "Ikigai",
    author: "Hector Garcia",
},
{
    id:2,
    img : "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho"
},
{
    id:3,
    img: "https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY218_.jpg",
    title: "The Man Thinketh",
    author: "James Allen"
},
{
    id:4,
    img: "https://m.media-amazon.com/images/I/71gpkRk86eS._AC_UY218_.jpg",
    title: "Think And Grow Rich",
    author: "Nepolian Hill"
},
{
    id:5,
    img: "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg",
    title: "The Power Of Subconcious Mind",
    author: "Joseph Murphy"
},
{
    id:6,
    img: "https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY218_.jpg",
    title: "Life Amazing Secret",
    author: "Gaur Gopal Das"
}
]

function BookList(){
    return(
        <section className="booklist">
            {books.map((book)=>{
                return <Book  key={book.id} {...book} ></Book>
            })}
        </section>
    )
}

const Book =({img,title,author})=>{


    const clickHandler = (e)=>{
        
        console.log("Marked Favourite");
    }

    const complexExample= ()=>{
        console.log("this is detail of book");
    }

    return(
        <article className="book">
          <img src={img} alt="" />
          <h1>{title}</h1>
          <h4>{author}</h4>
          <button onClick={clickHandler}>Mark Favourite</button>
          <button onClick={()=>complexExample()}>Details</button>
        </article>
    )
}





ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>)