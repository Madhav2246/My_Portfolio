import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Home = () => {
  React.useEffect(() => {
    gsap.from(".intro-text", { y: 50, opacity: 0, duration: 1 });
  }, []);

  return (
    <section className="bg-gray-800 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 intro-text">Hi, I'm Madhav</h1>
        <p className="text-xl mb-8 intro-text">
          AI Enthusiast | Innovator | Future Engineer
        </p>
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-400 transition"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Home;
