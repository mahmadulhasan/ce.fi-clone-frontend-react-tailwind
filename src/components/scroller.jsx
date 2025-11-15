import React, { useEffect } from "react";

const Scroller = () => {

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);



  return (
    <div className="scroller" data-direction="left" data-speed="fast">
      <ul className="scroller__inner">
        <li><img src="https://ce.fi/image/w1.png" /></li>
        <li><img src="https://ce.fi/image/w4.png" /></li>
        <li><img src="https://ce.fi/image/w5.png" /></li>
        <li><img src="https://ce.fi/image/w7.png" /></li>
        <li><img src="https://ce.fi/image/w8.png" /></li>
        <li><img src="https://ce.fi/image/w9.png" /></li>
        <li><img src="https://ce.fi/image/w10.png" /></li>
        <li><img src="https://ce.fi/image/w11.png" /></li>
        <li><img src="https://ce.fi/image/w12.png" /></li>
      </ul>
    </div>
  );
};

export default Scroller;
