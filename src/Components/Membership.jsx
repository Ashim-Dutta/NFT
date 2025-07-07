import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: 'Monthly',
    price: '$9.99',
    desc: 'Regular monthly payment',
    bg: 'bg-white',
    text: 'text-black',
  },
  {
    title: 'Quarterly',
    price: '$12.99',
    desc: 'Regular monthly payment',
    bg: 'bg-orange-500',
    text: 'text-white',
    badge: 'Popular',
  },
  {
    title: 'Annually',
    price: '$19.99',
    desc: 'Plus 15% off for 1 year',
    bg: 'bg-white',
    text: 'text-black',
  },
];

const Membership = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
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
    <div className="h-[80vh] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold text-black">Membership</h2>
          <p className="text-gray-700 text-lg max-w-md">
            Offering buyers a chance to own a piece of that narrative. This platform is where stories come alive through art.
          </p>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative w-[180px] h-[220px] rounded-2xl shadow-xl p-6 ${card.bg} ${card.text} flex flex-col justify-between opacity-0`}
              whileHover={{ scale: 1.05 }}
            >
              {card.badge && (
                <span className="absolute top-2 right-2 bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                  {card.badge}
                </span>
              )}
              <div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-3xl font-bold">{card.price}</p>
              </div>
              <p className="text-sm opacity-80">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;