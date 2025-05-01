"use client";

import CodePreview from "@/components/CodePreview";
import { Copy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const contractAddress = "0x123..."; // Replace with actual value

const ContractPage = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <AnimatedSection>
        <div className="max-w-6xl mx-auto text-center mb-20 mt-20 py-16 px-8">
          <h1 className="text-6xl font-bold mb-4">Explore the Yieldra Contract</h1>
          <p className="text-xl text-gray-400">
            This page showcases the core logic and design behind <strong>Yieldra</strong> — a smart contract that turns USDC deposits into yield-bearing tokens (yUSD). Track the flow, check features, and dive into the code.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <section id="smart-contract-flow" className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-3">Smart Contract Flow</h2>
              <p className="text-gray-400 text-lg">
                Yieldra contract ensures fair and transparent yield distribution:
              </p>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto shadow-lg">
            <ul className="space-y-4 text-gray-300">
              {[
                {
                  step: "1",
                  text: (
                    <>
                      User calls{" "}
                      <code className="bg-gray-700 px-2 py-0.5 rounded">
                        deposit()
                      </code>{" "}
                      with USDC amount
                    </>
                  ),
                },
                {
                  step: "2",
                  text: "Contract mints yUSD tokens 1:1",
                },
                {
                  step: "3",
                  text: (
                    <>
                      On interaction,{" "}
                      <code className="bg-gray-700 px-2 py-0.5 rounded">
                        _mintYield()
                      </code>{" "}
                      calculates accrued yield
                    </>
                  ),
                },
                {
                  step: "4",
                  text: (
                    <>
                      <code className="bg-gray-700 px-2 py-0.5 rounded">
                        withdraw()
                      </code>{" "}
                      returns USDC + accrued yield
                    </>
                  ),
                },
              ].map(({ step, text }, i) => (
                <li key={i} className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
                    {step}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <section className="py-20">
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-3">Smart Contract Details</h2>
              <p className="text-gray-400 text-lg">
                Deployed on testnet for hackathon demo
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl space-y-6">
              <div>
                <div className="text-sm text-gray-400">Contract Name</div>
                <div className="text-xl">Yieldra</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Contract Address</div>
                <div className="flex items-center">
                  <code className="bg-gray-900 px-3 py-1 rounded text-gray-300 mr-2 truncate">
                    {contractAddress}
                  </code>
                  <button
                    onClick={() => copyToClipboard(contractAddress)}
                    className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-green-500 mr-2" />
                <span>Testnet</span>
              </div>

              <div>
                <div className="text-sm text-gray-400">Implementation</div>
                <p>ERC20 token with yield accrual mechanics</p>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-2">Features</div>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  {[
                    "USDC deposits",
                    "yUSD minting",
                    "Real-time yield calculation",
                    "Instant withdrawals",
                    "APY = 5% (500 basis points)",
                    "USDC faucet integration",
                  ].map((f, i) => (
                    <div className="flex items-center" key={i}>
                      <span className="h-2 w-2 rounded-full bg-blue-500 mr-2" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="/contract"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                <span>View source code</span>
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection delay={0.4}>
        <CodePreview />
      </AnimatedSection>
    </main>
  );
};

export default ContractPage;
