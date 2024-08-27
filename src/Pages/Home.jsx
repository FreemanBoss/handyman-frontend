import Hero from "../Components/Hero/Hero.jsx";
import Services from "../Components/Services/Services.jsx";
import Reviews from "../Components/Reviews/Reviews.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <>
   
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
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
