import React from 'react'

const PricingTable = () => {
  return (
    <>
  {/* Pricing Table Section */}
  <section className="bg-[#f4ece4] py-16">
    {" "}
    {/* Seabreeze background for section */}
    <div className="container mx-auto px-6">
      <h3 className="text-3xl font-bold text-center text-[#3e2723] mb-8">
        Affordable Prices
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full sm:w-1/3 bg-[#3e2723] p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-bold mb-4 text-[#ffcc80]">Basic Pack</h4>
          <p className="text-[#ffcc80] mb-6">
            Duis aute irure dolor in reprehenderit.
          </p>
          <div className="text-3xl font-bold text-[#ffcc80] mb-6">
            $39<span className="text-base text-white-700">/mo</span>
          </div>
          <button className="bg-[#3e2723] text-white px-6 py-3 rounded-full hover:bg-[#ffcc80]">
            Buy Now
          </button>{" "}
          {/* Darker shade on hover */}
        </div>
        <div className="w-full sm:w-1/3 bg-[#3e2723] p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-bold mb-4 text-[#ffcc80]">
            Extended Pack
          </h4>
          <p className="text-[#ffcc80] mb-6">
            Duis aute irure dolor in reprehenderit.
          </p>
          <div className="text-3xl font-bold text-[#ffcc80] mb-6">
            $49<span className="text-base text-white-700">/mo</span>
          </div>
          <button className="bg-[#3e2723] text-white px-6 py-3 rounded-full hover:bg-[#ffcc80]">
            Buy Now
          </button>{" "}
          {/* Darker shade on hover */}
        </div>
        <div className="w-full sm:w-1/3 bg-[#3e2723] p-6 rounded-lg shadow-lg">
          <h4 className="text-[#ffcc80]-2x1 font-bold mb-4 text-[#ffcc80]">
            Premium Pack
          </h4>
          <p className="text-[#ffcc80] mb-6">Affordable Prices</p>
          <ul className="space-y-4 text-[#ffcc80]">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-[#ffcc80] mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>{" "}
              Duis aute irure dolor.
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-[#ffcc80] mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>{" "}
              Nemo enim ipsam.
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-[#ffcc80] mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>{" "}
              Accusantium doloremque.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default PricingTable
