// components/CTASection.tsx
import { Wallet, ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section
      id="launch-app"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-teal-500 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700 shadow-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-blue-500 bg-opacity-20 rounded-full p-3 mb-6">
              <Wallet className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Launch the YieldUSD app to deposit your stablecoins and start
              earning 5% APY right away
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-lg font-medium px-8 py-4 rounded-xl flex items-center justify-center"
              >
                Go To Dashboard
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href="https://github.com/yourusername/yield-usd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white text-lg font-medium px-8 py-4 rounded-xl border border-gray-600"
              >
                View Source Code
              </a>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-4 mt-8">
            <div className="text-center text-gray-400 text-sm">
              <p>
                This is a hackathon demo project. The contract is unaudited and
                should not be used with real funds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
