import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateBlog = () => {
  const [title, setTitle] = useState("My First title");
  const [body, setBody] = useState("My First body");
  const [author, setAuthor] = useState("Mario");
  //   Manual redirection
  const history = useHistory();
  //   request Data
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    // Cette Method sert a ce que l'ecran ne se recharge pas a la soumission du formulaire
    e.preventDefault();
    const newBlog = {
      title,
      body,
      author,
    };
    // Make post request
    setIsLoading(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newBlog),
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("Request Failed , please try again ...");
          }
          return res.json();
        })
        .then((data) => {
          console.log("new Blog add " + data);
          setIsLoading(false);
          history.push('/');
        })
        .catch((e) => {
          console.log("This is request error ", e.message);
          setIsLoading(false);
        });
    }, 1000);
  };

  return (
    <div className="create">
      <h2>Create a new Article </h2>

      <form onSubmit={handleFormSubmit}>
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Body */}
        <label>Blog body :</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {/* Author */}
        <label>Blog Author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {isLoading && <button>Loading</button>}
        {!isLoading && <button>Save new blog</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
