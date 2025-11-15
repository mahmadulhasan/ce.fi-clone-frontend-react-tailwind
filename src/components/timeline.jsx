import React from "react";

const Timeline = () => {
  const phases = [
    {
      title: "Phase 1",
      header: "MVP and Beta Trials",
      points: [
        "Pilot farmland, AI risk scoring.",
        "Token distribution to early participants.",
        "Small intangible IP catalog launch.",
      ],
    },
    {
      title: "Phase 2",
      header: "DAO Formation and Asset Expansion",
      points: [
        "DAO structure for farmland, IP.",
        "Expand intangible IP listings further.",
        "Introduce liquidity incentives for pairs.",
      ],
    },
    {
      title: "Phase 3",
      header: "Mainnet Launch and DeFi Integration",
      points: [
        "Official mainnet with formal audits.",
        "Distribute CEFI to stakers, operators.",
        "Integrate DeFi with cross-chain platforms.",
      ],
    },
    {
      title: "Phase 4",
      header: "AI Governance and Cross-Chain Bridges",
      points: [
        "AI-driven governance with automatic approvals.",
        "Cross-chain bridges for IP tokens.",
        "Expand farmland globally through AI.",
      ],
    },
    {
      title: "Phase 5",
      header: "Complete Decentralization and RWA Normalization",
      points: [
        "Expand node operators worldwide.",
        "Mature IP sub-DAO internationally.",
        "Standardize CEFI for asset tokenization.",
      ],
    },
  ];

  return (
    <>
      <center className="py-10 text-orange lg:text-6xl md:text-4xl text-2xl font-bold">
        Ce.Fi Roadmap
      </center>

      <div className="w-full bg-black text-white p-6 rounded-xl border border-yellow-600">
        {/* TIMELINE LINE */}
        <div className="relative w-full h-12 hidden lg:flex items-center justify-between">
          {/* main line */}
          <div className="absolute top-[22%] left-0 w-full h-2 bg-yellow-500 rounded-full -translate-y-1/2"></div>

          {/* circles with phase names */}
          {phases.map((p, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className="w-6 h-6 bg-white border-6 border-amber-400  rounded-full z-10"></div>
              <p className="mt-2 text-sm font-semibold">{p.title}</p>
            </div>
          ))}
        </div>

        {/* CONTENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {phases.map((p, i) => (
            <div key={i} className="border  rounded-lg p-4 bg-black min-w-30 ">
              <h3 className="font-bold mb-3">{p.header}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {p.points.map((pt, j) => (
                  <li className="text-light " key={j}>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="flex items-center gap-1 py-3 px-5 border text-yellow-700 hover:text-white hover:bg-[linear-gradient(94deg,#f0efca_10.66%,#fac877_53.03%,#f8a41c_96.34%,rgba(255,0,245,0.52)_191.41%,rgba(252,59,255,0.54)_191.43%)] hover:border-transparent text-xl font-bold w-fit rounded-lg transform transition-all duration-200 hover:scale-110">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.9497 11.9497C18.7347 10.1648 19.3542 7.65558 18.8081 5.36796L21.303 4.2987C21.5569 4.18992 21.8508 4.30749 21.9596 4.56131C21.9862 4.62355 22 4.69056 22 4.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V7L5.12892 5.65904C4.70023 7.86632 5.34067 10.2402 7.05025 11.9497L12 16.8995L16.9497 11.9497ZM15.5355 10.5355L12 14.0711L8.46447 10.5355C6.51184 8.58291 6.51184 5.41709 8.46447 3.46447C10.4171 1.51184 13.5829 1.51184 15.5355 3.46447C17.4882 5.41709 17.4882 8.58291 15.5355 10.5355Z"></path>
          </svg>
          ROADMAP
        </span>
      </div>
    </>
  );
};

export default Timeline;
