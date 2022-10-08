import React, { useEffect } from "react";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import Contact from "./Contact";

import "../../Assets/Styles/Home/Landing.scss";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="home-container">
        
         <Contact />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
      </div>
    </>
  );
}

export default Home;
