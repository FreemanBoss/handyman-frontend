
import Customer from '../../assets/images/team.jpg'

const Testimonial = () => {
  return (
    <>
  {/* TESTIMONIAL SECTION */}
  <section className="bg-[#3e2723] py-16">
    {/* Dark brown */}
    <div className="bg-[#3e2723] text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-sm font-semibold tracking-wide uppercase">
          Testimonial
        </h2>
        <h3 className="mt-2 text-3xl font-bold tracking-tight">
          What Our Clients Say About Our Services
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed">
        I could not be happier with the service! The team was professional, 
        on time, and did an excellent job repairing my leaky roof. 
        They explained everything clearly and worked efficiently. 
        I will definitely be using their services again!
        </p>
        <div className="mt-6 flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full"
            src={Customer}
            alt="Customer"
          />
          <p className="mt-4 text-lg font-medium">Rene Harmon</p>
          <p className="text-sm">Satisfied Customer</p>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Testimonial
