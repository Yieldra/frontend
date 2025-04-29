// components/Hero.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 bg-gray-800 bg-opacity-60 rounded-full px-5 py-2 border border-blue-500 shadow-lg shadow-blue-500/20">
            <span className="text-sm font-medium text-blue-400 flex items-center">
              <span className="mr-2">⚡</span>
              DeFi Revolution Starts Here
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-transparent bg-clip-text leading-tight">
            Transform Your Idle Stablecoins Into Passive Income
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Deposit once and earn an industry-leading <span className="font-bold text-teal-400">5% APY</span> automatically. 
            Yieldra makes DeFi yields accessible without the complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-lg font-medium px-8 py-4 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 transform transition hover:scale-105"
            >
              Start Earning Now
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <a
              href="#how-it-works"
              className="bg-gray-800 hover:bg-gray-700 text-white text-lg font-medium px-8 py-4 rounded-lg border border-gray-600 hover:border-blue-500 transition"
            >
              See How It Works
            </a>
          </div>

          <div className="bg-gray-800 bg-opacity-60 rounded-2xl p-8 border border-gray-700 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-blue-500 bg-opacity-20 rounded-full">
                    <span className="text-blue-400 text-2xl">💰</span>
                  </div>
                </div>
                <div className="text-blue-400 font-bold text-3xl">5% APY</div>
                <div className="text-gray-300">Industry-Leading Returns</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-blue-500 bg-opacity-20 rounded-full">
                    <span className="text-blue-400 text-2xl">🔄</span>
                  </div>
                </div>
                <div className="text-blue-400 font-bold text-3xl">1:1 Swap</div>
                <div className="text-gray-300">Seamless Conversion</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-blue-500 bg-opacity-20 rounded-full">
                    <span className="text-blue-400 text-2xl">⏱️</span>
                  </div>
                </div>
                <div className="text-blue-400 font-bold text-3xl">Real-time</div>
                <div className="text-gray-300">Instant Yield Accrual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
