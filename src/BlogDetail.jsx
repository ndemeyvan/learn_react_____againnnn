import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useGetFecth from "./useGetFecth";

const BlogDetail = () => {

  const { id } = useParams();
  const {
    isLoading,
    data: blog,
    error,
  } = useGetFecth("http://localhost:8000/blogs/" + id);

  const handleDelete = (id) => {};

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
