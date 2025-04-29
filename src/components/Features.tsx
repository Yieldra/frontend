import { useState, useEffect } from 'react';
import { Coins, Clock, Shield, LineChart, Zap, DollarSign } from "lucide-react";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const features = [
    {
      icon: <Coins className="h-10 w-10 text-blue-400" />,
      title: "USDC Deposits",
      description:
        "Deposit USDC and receive yUSD tokens on a 1:1 basis, no minimum amount.",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-400",
      animationDelay: "0s",
    },
    {
      icon: <Clock className="h-10 w-10 text-teal-400" />,
      title: "Real-time Yield",
      description:
        "Watch yields accrue in real-time, calculated down to the second.",
      gradientFrom: "from-teal-500",
      gradientTo: "to-teal-400",
      animationDelay: "0.1s",
    },
    {
      icon: <Shield className="h-10 w-10 text-green-400" />,
      title: "Bank-Grade Security",
      description:
        "Built with OpenZeppelin standards and thoroughly audited for protection.",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-400",
      animationDelay: "0.2s",
    },
    {
      icon: <LineChart className="h-10 w-10 text-blue-400" />,
      title: "Industry-Leading 5% APY",
      description:
        "Earn competitive 5% APY, outperforming traditional banking options.",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-400",
      animationDelay: "0.3s",
    },
    {
      icon: <Zap className="h-10 w-10 text-teal-400" />,
      title: "Zero-Delay Withdrawals",
      description:
        "Access funds instantly with no lockup periods or withdrawal fees.",
      gradientFrom: "from-teal-500",
      gradientTo: "to-teal-400",
      animationDelay: "0.4s",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-green-400" />,
      title: "Test USDC Faucet",
      description:
        "Try before you invest with our integrated test USDC faucet.",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-400",
      animationDelay: "0.5s",
    },
  ];

  const [stats, setStats] = useState({
    tvl: 0,
    users: 0,
    yield: 0,
    apy: 0,
  });

  useEffect(() => {
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
    <section id="features" className="py-16 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-transparent bg-clip-text">
            Powerful Features, Simple Experience
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Institutional-grade yield generation with an interface anyone can use
          </p>
        </div>

        <div className='flex justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl px-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group animate-fadeIn"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  animationDelay: feature.animationDelay,
                  animationFillMode: "both"
                }}
              >
                <div 
                  className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg p-5 border border-gray-700 transition-all duration-300 h-full"
                  style={{
                    transform: hoveredIndex === index ? 'translateY(-5px)' : 'translateY(0)',
                    boxShadow: hoveredIndex === index ? '0 10px 25px -5px rgba(59, 130, 246, 0.2)' : 'none',
                    borderColor: hoveredIndex === index ? 'rgb(59, 130, 246)' : '',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
                  }}
                >
                  <div 
                    className={`absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} transition-all duration-300`}
                    style={{ 
                      opacity: hoveredIndex === index ? 1 : 0.4,
                      transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0.7)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease, opacity 0.3s ease'
                    }}
                  ></div>
                  
                  <div className="mb-4 relative flex items-center">
                    <div 
                      className={`absolute bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} rounded-full opacity-20 blur-md transition-all duration-300`}
                      style={{ 
                        width: hoveredIndex === index ? '40px' : '30px',
                        height: hoveredIndex === index ? '40px' : '30px',
                        transform: hoveredIndex === index ? 'scale(1.5)' : 'scale(1)',
                        transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease'
                      }}
                    ></div>
                    <div className="relative bg-gray-900 bg-opacity-50 p-2 rounded-full inline-flex items-center justify-center border border-gray-700 mr-3">
                      {feature.icon}
                    </div>
                    <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">{feature.title}</span>
                  </div>
                  
                  <p 
                    className="text-lg text-gray-300 leading-relaxed"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0.9,
                      transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(2px)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className='flex justify-center'>
          <div className="mt-16 bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700 shadow-lg w-full max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { 
                  value: '$' + stats.tvl.toLocaleString(), 
                  label: "Total Value Locked", 
                  color: "text-blue-400" 
                },
                { 
                  value: stats.users, 
                  label: "Active Users", 
                  color: "text-teal-400" 
                },
                { 
                  value: '$' + stats.yield.toLocaleString(), 
                  label: "Total Yield Generated", 
                  color: "text-green-400" 
                },
                { 
                  value: stats.apy + '%', 
                  label: "Current APY", 
                  color: "text-blue-400" 
                }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${stat.color} font-bold text-3xl mb-0.5 animate-pulse`} style={{ animationDelay: `${index * 0.2}s` }}>{stat.value}</div>
                  <div className="text-gray-400 text-md">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
