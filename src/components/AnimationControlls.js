import { motion, useAnimationControls } from 'framer-motion';
import React from 'react'


const AnimationControlls = () => {
    const controls = useAnimationControls();

    const handleClick=()=>{
        controls.start("flip");
    }
  
    return (
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
          gap: "0.8rem",
        }}
       >
        <button 
        onClick={handleClick}
        className="example-button">
          Flip it!
        </button>
        <motion.div
          style={{
            width: 150,
            height: 150,
            background: "black",
          }}
          variants={{
            initial:{
                rotate:"0deg",
            },
            flip:{
                rotate:"360deg",
            },
            banana:{
                rotate:{
                    rotate:"360deg",
                },
            },
          }}
         initial="initial"
         animate={controls}
        ></motion.div>
      </div>
    );
}

export default AnimationControlls
