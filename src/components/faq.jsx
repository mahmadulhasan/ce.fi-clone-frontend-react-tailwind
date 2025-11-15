import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  return (
    <div className="flex flex-col gap-5">
      <center className="text-3xl text-orange font-bold">FAQ</center>
      <center className="lg:text-5xl text-3xl font-bold">
        Frequently Asked Questions
      </center>

      <Accordion
        type="single"
        collapsible
        className="w-full py-5"
        defaultValue="item-1"
      >
        <AccordionItem
          value="item-1"
          className="  rounded-md bg-[#0d0d0f] mb-3 px-6 py-2"
        >
          <AccordionTrigger className="text-2xl font-bold text-white  hover:no-underline ">
            Which Real-World Assets Can I Tokenize on CEFI?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-light text-lg">
              CEFI supports a wide range of tangible and intangible real-world
              assets, including farmland, commercial properties, commodities
              (like gold or oil), artistic works, and intangible IP (music
              catalogs, patents, brand licensing). Asset owners follow a
              straightforward procedure in the RWA Tokenization Suite (RWATS),
              with AI-based verification and decentralized governance ensuring
              authenticity and transparency.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="   rounded-md bg-[#0d0d0f] mb-3 px-6 py-2"
        >
          <AccordionTrigger className="text-2xl font-bold text-white  hover:no-underline">
            Which Real-World Assets Can I Tokenize on CEFI?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-300 px-6 pb-4">
            <p className="text-light text-lg">
              CEFI supports tangible and intangible assets like real estate,
              commodities, art, and IP-based assets — tokenized securely with AI
              verification and governance.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="w-full flex md:flex-row flex-col items-center py-10">
        <div className="flex flex-col gap-10">
            <span className="lg:text-5xl md:text-3xl text-2xl font-bold">Secure the Future, Join Ce.Fi Protocol</span>
            <span>Take part in the next evolution of decentralized finance with CEFI’s presale. Access discounted tokens and dive into a groundbreaking ecosystem uniting AI, real-world asset tokenization, and community-led governance. From farmland expansions to intangible IP licensing, CEFI redefines how tangible and intangible assets meet advanced analytics, frictionless trading, and secure lending. Your path to AI-driven, decentralized innovation begins here—step into the CEFI ecosystem today and reshape the future of on-chain finance!</span>
        </div>
        <img src="https://ce.fi/image/Cefi3d.png" alt="" className="max-w-70" />
      </div>
    </div>
  );
};

export default Faq;
