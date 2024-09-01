import Hero from "../Components/Hero/Hero.jsx";
import Services from "../Components/Services/Services.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Feature from "../Components/Feature/feature.jsx";
import PricingTable from "../Components/PricingTable/PricingTable.jsx";
import Gallery from "../Components/Gallery/Gallery.jsx";
import Team from "../Components/Team/Team.jsx";
import Contact from "../Components/Contact/Contact.jsx";

const HomePage = () => {
  return (
    <>
   
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section>
        <Feature />
      </section>

      <section>
        <PricingTable />
      </section>

      <section>
        <Gallery />
      </section>

      <section>
        <Team />
      </section>

      <section>
        <Contact />
      </section>

      {/* <section id="footer">
        <Footer />
      </section> */}

      
    </>
  );
};

export default HomePage;
