

const ContactForm = () => {
  return (
    <>
  {/* contact section */}
  <div className="flex w-full min-h-screen justify-center items-center">
    <div className="m-24 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-[#3e2723] w-full max-w-6xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
      <div className="flex flex-col space-y-8 justify-between md:w-1/2">
        <div>
          <h1 className="font-bold text-4xl tracking-wide">
            Get in Touch with Us
          </h1>
          <p className="pt-2 text-[#ffcc80] text-sm">
          Have questions or need assistance? We are here to help. 
          Reach out to us for any inquiries or to schedule a service. 
          Our team is ready to provide the support you need.
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="inline-flex space-x-2 items-center">
            <ion-icon name="call" className="text-[#ffcc80] text-xl" />
            <span>+(234) 567 8977</span>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <ion-icon name="mail" className="text-[#ffcc80] text-xl" />
            <span>example@gmail.com</span>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <ion-icon name="location" className="text-[#ffcc80] text-xl" />
            <span>22, street 444 abcd efg</span>
          </div>
        </div>
        <div className="flex space-x-4 text-lg">
          <a href="#">
            <ion-icon name="logo-facebook" className="text-[#ffcc80]" />
          </a>
          <a href="#">
            <ion-icon name="logo-twitter" className="text-[#ffcc80]" />
          </a>
          <a href="#">
            <ion-icon name="logo-linkedin" className="text-[#ffcc80]" />
          </a>
          <a href="#">
            <ion-icon name="logo-instagram" className="text-[#ffcc80]" />
          </a>
        </div>
      </div>
      {/* form section */}
      <div className="relative md:w-1/2">
        <div className="absolute z-10 w-40 h-40 bg-[#ffcc80] rounded-full -right-28 -top-28" />
        <div className="absolute z-10 w-40 h-40 bg-[#ffcc80] rounded-full -left-28 -bottom-16" />
        <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600">
          <form action="" className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-[#3e2723]">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-[#bca07d]"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-[#3e2723]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-[#bca07d]"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-[#3e2723]">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Leave us a message"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-[#bca07d]"
                defaultValue={""}
              />
            </div>
            <button className="inline-block self-end bg-[#3e2723] hover:bg-[#ffcc80] text-white hover:text-[#3e2723] font-bold rounded-lg px-6 py-2 uppercase text-sm transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default ContactForm;
