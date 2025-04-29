// components/Stats.tsx
"use client";

import { useState, useEffect } from "react";

const Stats = () => {
  // These would normally come from blockchain data
  const [stats, setStats] = useState({
    tvl: 0,
    users: 0,
    yield: 0,
    apy: 0,
  });

  useEffect(() => {
    // Simulating loading blockchain data
    const timer = setTimeout(() => {
      setStats({
        tvl: 218456,
        users: 142,
        yield: 10923,
        apy: 5,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="stats"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protocol Statistics
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time metrics from the Yieldra protocol
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-gray-400 mb-2">Total Value Locked</div>
            <div className="text-3xl font-bold flex items-baseline">
              ${stats.tvl.toLocaleString()}
              <span className="text-green-400 text-sm ml-2">USDC</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-gray-400 mb-2">Active Users</div>
            <div className="text-3xl font-bold flex items-baseline">
              {stats.users}
              <span className="text-blue-400 text-sm ml-2">wallets</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-gray-400 mb-2">Total Yield Generated</div>
            <div className="text-3xl font-bold flex items-baseline">
              ${stats.yield.toLocaleString()}
              <span className="text-teal-400 text-sm ml-2">yUSD</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="text-gray-400 mb-2">Current APY</div>
            <div className="text-3xl font-bold flex items-baseline">
              {stats.apy}%
              <span className="text-green-400 text-sm ml-2">fixed rate</span>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">
              Hackathon Accelerated Demo
            </h3>
            <p className="text-gray-400">
              For demonstration purposes, our hackathon implementation features
              an amplified yield rate that showcases the protocol&apos;s
              functionality in a compressed timeframe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
