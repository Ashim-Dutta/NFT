import React, { useEffect } from "react";
import { motion, useAnimation} from "framer-motion";
import CircularText from "./CircularText";

const HeroSection = () => {
  const cards = [
    { img: "https://i.pinimg.com/736x/52/7f/06/527f06aca25cfe1ff6100ff2990a1272.jpg", user: "@coplin", userColor: "bg-blue-500" },
    { img: "https://i.pinimg.com/736x/95/c3/9a/95c39a5948b5902c3571cd396668c20a.jpg" },
    { img: "https://i.pinimg.com/736x/1e/1d/f5/1e1df5de1a628d6d6f4d4a6ad8384a47.jpg" },
    { img: "https://i.pinimg.com/736x/69/e8/d5/69e8d5df3a7dda214399a3c7aa04e3c5.jpg" },
    { img: "https://i.pinimg.com/736x/91/e0/9f/91e09fc824c3937094bd16de8b7011bb.jpg" },
    { img: "https://i.pinimg.com/736x/6c/8d/f2/6c8df2167cbc70e419f378c944b2aa27.jpg", user: "@andrea", userColor: "bg-green-500" },
  ];

  const controls = useAnimation();
  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15 + 0.8,
        type: "spring",
        stiffness: 120,
      },
    }));
  }, [controls]);

  return (
    <div className="">
      
      <div className="min-h-screen  flex flex-col items-center px-4 sm:px-8 py-12 font-sans overflow-hidden">
      <header className="w-full max-w-7xl flex items-center justify-between mb-16 static top-0 bg-white shadow-lg px-6 py-4 rounded-lg z-10">
        <h1 className="text-lg font-bold text-black">Pallet Ross</h1>
        <nav className="hidden md:flex gap-6 text-black text-sm font-medium">
          <a href="#">Get Started</a>
          <a href="#">Create strategy</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">Solution</a>
          <a href="#">E-Commerce</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 text-center"><i className="ri-user-fill text-lg"></i></div>
          <div className="w-8 h-8 rounded-full bg-gray-200  text-center"><i className="text-lg ri-menu-line"></i></div>
        </div>
      </header>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-extrabold  text-center text-gray-900 leading-tight mb-12"
      >
        A place to display your<br />masterpiece.
      </motion.h1>

      <div className="relative w-full flex flex-wrap justify-center gap-4 mb-10" >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={(i) => ({ opacity: 0, y:100, scale: 0.6 })}
            animate={controls}
            whileHover={{ scale: [1, 1.5, 1] }}
            className="relative"
            style={{ transform: `translateX(${Math.sin(index) *10}px)`  }}
          >
            <img
              src={card.img}
              alt="art"
              className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-xl"
              style={{ transform: `rotate(${(index - cards.length / 2) * 5}deg)` }}
            />
            {card.user && (
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white rounded-full shadow-md ${card.userColor}`}
              >
                {card.user}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 2 }}
        className="text-gray-500 text-sm  font-bold text-center max-w-md">
        Artists can display their masterpieces, and buyers can discover and purchase art from talented creators.
        </motion.p>
        
        <CircularText
        text="DISPLAY*YOUR*MASTERPIECE*"
        onHover="speedUp"
         spinDuration={10}
          className="mr-8 mt-[-4vw]" />
        
        <motion.div
          
          className="flex flex-col sm:flex-row items-center justify-center gap-4 -mt-12">
          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            className="px-4 py-2 rounded-lg bg-black text-white  text-lg">Join for $9.99/m</motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-800 text-lg ml-4">Learn more</motion.button>
        </motion.div>
        

       
      </div>
      

   </div>
  );
};

export default HeroSection;