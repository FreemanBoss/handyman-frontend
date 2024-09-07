import Hero from "../Components/Hero/Hero.jsx";
import Services from "../Components/Services/Services.jsx";
import Feature from "../Components/Feature/feature.jsx";
import PricingTable from "../Components/PricingTable/PricingTable.jsx";
import Gallery from "../Components/Gallery/Gallery.jsx";
import Team from "../Components/Team/Team.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import Testimonial from "../Components/Testimonial/Testimonial.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";


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
        <Testimonial />
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

      {/* <div className="py-20"></div> */}

      <section>
        <NewsLetter />
      </section>

      {/* Added footer to App.jsx file so it'll be visible on all pages */}
    </>
  );
};

export default HomePage;
