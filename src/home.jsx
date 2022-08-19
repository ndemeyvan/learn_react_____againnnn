import React, { useState } from "react";
import BlogList from "./blogList";


const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Title 1", body: "Body 1", author: "Author 1", id: 1 },
    { title: "Title 2", body: "Body 2", author: "Author 2", id: 2 },
    { title: "Title 3", body: "Body 3", author: "Author 3", id: 3 },
    { title: "Title 4", body: "Body 4", author: "Author 4", id: 4 },
  ]);

// const [name,setName] = useState('Mario');

//   const handleClick = (name, e) => {
//     setName('Luigi');
//     console.log(`Hello ${name}`);
//     console.log(e.target);
//   };

  return (
    <div className="home">
       <BlogList data={blogs} title={'All Blogs'}/>
      {/* <p>{name}</p>
      <button 
        onClick={(e) => {
          handleClick("Ndeme Yvan", e);
        }}
      >
        Click me
      </button> */}
    </div>
  );
};

export default Home;
