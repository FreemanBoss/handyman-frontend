

const Hero = ()=> {
  
  return(
  <>
  {/* Header Section */}
  <header className=" relative bg-[url('../../../images/Hero.jpg')] bg-cover bg-center h-screen">
    <div className="absolute inset-0 bg-black opacity-60" />
    {/* Darker overlay */}
    <div className=" header-text container mx-auto px-6 py-2 text-center relative top-1/2" data-aos='zoom-in'>
      <h1 className="text-4xl font-bold text-[#f4ece4]">
        Best Handyman Services
      </h1>
      {/* Light beige text */}
      <p className="mt-4 text-[#f4ece4]" >
      Reliable professionals for all your home repair and maintenance needs.
       </p>
      
      <button className=" header-button mt-6  bg-[#ffb74d] text-white px-6 py-3 rounded-full hover:bg-[#f57c00]">
  
        Learn More
      </button>
    </div>
  </header>
</>

  )
}

export default Hero