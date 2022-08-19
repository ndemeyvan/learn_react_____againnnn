import React from "react";

const BlogList = ({title,data}) => {
 

  return (
    <div className="blog-list">
        <h2>{title}</h2>
      {data.map((item) => (
        <div className="blog-preview" key={item.id}>
          <h2>{item.title}</h2>
          <p>Written by {item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
