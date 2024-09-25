

const NotFoundPage = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col justify-between p-8">
      <header className="text-left">
        <h3 className="absolute text-lg top-5 left-8">404 not found</h3>
      </header>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 w-full">
          <img
            src="Scarecrow.png"
            alt="a scarecrow showing error 404"
            className="w-full h-auto animate-bounce"
          />
        </div>
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            I have bad news for you
          </h2>
          <p className="text-xl lg:text-2xl mb-6">
            The page you are looking for might be removed or is temporarily
            unavailable.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            BACK TO HOMEPAGE
          </button>
        </div>
      </div>
      <footer className="text-center mt-8">
        <p className="text-sm">
          created by Abdulmuheez QAZEEM - devChallenges.io
        </p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
