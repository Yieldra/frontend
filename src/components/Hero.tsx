// components/Hero.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 bg-gray-800 bg-opacity-50 rounded-full px-3 py-1 border border-gray-700">
            <span className="text-sm font-medium text-blue-400">
              Hackathon Project Demo
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-transparent bg-clip-text">
            Earn 5% APY on Your Stablecoins with Yieldra
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Deposit your USDC, receive yUSD, and watch your balance grow
            automatically. The simplest way to earn passive income in DeFi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-lg font-medium px-8 py-3 rounded-lg flex items-center justify-center"
            >
              Launch App
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <a
              href="#how-it-works"
              className="bg-gray-800 hover:bg-gray-700 text-white text-lg font-medium px-8 py-3 rounded-lg border border-gray-600"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 bg-gray-800 bg-opacity-50 rounded-2xl p-6 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-blue-400 font-bold text-2xl">5%</div>
                <div className="text-gray-400">Annual Yield</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-bold text-2xl">1:1</div>
                <div className="text-gray-400">Deposit Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-bold text-2xl">
                  Real-time
                </div>
                <div className="text-gray-400">Yield Accrual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
