import React, { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // const handleDelete = (id) => {
  //   const newArray = blogs.filter((element) => element.id !== id);
  //   setBlogs(newArray);
  // };

  // Cette function est lance a chaque fois que le composant est rendu / ou a chaque changement d'etat
  // le [] fait en sorte que le useEffect se comporte comme un InitState en flutter
  // Si un element est passe dans []=>[name] , useEffect est appele uniquement quand name est mis a jour uniquement
  useEffect(() => {
    // Fetch Data from json server
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("This is data response : " + data);
        setBlogs(data);
      });
    console.log("Use effect run");
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList data={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
