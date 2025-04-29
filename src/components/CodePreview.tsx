// components/CodePreview.tsx
"use client";

import { useState } from "react";
import { Code, Copy, Check } from "lucide-react";

const CodePreview = () => {
  const [isCopied, setIsCopied] = useState(false);

  const contractCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface ITestUSDC {
    function claimFaucet() external;
}

contract YieldUSD is ERC20, Ownable {
    IERC20 public stableToken; // e.g., DAI or USDC
    uint256 public apy = 500; // 5% APY (in basis points)
    uint256 constant SECONDS_IN_YEAR = 31536000;
    
    // For hackathon demo purposes - can be adjusted for quicker yield accrual
    uint256 public yieldAmplifier = 1; // Set to higher values for accelerated demos

    struct Deposit {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => Deposit) public deposits;

    constructor(address _stableToken) ERC20("YieldUSD", "yUSD") Ownable(msg.sender) {
        stableToken = IERC20(_stableToken);
    }

    function deposit(uint256 _amount) external {
        require(_amount > 0, "Amount > 0");

        stableToken.transferFrom(msg.sender, address(this), _amount);

        if (deposits[msg.sender].amount > 0) {
            _mintYield(msg.sender);
        }

        deposits[msg.sender].amount += _amount;
        deposits[msg.sender].timestamp = block.timestamp;

        _mint(msg.sender, _amount); // mint 1:1 yUSD
    }

    function _mintYield(address _user) internal {
        Deposit storage dep = deposits[_user];
        uint256 timeDiff = block.timestamp - dep.timestamp;
        uint256 yield = (dep.amount * apy * timeDiff * yieldAmplifier) / (10000 * SECONDS_IN_YEAR);

        if (yield > 0) {
            _mint(_user, yield); // Mint yield as yUSD
        }

        dep.timestamp = block.timestamp;
    }

    function withdraw() external {
        Deposit memory dep = deposits[msg.sender];
        require(dep.amount > 0, "No deposit");

        _mintYield(msg.sender); // mint pending yield

        _burn(msg.sender, dep.amount); // burn yUSD

        delete deposits[msg.sender];

        stableToken.transfer(msg.sender, dep.amount);
    }

    function earned(address _user) external view returns (uint256) {
        Deposit memory dep = deposits[_user];
        if (dep.amount == 0) return 0;
        uint256 timeDiff = block.timestamp - dep.timestamp;
        return (dep.amount * apy * timeDiff * yieldAmplifier) / (10000 * SECONDS_IN_YEAR);
    }
    
    // New function to allow users to claim USDC from the faucet through this contract
    function claimUSDCFaucet() external {
        ITestUSDC(address(stableToken)).claimFaucet();
    }
    
    // For hackathon demo purposes - allows adjusting APY and amplifier
    function setYieldParameters(uint256 _apy, uint256 _amplifier) external onlyOwner {
        apy = _apy;
        yieldAmplifier = _amplifier;
    }
    
    // Emergency fund function for hackathon demo - fund contract with yields
    function fundYieldReserves(uint256 _amount) external {
        stableToken.transferFrom(msg.sender, address(this), _amount);
    }
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Contract Code
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              YieldUSD is an open-source protocol built on Solidity
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
            <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
              <div className="text-gray-300 font-mono">YieldUSD.sol</div>
              <button
                onClick={copyToClipboard}
                className="text-gray-400 hover:text-white flex items-center"
              >
                {isCopied ? (
                  <>
                    <Check size={16} className="mr-1" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-1" />
                    <span>Copy code</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-sm whitespace-pre">
                {contractCode}
              </pre>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Built with OpenZeppelin contracts for security and standardization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodePreview;
