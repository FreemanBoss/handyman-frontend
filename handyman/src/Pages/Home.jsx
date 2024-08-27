import React from "react";
import Navbar from "../Components/Navbar/Nav.jsx";
import Hero from "../Components/Hero/Hero.jsx";
import Services from "../Components/Services/Services.jsx";
import Reviews from "../Components/Reviews/Reviews.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Title from "../Components/Title/Title.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>


      <section id="services" className="container">
      <Title  subtitle="Book our craftsmen for various services" title="Our Services"/>
        <Services />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
