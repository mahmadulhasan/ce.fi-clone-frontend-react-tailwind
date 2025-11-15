import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-fill flex justify-center">
        <img src="https://ce.fi/image/CeFi.png" alt="" className="max-w-60" />
      </div>

      <center>
        Empowering a new era by revolutionizing decentralized AI with blockchain
        synergy.
      </center>

      <footer class="bg-black text-white pt-16 w-full ">
        <div class="w-full flex md:flex-row flex-col lg:justify-around gap-5 items-start justify-center py-10">
          <div className="lg:w-80 w-full">
            <h3 class="text-2xl font-semibold text-yellow-500 flex items-center gap-2">
              Newsletter <span class="text-white text-sm">📧</span>
            </h3>
            <p class="text-sm mt-3 text-gray-300">
              Stay up to date with Cefi Network
            </p>
            <div class="flex mt-5">
              <input
                type="email"
                placeholder="Your Email"
                class="w-full px-4 py-2 rounded-l-md border border-yellow-600 bg-transparent text-sm focus:outline-none focus:border-yellow-400"
              />
              <button class="bg-yellow-600 hover:bg-yellow-500 px-4 rounded-r-md flex items-center justify-center">
                ➜
              </button>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-between gap-5">
            <div>
              <h4 class="text-xl font-semibold text-yellow-500 mb-3">
                Useful links
              </h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Announcements
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Audits
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-yellow-500 mb-3">
                Presale
              </h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    How To Buy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Win $1M
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-yellow-500 mb-3">
                Socials
              </h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Twitter (X)
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-yellow-500 mb-3">
                Coming Soon
              </h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Explorer (Testnet)
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Faucet
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    External Wallet
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-500">
                    Bridge
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-y border-y-gray-500 w-full flex md:flex-row flex-col items-center justify-between py-1">
            <div className="flex gap-1 lg:text-md md:text-sm text-xs">
                <span>Privacy Policy |</span>
                <span>Terms And Condition |</span>
                <span>Risk Disclosures</span>
            </div>
            <div className="flex lg:text-md md:text-sm text-xs">
                <span>Copyright © 2025 | Cefi Network</span>
            </div>
        </div>
        <center className="text-sm py-5">Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may fluctuate Profits may be subject to capital gains or other taxes applicable in your jurisdictio
</center>
      </footer>
    </div>
  );
};

export default Footer;
