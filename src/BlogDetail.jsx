import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useGetFecth from "./useGetFecth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetail = () => {
  const [isDeleteLoading, setisDeleteLoading] = useState(false);
  //   Manual redirection
  const history = useHistory();

  const { id } = useParams();
  const {
    isLoading,
    data: blog,
    error,
  } = useGetFecth("http://localhost:8000/blogs/" + id);

  const handleDelete = (id) => {
    setisDeleteLoading(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("Request Failed , please try again ...");
          }
          return res.json();
        })
        .then((data) => {
          console.log("new Blog add " + data);
          setisDeleteLoading(false);
          history.push("/");
        })
        .catch((e) => {
          console.log("This is request error ", e.message);
          setisDeleteLoading(false);
        });
    }, 1000);
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>{blog.body}</p>
          {isDeleteLoading && <button>Deleting ... </button>}
          {!isDeleteLoading && (
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
