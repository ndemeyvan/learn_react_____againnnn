import React, { useState , useEffect  } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Title 1", body: "Body 1", author: "Ndeme", id: 1 },
    { title: "Title 2", body: "Body 2", author: "Larry", id: 2 },
    { title: "Title 3", body: "Body 3", author: "Akah", id: 3 },
    { title: "Title 4", body: "Body 4", author: "Ndeme", id: 4 },
  ]);

  const handleDelete = (id) => {
    const newArray = blogs.filter((element) => element.id !== id);
    setBlogs(newArray);
  };

  // Cette function est lance a chaque fois que le composant est rendu / ou a chaque changement d'etat
  // le [] fait en sorte que le useEffect se comporte comme un InitState en flutter
  // Si un element est passe dans []=>[name] , useEffect est appele uniquement quand name est mis a jour uniquement
  useEffect(()=>{
    console.log('Use effect run');
  },[])

  return (
    <div className="home">
      <BlogList data={blogs} title={"All Blogs"} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
