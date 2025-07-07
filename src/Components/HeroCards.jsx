import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroCards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full h-full">
        <motion.div
          ref={(el) => (cardRefs.current[0] = el)}
          className="relative rounded-3xl overflow-hidden bg-[#E21749] text-white p-8 h-[480px] flex flex-col justify-end shadow-2xl"
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="https://i.pinimg.com/736x/58/29/c0/5829c01dfbdc6e159b82d2f821aeffb8.jpg"
            alt="Model"
            className="absolute inset-0 w-full h-full object-cover object-top  z-0"
          />
          <div className="relative z-10 bg-black/30 p-6 rounded-xl backdrop-blur-sm">
            <p className="text-lg">Meets</p>
            <h2 className="text-3xl font-extrabold">new people</h2>
            <p className="text-sm mt-2">
              Creators and enthusiasts to share, discover, and purchase unique artworks.
            </p>
            <button className="mt-4 px-4 py-2 text-sm bg-white text-black rounded-full font-medium shadow-md">
              Let’s Meet
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={(el) => (cardRefs.current[1] = el)}
          className="relative rounded-3xl overflow-hidden bg-white text-black p-8 h-[480px] flex flex-col justify-end shadow-2xl"
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="https://i.pinimg.com/236x/e7/40/81/e74081ba0eb07c7ccd8b8e6dfe513589.jpg"
            alt="Flower"
            className="absolute inset-0  w-full h-full object-cover object-top scale-80  z-0"
          />
          <div className="relative z-10 bg-white/80 p-6 rounded-xl backdrop-blur-sm">
            <h2 className="text-3xl font-extrabold">Archive of new arts</h2>
            <p className="text-sm mt-2">
              Canvas Carousel is the platform where artists can ride the wave of creativity,
              showcasing their work to a broad audience.
            </p>
            <button className="mt-4 px-4 py-2 text-sm bg-black text-white rounded-full font-medium shadow-md">
              Archives
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroCards;