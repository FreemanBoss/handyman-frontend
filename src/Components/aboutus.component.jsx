import { useEffect, useRef } from 'react';
import '../index.css';

const AboutUs = () => {
  const cardRefs = useRef([]);

useEffect(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1, 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scale-up');
      } else {
        entry.target.classList.remove('scale-up');
      }
    });
  }, observerOptions);


  const currentCardRefs = cardRefs.current;

  currentCardRefs.forEach((card) => {
    if (card) {
      observer.observe(card);
    }
  });

  return () => {
    currentCardRefs.forEach((card) => {
      if (card) {
        observer.unobserve(card);
      }
    });
  };
}, []);


  return (
    <div className="bg-gray-100 py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 fade-in">About Us</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto fade-in-delay">
          We are a team of passionate professionals, committed to delivering high-quality services while ensuring customer satisfaction at every step.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="bg-white rounded-lg shadow-md p-8 text-center card"
        >
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="/images/avata.png"
            alt="Team Member 1"
          />
          <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
          <p className="text-gray-500">Founder & CEO</p>
          <p className="mt-3 text-gray-600">
            With over 10 years of experience, John ensures that everything is executed to perfection.
          </p>
        </div>

        {/* Team Member 2 */}
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="bg-white rounded-lg shadow-md p-8 text-center card"
        >
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="/images/avata.png"
            alt="Team Member 2"
          />
          <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
          <p className="text-gray-500">Operations Manager</p>
          <p className="mt-3 text-gray-600">
            Jane is committed to operational excellence and client satisfaction.
          </p>
        </div>

        {/* Team Member 3 */}
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="bg-white rounded-lg shadow-md p-8 text-center card"
        >
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="/images/avata.png"
            alt="Team Member 3"
          />
          <h3 className="text-xl font-semibold text-gray-800">Alex Johnson</h3>
          <p className="text-gray-500">Lead Developer</p>
          <p className="mt-3 text-gray-600">
            Alex ensures innovation and technical quality in all our projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
