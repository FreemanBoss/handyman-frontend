
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
  {/* Contact Section */}
  <div className="mt-16 bg-[#3e2723]  text-white py-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
      <div data-aos='fade-right'>
        <h2 className="text-sm font-semibold uppercase tracking-wide">
          Get In Touch
        </h2>
        <h3 className="mt-2 text-3xl font-bold">
          Our Team Is Ready and Always Available
        </h3>

        <Link to="/contactform">
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
          Contact Us
        </button>
        </Link>
      </div>
      <img
        className="w-full h-64 object-cover"
        src="../../../images/cleaning1.jpg"
        alt="Technician at Work"
        data-aos='fade-left'
      />
    </div>
  </div>
</>

  )
}

export default Contact;
