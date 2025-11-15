import React, { useEffect, useState } from "react";

const Hero = () => {
  const [button, setButton] = useState(1);
  const [usdt, setusdt] = useState("");
  const [cefi, setCefi] = useState("");

  const rate = 0.07593;

  const handelusdt = (e) => {
    e.preventDefault;
    let value = e.target.value;
    setusdt(value);

    if (button === 1) {
      setCefi(value ? value / rate : "");
    }
  };
  const handelCEFI = (e) => {
    e.preventDefault;
    let value = e.target.value;
    setCefi(value);
    if (button === 2) {
      setusdt(value ? value * rate : "");
    }
  };
  return (
    <div className="w-full flex lg:flex-row flex-col justify-between gap-20   hero">
      <div className="lg:w-1/2 w-full flex flex-col gap-5">
        <span className="md:text-[80px] text-[50px] font-[900]">
          Ce.Fi Protocol
        </span>
        <span className="text-[30px] text-orange font-semibold">
          Revolutionizing Finance with AI & DeFi
        </span>

        <div className="spansection  w-full ">
          <div className="spandiv  w-full text-center ">
            <center className="span-text">Staking</center>
            <center className="span-text">Lending</center>
            <center className="span-text">Borrowing</center>
            <center className="span-text">AI-Driven Insights</center>
            <center className="span-text">Launchpads</center>
          </div>
        </div>

        <span className="text-[#8c7546]">
          Seamlessly tokenize real-world assets like farmland and intangible IP,
          while unlocking new possibilities in staking, borrowing, and lending.
          Empowered by AI-driven analytics and a decentralized launchpad, CeFi
          is your gateway to the future of finance.
        </span>
        <center className="text-[#8c7546]">
          —Join the movement—experience CeFi today!
        </center>
        <video
          src="https://asset-cdn.kaanch.com/Final_Comp_00000_1.mp4"
          autoPlay
          loop
          muted
          className="w-full"
        ></video>
        <center className="text-lg font-semibold">Audited by</center>
        <div className="flex gap-2 items-center justify-center">
          <img
            src="https://spywolf.co/images/SpyWolf-v2-logo.svg"
            alt=""
            className="py-2 px-4 rounded-md bg-white w-35 h-10"
          />
          <img
            src="https://verifylab.com/wp-content/uploads/2023/06/1647045073-VerifyLab-1.webp"
            alt=""
            className="py-2 px-4 rounded-md bg-white w-35 h-10"
          />
        </div>
      </div>
      <div className="lg:w-[500px] w-full border rounded-xl flex flex-col gap-5 p-3 h-fit">
        <div className="w-full bg-[#0d0d0f] rounded-xl p-5 flex flex-col gap-5">
          <center className="text-2xl font-bold text-orange">
            Stage 6 - Buy Ce.Fi Now
          </center>
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-gray-500">Current Price:</span>
              <span className="text-orange">$0.07593</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Next Stage Price:</span>
              <span className="text-orange">$0.1139</span>
            </div>
          </div>
          <div className="flex flex-col">
            <center>Until price increase</center>
            <div className="h-4 bg-orange rounded-full w-full"></div>
            <center className="text-lg font-bold">
              Raised: $ 299,218.25408770854
            </center>
          </div>
        </div>

        <div class="w-full rounded-xl bg-[#0d0d0f]  p-5 text-white">
          <div class="text-center items-center text-sm text-gray-400 mb-4 flex justify-around gap-3">
            <div className="h-[1px] w-full bg-white" />
            <span class="whitespace-nowrap text-orange">
              1 Ce.Fi = $0.075930
            </span>
            <div className="h-[1px] w-full bg-white" />
          </div>

          <div class="flex flex-row justify-between gap-2 mb-4">
            <button
              className={`flex-1 text-lg font-bold py-2 rounded-md flex items-center justify-center gap-2 
                    ${
                      button === 1
                        ? "bg-[linear-gradient(94deg,#f0efca_10.66%,#fac877_53.03%,#f8a41c_96.34%,rgba(255,0,245,0.52)_191.41%,rgba(252,59,255,0.54)_191.43%)] text-black"
                        : "bg-[#040404] text-white"
                    }`}
              onClick={() => {
                setButton(1);
                setusdt("");
                setCefi("");
              }}
            >
              <img
                src="https://ce.fi/image/USDT.png"
                alt="usdt"
                class="w-6 h-6  "
              />
              USDT
            </button>
            <button
              className={`flex-1 text-lg font-bold py-2 rounded-md flex items-center justify-center gap-2 
                    ${
                      button === 2
                        ? "bg-[linear-gradient(94deg,#f0efca_10.66%,#fac877_53.03%,#f8a41c_96.34%,rgba(255,0,245,0.52)_191.41%,rgba(252,59,255,0.54)_191.43%)] text-black"
                        : "bg-[#040404] text-white"
                    }`}
              onClick={() => {
                setButton(2);
                setusdt("");
                setCefi("");
              }}
            >
              <img
                src="https://ce.fi/image/CeFiIcon.png"
                alt="cefi"
                class="w-6 h-6"
              />
              CEFI
            </button>
          </div>

          <div class="text-center text-sm text-orange mb-4">
            usdt Balance: <span class="text-white">0.000000</span>
          </div>

          <div class="flex flex-row gap-3">
            <div class="flex  flex-col gap-2 w-1/2 ">
              <p class="text-orange text-gray-400 mb-1">Pay with usdt</p>
              <div className="bg-[#040404] border rounded-lg px-4 py-2 flex justify-between items-center ">
                <input
                  type="text"
                  placeholder="0"
                  class="bg-transparent text-white text-lg w-24 outline-none"
                  disabled={button === 2}
                  value={usdt}
                  onChange={handelusdt}
                />
                <img src="https://ce.fi/image/USDT.png" class="w-5 h-5" />
              </div>
            </div>
            <div class="flex  flex-col gap-2 w-1/2 ">
              <p class="text-orange text-gray-400 mb-1">Receive Ce.Fi</p>
              <div className="bg-[#040404] border rounded-lg px-4 py-2 flex justify-between items-center ">
                <input
                  type="text"
                  placeholder="0"
                  class="bg-transparent text-white  text-lg w-24 outline-none"
                  disabled={button === 1}
                  value={cefi}
                  onChange={handelCEFI}
                />
                <img src="https://ce.fi/image/CeFiIcon.png" class="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div class="w-full rounded-xl bg-[#0d0d0f]  p-5 text-white flex flex-col gap-5">
          <div className="w-fulll bg-orange rounded-lg text-black text-lg font-bold py-3">
            <center>CONNECT WALLET</center>
          </div>
          <div className="w-fulll border rounded-lg bg-black text-lg font-bold py-3">
            <center>REAFER A FRIEND </center>
          </div>
          <div className="rounded-full w-full text-xl font-bold p-5 border text-center bg-radial-[at_25%_25%] from-zinc-900 via-zinc-700 to-zinc-900 to-75%">
            <span className="text-orange ">
              Launch dApp & Earn Staking Rewards! Up to 30% on CeFi Up to 27% on
              USDT/USDC/Dai
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
