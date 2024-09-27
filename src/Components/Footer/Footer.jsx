

const Footer = () => {
  return (
    <>
  {/* footer  */}
  <footer className="bg-[#3e2723]  text-gray-600 py-8">
    <div className="max-w-7xl px-2 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
        {/* About Us */}
        <div>
          <h3 className="text-[#ffcc80] font-bold mb-4">About Us</h3>
          <p className="text-[#ffcc80] mb-4">
          Dedicated to providing top-quality home repair 
          and maintenance services, we combine expertise 
          with a commitment to customer satisfaction. 
          
          </p>
        </div>

        {/* Support */}
        <div className="lg:pl-20 ">
          <h3 className="text-[#ffcc80] font-bold mb-4 ">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#ffcc80] hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-[#ffcc80] hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#ffcc80] hover:underline">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="text-[#ffcc80] hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        {/* Contact Us */}
        <div>
          <h3 className="text-[#ffcc80] font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex text-[#ffcc80] items-center">
              <i className="fas fa-phone mr-2" /> +1234 567 8900
            </li>
            <li className="flex text-[#ffcc80] items-center">
              <i className="fas fa-envelope mr-2" /> knowmore@mail.com
            </li>
            <a href="#" className="text-[#ffcc80] hover:text-gray-900 text-3xl">
              <i className="fa-brands fa-square-whatsapp mr-2" />
            </a>
            <a href="#" className="text-[#ffcc80] hover:text-gray-900 text-3xl">
              <i className="fa-brands fa-square-x-twitter mr-2" />
            </a>
            <a href="#" className="text-[#ffcc80] hover:text-gray-900 text-3xl">
              <i className="fa-brands fa-square-instagram mr-2" />
            </a>
            <a href="#" className="text-[#ffcc80] hover:text-gray-900 text-3xl">
              <i className="fa-brands fa-linkedin mr-2" />
            </a>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-4 text-center">
        <p className="text-sm text-[#ffcc80]">
          © 2024 Handyman. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</>


  )
}

export default Footer;