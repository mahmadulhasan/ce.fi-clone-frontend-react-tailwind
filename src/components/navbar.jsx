import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false); // TOGGLE STATE

  useEffect(()=>{
    if(open){
        document.body.style.overflow="hidden"
    }else{
        document.body.style.overflow="auto"
    }
  },[open])

  return (
    <div className="fixed top-0 left-0 h-20 bg-gradient-to-t from-[#11111130] to-[#111] w-full z-[999] backdrop-blur-sm flex items-center justify-around px-6">

      {/* LOGO */}
      <img src="https://ce.fi/image/CeFi.png" alt="" className="w-50" />

      {/* NAV LINKS */}
      <div
        className={`
          absolute top-full left-0 
           h-[calc(100vh-80px)] lg:h-fit pb-30 lg:pb-0
          bg-gradient-to-t from-[#111111ac] to-[#111]
          backdrop-blur-sm lg:backdrop-blur-none
          flex flex-col items-center justify-between gap-5 py-10 
          lg:text-[1.1vw] lg:font-medium font-bold

          whitespace-nowrap
          transition-all duration-500 ease-in-out overflow-y-auto
          
          ${open ? "opacity-100 translate-y-0 pointer-events-auto"
                 : "opacity-0 -translate-y-10 pointer-events-none lg:pointer-events-auto lg:opacity-100 lg:translate-y-0"} 
          lg:static lg:flex lg:flex-row lg:bg-none lg:py-0 lg:gap-5
        `}
      >
        {/* LEFT LINKS */}
        <div className="flex flex-col lg:flex-row gap-5 items-center navitem">
          <span>ROADMAP</span>
          <span>WHITEPAPER</span>
          <span>HOW TO BUY</span>
          <span>WIN 1M</span>
          <span>DOC</span>
          <span>CONTACT</span>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex flex-col lg:flex-row gap-5 items-center text-[1vw]">
          <span className="bg-orange py-2 px-4  rounded-md text-black font-bold">
            CONNECT WALLET
          </span>
          <span className="py-2 px-4 rounded-md border font-bold hover:text-black  hover:bg-[linear-gradient(94deg,#f0efca_10.66%,#fac877_53.03%,#f8a41c_96.34%,rgba(255,0,245,0.52)_191.41%,rgba(252,59,255,0.54)_191.43%)] ">
            LAUNCH dAPP
          </span>
        </div>
      </div>

      {/* MOBILE MENU ICON */}
      <div
        className="lg:hidden ml-auto text-4xl font-bold cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : "+"}
      </div>

    </div>
  );
};

export default Navbar;
