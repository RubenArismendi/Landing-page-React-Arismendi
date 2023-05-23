import React from "react";
import { Navbar } from "../navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "../cards.jsx";
import { Footer } from "../footer.jsx";

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="row">
          <Navbar />
          <Jumbotron />
          <Cards />
          <Cards/>
          <Cards/>
          <Cards/>
          <Footer/>
        </div>
    </div>
    </>
  );
};

export default Home;
