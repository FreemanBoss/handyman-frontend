

const Services = () => {
  return (
    <>
  {/* Services Section */}
  <section className="py-20 bg-[#f4ece4]">
    {/* Light beige background */}
    <div className="container mx-auto px-6">
      <h2 className="text-center text-3xl font-bold text-[#3e2723]">
  
        {/* Dark brown text */}
        We Are The Number One Repair Service Provider
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <div className="w-full sm:w-1/3 p-4" data-aos="fade-up" data-aos-duration={1000} >
          <img src="../../../images/clean.jpg" alt="Cleaning Services" className="w-full h-auto rounded-lg" />
          <h3 className="mt-4 text-center text-xl font-semibold text-[#3e2723]">
            Cleaning Services
          </h3>
        </div>

        <div className="w-full sm:w-1/3 p-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" >
          <img
            src="../../../images/AirConditioning.jpg"
            alt="Air Conditioning"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="mt-4 text-center text-xl font-semibold text-[#3e2723]">
            Air Conditioning
          </h3>
        </div>

        <div
          className="w-full sm:w-1/3 p-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img
            src="../../../images/plumbing.jpg"
            alt="Plumbing Services"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="mt-4 text-center text-xl font-semibold text-[#3e2723]">
            Plumbing Services
          </h3>
        </div>
        
      </div>
      <div className="mt-8 text-center">
        <button className="bg-[#ffb74d] text-white px-6 py-3 rounded-full hover:bg-[#f57c00]">
          Request a Quote
        </button>
      </div>
    </div>
  </section>
</>

  )
}
export default Services;