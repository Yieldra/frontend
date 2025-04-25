// components/ContractCard.tsx
import { Copy } from "lucide-react";

const ContractCard = () => {
  const contractAddress = "0x1234...5678"; // Replace with your actual contract address for the demo

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add toast notification here
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Contract Details
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Deployed on the testnet for hackathon demonstration
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="mb-4">
              <div className="text-gray-400 mb-1 text-sm">Contract Name</div>
              <div className="text-xl">YieldUSD</div>
            </div>

            <div className="mb-4">
              <div className="text-gray-400 mb-1 text-sm">Contract Address</div>
              <div className="flex items-center">
                <code className="bg-gray-900 px-3 py-1 rounded text-gray-300 flex-1 mr-2">
                  {contractAddress}
                </code>
                <button
                  onClick={() => copyToClipboard(contractAddress)}
                  className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
                >
                  <Copy size={16} className="text-gray-300" />
                </button>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-gray-400 mb-1 text-sm">Network</div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <span>Testnet</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-gray-400 mb-1 text-sm">Implementation</div>
              <div>ERC20 token with yield accrual mechanics</div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="text-gray-400 mb-2 text-sm">
                Contract Features
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>USDC deposits</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>yUSD minting</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Real-time yield calculation</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Instant withdrawals</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>APY = 5% (500 basis points)</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>USDC faucet integration</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://github.com/yourusername/yield-usd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <span>View source code</span>
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react"; // Added missing import

export default ContractCard;
