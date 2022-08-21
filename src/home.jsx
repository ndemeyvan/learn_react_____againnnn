import React from "react";
import BlogList from "./blogList";
import useGetFecth from "./useGetFecth";

const Home = () => {
  const { isLoading, data:blogs, error } = useGetFecth("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newArray = blogs.filter((element) => element.id !== id);
  //   setBlogs(newArray);
  // };

  // Cette function est lance a chaque fois que le composant est rendu / ou a chaque changement d'etat
  // le [] fait en sorte que le useEffect se comporte comme un InitState en flutter
  // Si un element est passe dans []=>[name] , useEffect est appele uniquement quand name est mis a jour uniquement

  return (
    <div className="home">
      {/* Quand la gauche est vrai affiche la droite et quand c'est faux n'affiche rien */}
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList data={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
