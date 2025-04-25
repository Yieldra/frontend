// components/Features.tsx
import { Coins, Clock, Shield, LineChart, Zap, DollarSign } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Coins className="h-8 w-8 text-blue-400" />,
      title: "USDC Deposits",
      description:
        "Deposit your USDC stablecoins and receive yUSD tokens on a 1:1 basis.",
    },
    {
      icon: <Clock className="h-8 w-8 text-teal-400" />,
      title: "Real-time Yield",
      description:
        "Watch your yields accrue in real-time, calculated down to the second.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Smart Contract Security",
      description:
        "Built with OpenZeppelin standards and best security practices.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-blue-400" />,
      title: "5% APY",
      description:
        "Earn a competitive 5% annual percentage yield on your stablecoin deposits.",
    },
    {
      icon: <Zap className="h-8 w-8 text-teal-400" />,
      title: "Instant Withdrawals",
      description:
        "Withdraw your original deposit plus earned yield anytime, no lockup periods.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-400" />,
      title: "Test USDC Faucet",
      description:
        "Try the protocol with test USDC from our integrated faucet for demo purposes.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protocol Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            YieldUSD combines simplicity with powerful yield generation
            capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
