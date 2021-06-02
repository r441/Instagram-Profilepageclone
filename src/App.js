import React, { useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Data from "./data.json";
import "./sass/Main.scss";

function App() {
  // const [posts, setPosts] = useState(Data);

  return (
    <div className="body-container">
      {
        // <Gallery posts={posts} />
      }
      <Header />
      <Hero Data={Data} />
      <Gallery Data={Data} />
    </div>
  );
}

export default App;
