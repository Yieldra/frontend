// components/YieldCalculator.tsx
"use client";

import { useState, useEffect, ChangeEvent } from "react";

const YieldCalculator = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [timeframe, setTimeframe] = useState<number>(12); // months
  const apy = 5; // 5% fixed APY

  const [estimatedYield, setEstimatedYield] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);

  const [amountFormatted, setAmountFormatted] = useState<string>("");
  const [estimatedYieldFormatted, setEstimatedYieldFormatted] = useState<string>("");
  const [totalValueFormatted, setTotalValueFormatted] = useState<string>("");

  useEffect(() => {
    setAmountFormatted(amount.toLocaleString());
    setEstimatedYieldFormatted(estimatedYield.toLocaleString());
    setTotalValueFormatted(totalValue.toLocaleString());
  }, [amount, estimatedYield, totalValue]);

  useEffect(() => {
    const calculateYield = () => {
      // Simple APY calculation (doesn't account for compounding in this demo)
      const years = timeframe / 12;
      const yieldAmount = amount * (apy / 100) * years;
      setEstimatedYield(yieldAmount);
      setTotalValue(amount + yieldAmount);
    };

    calculateYield();
  }, [amount, timeframe, apy]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberRegex = /^[0-9]*$/;

    if (value === '' || numberRegex.test(value)) {
      setAmount(Number(e.target.value))
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#99d5d5] via-[#4cb6b6] to-[#009797] text-transparent bg-clip-text">
              Yield Calculator
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Calculate your potential returns with YieldUSD
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">
                    Deposit Amount (USDC)
                  </label>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => handleChange(e)}
                    maxLength={12}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                    min="0"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">
                    Time Period
                  </label>
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(Number(e.target.value))}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  >
                    <option value={1}>1 month</option>
                    <option value={3}>3 months</option>
                    <option value={6}>6 months</option>
                    <option value={12}>1 year</option>
                    <option value={24}>2 years</option>
                    <option value={60}>5 years</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">
                    Annual Percentage Yield
                  </label>
                  <div className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                    {apy}%{" "}
                    <span className="text-gray-400 text-sm">(fixed rate)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="text-gray-400 mb-1">Initial Deposit</div>
                  <div className="text-2xl font-semibold">
                    ${amountFormatted}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-gray-400 mb-1">Estimated Yield</div>
                  <div className="text-2xl font-semibold text-green-400">
                    +${estimatedYieldFormatted}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="text-gray-400 mb-1">Total Value</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                    ${totalValueFormatted}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#launch-app"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium inline-block"
              >
                Start Earning Now
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>
              This calculator provides an estimate based on a fixed 5% APY.
              Actual results may vary. For demonstration purposes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YieldCalculator;
