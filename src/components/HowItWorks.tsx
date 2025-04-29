import { Wallet, RefreshCw, LineChart, DollarSign, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Wallet className="h-8 w-8 text-blue-400" />,
      title: "Deposit USDC",
      description:
        "Connect your wallet and deposit your USDC stablecoins to the protocol.",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-teal-400" />,
      title: "Receive yUSD Tokens",
      description: "Get yUSD tokens on a 1:1 basis for your deposited USDC.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-green-400" />,
      title: "Watch Your Balance Grow",
      description:
        "Your yUSD balance automatically increases as yield accrues in real-time.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-purple-400" />,
      title: "Withdraw Anytime",
      description:
        "Withdraw your original deposit plus all accumulated yield whenever you want.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
            How Yieldra Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">Earn passive income in just four simple steps</p>
        </div>

        <div 
          className={`max-w-4xl mx-auto space-y-4 gradient-border p-4 bg-white/5 hover:shadow-md hover:shadow-cyan-500/10 transition-all duration-300 scale-105`}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center p-2"
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
      </div>
    </section>
  );
};

export default HowItWorks;
