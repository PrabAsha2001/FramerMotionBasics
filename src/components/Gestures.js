import React from 'react';
import {motion,easeInOut, MotionConfig} from "framer-motion";

const Gestures = () => {
  return (
    <div>
    

       
      <div style={({
        display:"grid",
        placeContent:"center",
        height:"100vh",
        gap:"0.8rem",    })}>
    
        <MotionConfig  
        whileTap={{scale:1.05,rotate:"2.5deg"}}
        whileHover={{scale:1.05}}
        transition={{
        duration:0.5,
        ease:easeInOut,
        }}>
        <motion.button className='example-button'
       
        >Click Me</motion.button>

        <motion.button className='example-button'
       
        style={{
            backgroundColor:"red",
        }}>Click Me</motion.button>
        </MotionConfig>
    
    </div>
   
    </div>
  )
}

export default Gestures
