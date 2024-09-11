import React, { useState } from 'react'
import {AnimatePresence, motion, spring} from 'framer-motion';

const BasicsOfMotion = () => {
    const [isVisible,setisVisible]=useState(true);
  return (
    <div style={({
        display:"grid",
        placeContent:"center",
        height:"100vh",
        gap:"0.8rem",    })}>

    <motion.button 
    className='example-button'
    onClick={()=>setisVisible(!isVisible)}
    layout
    >Show/Hide</motion.button>
    <AnimatePresence mode="popLayout">
        {isVisible && (<motion.div 
            initial={{
                //starting point
                rotate:'0deg',
                scale:0,
                y:0,
            }}
            animate={{
                //ending point
                rotate:'180deg',
                scale:1,
                y:[0,15,-150,-150,0]
            }}
            exit={{
                rotate:"0deg",
                scale:0,
                y:0,
            }}
            transition={{
                //how long the animation should be 
                duration:5,
                ease:'backInOut',
                time:[0,0.25,0.50,0.85,1],
            }}
            style={{
            width:150,
            height:150,
            background:"black",
        }}>

        </motion.div>)}
    </AnimatePresence>
    
      
    </div>
  )
}

export default BasicsOfMotion
