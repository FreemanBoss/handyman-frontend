import { useEffect, useRef } from 'react';
import AboutUs from '../Components/aboutus.component';
import '../index.css';

const AboutUsPage = () => {
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-slide-up');
      } else {
        entry.target.classList.remove('fade-in-slide-up');
      }
    });
  }, observerOptions);

  const currentHeroTitleRef = heroTitleRef.current;
  const currentHeroTextRef = heroTextRef.current;

  if (currentHeroTitleRef) {
    observer.observe(currentHeroTitleRef);
  }
  if (currentHeroTextRef) {
    observer.observe(currentHeroTextRef);
  }

  return () => {
    if (currentHeroTitleRef) {
      observer.unobserve(currentHeroTitleRef);
    }
    if (currentHeroTextRef) {
      observer.unobserve(currentHeroTextRef);
    }
  };
}, []);


  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center fade-in-slow"
        style={{ backgroundImage: 'url(/images/clean.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1
            ref={heroTitleRef}
            className="text-5xl font-bold"
          >
            About Our Journey
          </h1>
          <p
            ref={heroTextRef}
            className="mt-4 text-lg max-w-2xl"
          >
            Our story is one of dedication, passion, and delivering excellence. We strive to create meaningful impacts with everything we do.
          </p>
        </div>
      </section>

      {/* About Us Component */}
      <AboutUs />

      {/* Our Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-800 fade-in">Our Values</h2>
          <p className="mt-4 text-gray-600 fade-in delay-100">
            Our values guide us in every decision we make, and we always aim to exceed client expectations.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow hover:shadow-lg transition-shadow duration-300 slide-in-up delay-200">
              <h3 className="text-2xl font-semibold text-gray-800">Integrity</h3>
              <p className="mt-3 text-gray-600">
                We believe in honest communication and transparent work processes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow hover:shadow-lg transition-shadow duration-300 slide-in-up delay-300">
              <h3 className="text-2xl font-semibold text-gray-800">Quality</h3>
              <p className="mt-3 text-gray-600">
                Every project is handled with great attention to detail and precision.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow hover:shadow-lg transition-shadow duration-300 slide-in-up delay-400">
              <h3 className="text-2xl font-semibold text-gray-800">Innovation</h3>
              <p className="mt-3 text-gray-600">
                We are committed to delivering modern, cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;

