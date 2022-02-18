import React from 'react'

import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Apc() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Data Analyst","Web Developer","Competetive Coder"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span>
      
      {/* Element to display typing strings */}
            <h2 style={{color:"#dc143c"}}><span ref={el}></span></h2>
      

    </span>
  );
}

