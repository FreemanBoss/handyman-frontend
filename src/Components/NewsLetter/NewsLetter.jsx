

const NewsLetter = () => {
  return (
    <section className="bg-[#4a2e29] text-white py-16">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
    <p className="text-lg mb-8">
      Stay updated with our latest news and offers. Enter your email below to
      subscribe!
    </p>
    <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-1/2 sm:w-auto px-4 py-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required=""
      />
      <button
        type="submit"
        className=" sm:w-auto px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition-colors duration-300"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

  )
}

export default NewsLetter
