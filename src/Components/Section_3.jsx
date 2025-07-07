import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Section_3 = () => {
  const imgRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
    );
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="max-h-[100vh]  flex flex-col justify-start p-10 font-[Inter]">
      {/* Top Label */}
      <div className="text-xs  uppercase tracking-widest text-gray-500 mb-3 ">
        CLASS BY REATHA C. PHELAN
      </div>

      <h2
        ref={headingRef}
        className="sm:text-7xl font-bold text-black text-start leading-tight mb-8"
      >
        Gateway to <br/>
        artist people.
      </h2>

      {/* Tag bubble */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute top-12 right-10 bg-black text-white px-4 py-1 rounded-full text-sm shadow-lg"
      >
        @ashim
      </motion.div>

      {/* Image Section */}
      <div
        ref={imgRef}
        className="relative w-[70%] mx-auto aspect-[3/2] bg-orange-400 rounded-3xl overflow-hidden shadow-xl"
      >
        {/* Left buttons */}
        <div className="absolute z-[10] top-6 left-6 flex flex-col gap-2">
   
          <h1 className="text-3xl">Peekaboo</h1>
        </div>

        {/* Bottom left Watch button */}
        <button className="absolute z-[10] bottom-6 left-6 bg-white text-black px-4 py-1 rounded-full text-sm font-semibold shadow-md">
          Watch
        </button>


        {/* Image */}
        <img
          src="https://i.pinimg.com/736x/d9/47/28/d947284495415f06b60d5c9aa96e9927.jpg"
          alt="model"
          className="w-full h-full object-cover scale-50 rounded-2xl hover:scale-100 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Section_3;
