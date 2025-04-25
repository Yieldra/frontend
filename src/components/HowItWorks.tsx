// components/HowItWorks.tsx
import { Wallet, ArrowRight, RefreshCw, DollarSign } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Wallet className="h-10 w-10 text-blue-400" />,
      title: "Deposit USDC",
      description:
        "Connect your wallet and deposit your USDC stablecoins to the protocol.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-teal-400" />,
      title: "Receive yUSD Tokens",
      description: "Get yUSD tokens on a 1:1 basis for your deposited USDC.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-green-400" />,
      title: "Watch Your Balance Grow",
      description:
        "Your yUSD balance automatically increases as yield accrues in real-time.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-purple-400" />,
      title: "Withdraw Anytime",
      description:
        "Withdraw your original deposit plus all accumulated yield whenever you want.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How YieldUSD Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our protocol makes earning yield as simple as possible
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="bg-gray-800 rounded-full p-4 mb-4 md:mb-0">
                {step.icon}
              </div>

              {index < steps.length && (
                <div className="hidden md:block md:mx-6">
                  <ArrowRight className="h-8 w-8 text-gray-600" />
                </div>
              )}

              <div
                className={`md:flex-1 text-center md:text-left ${
                  index < steps.length - 1 ? "mb-8 md:mb-0" : ""
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 bg-opacity-50 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Smart Contract Flow</h3>
          <p className="text-gray-400 mb-6">
            The YieldUSD smart contract handles all the calculations to ensure
            your yields are accurately tracked and distributed:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex">
              <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                1
              </span>
              <span>
                User calls{" "}
                <code className="bg-gray-700 px-2 py-0.5 rounded">
                  deposit()
                </code>{" "}
                function with USDC amount
              </span>
            </li>
            <li className="flex">
              <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                2
              </span>
              <span>Contract mints equivalent yUSD tokens at 1:1 ratio</span>
            </li>
            <li className="flex">
              <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                3
              </span>
              <span>
                When interacting with the contract again,{" "}
                <code className="bg-gray-700 px-2 py-0.5 rounded">
                  _mintYield()
                </code>{" "}
                calculates accrued yield based on time
              </span>
            </li>
            <li className="flex">
              <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                4
              </span>
              <span>
                The{" "}
                <code className="bg-gray-700 px-2 py-0.5 rounded">
                  withdraw()
                </code>{" "}
                function returns original USDC and mints additional yUSD tokens
                as yield
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

import { LineChart } from "lucide-react"; // Added missing import

export default HowItWorks;
