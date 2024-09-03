

const features = ()=> {
    return(
        <>
        
  {/* Feature Section */}
  <section className="bg-[#3e2723] text-[#f4ece4] py-16">
    
    {/* Dark brown background, light beige text */}
    <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
      <div className="md:w-1/2" data-aos="fade-right">
        <h2 className="text-4xl font-bold mb-4">
          We Provide the Guaranteed Quality in Repairing
        </h2>
        <p className="text-[#d7ccc8] mb-8">
          
          {/* Lighter beige for secondary text */}
          At HandyMan, we take pride in delivering exceptional
          repair services. Our team of skilled professionals ensures 
          that every job is done to perfection, 
          no matter how big or small. Whether it is fixing a leak 
          or revamping a room, you can trust us to get it right the first time.
        </p>
        <div className="space-y-4">
          <a href="#" className="block text-[#ffb74d]">
            Have a specific repair need?
          </a>
          <a href="#" className="block text-[#ffb74d]">
          Our experts are ready to help!
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
        <div className="relative">
          <img
            src="../src/assets/images/plumbing-professional.jpg"
            alt="Repair Worker"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 bg-[#ffb74d] text-[#3e2723] font-bold p-4 rounded-r-lg">
            
            {/* Bright orange label */}
            <span>290+</span> Projects Done
          </div>
          <div className="absolute bottom-0 right-0 bg-[#f57c00] text-white font-bold p-4 rounded-l-lg">
            
            {/* Darker orange label */}
            <span>34</span> Branches
          </div>
        </div>
      </div>
    </div>
  </section>
</>
    )
}

export default features;