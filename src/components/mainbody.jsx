import React from "react";
import Timeline from "./timeline";
import Scroller from "./scroller";

const Mainbody = () => {
  const address = "0x36e9d6c0dde9d27f8fa7eb7967953541d0b97078";

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      console.log("Copied!");
    } catch (err) {
      console.error("Error copying: ", err);
    }
  };
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full flex md:flex-row flex-col justify-between items-center py-10">
        <div className="md:w-1/2 w-full flex flex-col gap-10">
          <span className="text-4xl font-bold">
            Secure the Future, Join Ce.Fi Protocol
          </span>
          <span className="text-light">
            TTake part in the next evolution of decentralized finance with
            CEFI’s presale. Access discounted tokens and dive into a
            groundbreaking ecosystem uniting AI, real-world asset tokenization,
            and community-led governance. From farmland expansions to intangible
            IP licensing, CEFI redefines how tangible and intangible assets meet
            advanced analytics, frictionless trading, and secure lending. Your
            path to AI-driven, decentralized innovation begins here—step into
            the CEFI ecosystem today and reshape the future of on-chain finance!
          </span>
        </div>
        <div className="md:w-1/2 w-full items-center">
          <img src="https://ce.fi/image/(PoI).png" alt="" className="w-full" />
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center py-10">
        <div className="md:w-1/2 w-full items-center">
          <img src="https://ce.fi/image/(AIVM).png" alt="" className="w-full" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-10">
          <span className="text-4xl font-bold">
            AI-Driven DeFi Engine (AIDE)
          </span>
          <span className="text-light">
            Revolutionizing Decentralized Finance with AI Precision At the heart
            of CEFI lies the AI-Driven DeFi Engine (AIDE)—a specialized
            computational layer designed to handle real-world asset tokenization
            with unmatched efficiency. AIDE supports secure and scalable AI
            workflows for tasks like revenue distribution, farmland yield
            updates, and compliance automation. By seamlessly integrating with
            blockchain and mainstream machine-learning frameworks, AIDE empowers
            users to access real-time insights and operations, bridging the gap
            between decentralized technology and advanced AI analytics.
          </span>
        </div>
      </div>

      <img src="/public/divider.png" alt="" className="w-full" />

      <div className="flex flex-col gap-5">
        <center className="md:text-5xl text-3xl font-bold">
          Empowering the Future of Decentralized Finance
        </center>
        <center className="text-orange text-lg font-semibold">
          At our DeFi platform, we offer innovative and secure solutions
          designed to cater to individuals, businesses, and blockchain startups,
          ensuring transparency, scalability, and profitability.
        </center>

        <div className="flex lg:flex-row flex-col items-center">
          <div className="cutbg lg:w-1/3 w-full p-5 flex flex-col gap-5">
            <center className="text-2xl text font-semibold">
              Decentralized Financial Solutions
            </center>

            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full ">
            <video
              src="https://asset-cdn.kaanch.com/Circuit.mp4"
              autoPlay
              loop
              muted
              className="w-full "
            ></video>
          </div>
          <div className="cutbgrev lg:w-1/3 w-full p-5 flex flex-col gap-5">
            <center className="text-2xl text font-semibold">
              Decentralized Financial Solutions
            </center>

            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
              <div className="flex flex-col gap-2">
                <span className=" font-bold">AI-Enabled Lending</span>
                <span className="text-light">
                  Smart, algorithm-driven lending solutions offering
                  personalized rates and insights.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src="/public/divider.png" alt="" className="w-full" />
      <Scroller />

      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="px-10 py-2 rounded-md bg-[#202024]  text-center">
          <span className="text-orange font-bold">Ce.Fi Protocol AI</span>
        </div>
        <center className="lg:text-5xl text-3xl font-bold">
          Transforming Blockchain & AIVM
        </center>
        <center>Transforming Tomorrow with AI-Driven Blockchain</center>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center">
          <div className="w-full border bg-[#202024] rounded-lg flex flex-col gap-3 items-center justify-center p-5">
            <img src="https://ce.fi/Icon/1.png" alt="" className="h-15 w-15" />
            <center className="text-lg font-bold text-orange">
              PoCI 2.0 Collateral Mechanism
            </center>
            <span className="text-light text-lg">
              Ensuring secure, AI-enhanced validation for farmland, commodities,
              and intangible IP. PoCI 2.0 dynamically measures collateral
              coverage, aligning real-world asset data and decentralized
              consensus for robust, trust-minimized lending and borrowing.
            </span>
          </div>
          <div className="w-full border bg-[#202024] rounded-lg flex flex-col gap-3 items-center justify-center p-5">
            <img src="https://ce.fi/Icon/2.png" alt="" className="h-15 w-15" />
            <center className="text-lg font-bold text-orange">
              PoCI 2.0 Collateral Mechanism
            </center>
            <span className="text-light text-lg">
              Ensuring secure, AI-enhanced validation for farmland, commodities,
              and intangible IP. PoCI 2.0 dynamically measures collateral
              coverage, aligning real-world asset data and decentralized
              consensus for robust, trust-minimized lending and borrowing.
            </span>
          </div>
          <div className="w-full border bg-[#202024] rounded-lg flex flex-col gap-3 items-center justify-center p-5">
            <img src="https://ce.fi/Icon/3.png" alt="" className="h-15 w-15" />
            <center className="text-lg font-bold text-orange">
              PoCI 2.0 Collateral Mechanism
            </center>
            <span className="text-light text-lg">
              Ensuring secure, AI-enhanced validation for farmland, commodities,
              and intangible IP. PoCI 2.0 dynamically measures collateral
              coverage, aligning real-world asset data and decentralized
              consensus for robust, trust-minimized lending and borrowing.
            </span>
          </div>
          <div className="w-full border bg-[#202024] rounded-lg flex flex-col gap-3 items-center justify-center p-5">
            <img src="https://ce.fi/Icon/4.png" alt="" className="h-15 w-15" />
            <center className="text-lg font-bold text-orange">
              PoCI 2.0 Collateral Mechanism
            </center>
            <span className="text-light text-lg">
              Ensuring secure, AI-enhanced validation for farmland, commodities,
              and intangible IP. PoCI 2.0 dynamically measures collateral
              coverage, aligning real-world asset data and decentralized
              consensus for robust, trust-minimized lending and borrowing.
            </span>
          </div>
          <div className="w-full border bg-[#202024] rounded-lg flex flex-col gap-3 items-center justify-center p-5">
            <img src="https://ce.fi/Icon/5.png" alt="" className="h-15 w-15" />
            <center className="text-lg font-bold text-orange">
              PoCI 2.0 Collateral Mechanism
            </center>
            <span className="text-light text-lg">
              Ensuring secure, AI-enhanced validation for farmland, commodities,
              and intangible IP. PoCI 2.0 dynamically measures collateral
              coverage, aligning real-world asset data and decentralized
              consensus for robust, trust-minimized lending and borrowing.
            </span>
          </div>
          <div className="w-full border bg-[#202024] rounded-lg flex flex-col gap-3 items-center justify-center p-5">
            <img src="https://ce.fi/Icon/6.png" alt="" className="h-15 w-15" />
            <center className="text-lg font-bold text-orange">
              PoCI 2.0 Collateral Mechanism
            </center>
            <span className="text-light text-lg">
              Ensuring secure, AI-enhanced validation for farmland, commodities,
              and intangible IP. PoCI 2.0 dynamically measures collateral
              coverage, aligning real-world asset data and decentralized
              consensus for robust, trust-minimized lending and borrowing.
            </span>
          </div>
        </div>
      </div>

      <img src="/public/divider.png" alt="" className="w-full" />

      <Timeline />

      <img src="/public/divider.png" alt="" className="w-full" />

      <div className="flex flex-col gap-5 items-center justify-center">
        <center className="text-orange text-3xl font-bold">
          Presale Token Allocation
        </center>
        <center className="font-bold lg:text-5xl text-3xl">Tokenomics</center>
        <center>Ce.Fi AI Tokenomics</center>
        <img
          src="https://ce.fi/image/tokenomics.png"
          alt=""
          className="lg:w-150 w-full"
        />
        <div className="px-10 py-2 rounded-md bg-[#202024] text-center flex items-center gap-2">
          <span className="text-xs md:text-md lg:text-xl font-bold break-words">
            {address}
          </span>

          <span
            className="cursor-pointer active:scale-90 transition-transform"
            onClick={copyAddress}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
            >
              <path d="M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"></path>
              <path d="M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"></path>
              <path d="M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"></path>
            </svg>
          </span>
        </div>

        <div className="px-10 py-2 rounded-md bg-orange  text-center">
          <span className="text-black text-lg font-bold">View Contract</span>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
