import React, { useState } from "react";


const Home = () => {
    const [name,setName] = useState('Mario');

  const handleClick = (name, e) => {
    setName('Luigi');
    console.log(`Hello ${name}`);
    console.log(e.target);
  };


  return (
    <div className="home">
      <h2>Home content</h2>
     <p>{name}</p>
      <button
        onClick={(e) => {
          handleClick("Ndeme Yvan", e);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
