import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({title,data}) => {

 

  const handleNavigation=(id)=>{

  };

  return (
    <div className="blog-list">
        <h2>{title}</h2>
      {data.map((item) => (
        <div className="blog-preview" key={item.id} onClick={(id)=>handleNavigation(id)}>
          <Link to={'blogs/'+item.id}>
          <h2>{item.title}</h2>
          <p>Written by {item.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
