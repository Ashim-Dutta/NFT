import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <footer ref={footerRef} className="bg-stone-200 text-black px-8 py-12 font-sans mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Content */}
        <motion.div
          custom={0}
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Our platform, your art.</h2>
          <p className="text-sm leading-6 text-gray-600 max-w-sm">
            In the realm of Artnesia, creativity knows no bounds. This eternal marketplace celebrates the timeless nature of art.
          </p>
          <div className="flex gap-4 pt-2 text-xl text-gray-700">
            <FaTwitter className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaDribbble className="hover:text-black cursor-pointer" />
            <FaBehance className="hover:text-black cursor-pointer" />
          </div>
        </motion.div>

        {/* Middle Left */}
        <motion.div
          custom={1}
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="space-y-2 text-sm"
        >
          <h3 className="font-bold text-2xl">Get Started</h3>
          <p className="flex items-center gap-2">
            ● Create strategy <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full">New</span>
          </p>
          <p>Pricing</p>
          <p>Contact</p>
          <p>Solution</p>
          <p>E-Commerce</p>
        </motion.div>

        {/* Middle Right */}
        <motion.div
          custom={2}
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="space-y-2 text-sm"
        >
          <h3 className="font-bold text-2xl">Your Story</h3>
          <p>● Create Story</p>
          <p className="flex items-center gap-2">
            Sell fast <span className="bg-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded-full">Soon</span>
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          custom={3}
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          className="space-y-2 text-sm"
        >
          <h3 className="font-bold text-2xl">Privacy & Policy</h3>
          <p>Contact Us</p>
          <p className="flex items-center gap-2">
            Api <span className="bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full">New</span>
          </p>
          <p className="pt-6 text-xs text-gray-400">© 2025. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
