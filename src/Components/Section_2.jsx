import React, { useRef } from 'react'
import { motion,useInView } from 'framer-motion'


const Section_2 = () => {

    const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", once: false }); 

  return (
      <div className='h-[70vh]'>
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
              className='text-6xl font-bold text-center pt-20 w-[45vw] mx-10 gap-2 flex flex-col items-center justify-center '>
              Showcase, Sell, <br/> <span className='text-red-700'>& acquire arts to</span> our marketplace
          </motion.h1>

         
    </div>
  )
}

export default Section_2