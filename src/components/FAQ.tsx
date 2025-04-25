// components/FAQ.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>

      {isOpen && (
        <div className="mt-4 text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is YieldUSD?",
      answer:
        "YieldUSD is a DeFi protocol that allows users to deposit USDC stablecoins and receive yUSD tokens that automatically accrue yield at a 5% APY rate.",
    },
    {
      question: "How does the yield generation work?",
      answer:
        "The protocol calculates yield based on the amount deposited, the time elapsed since deposit, and our fixed 5% APY rate. The yield accrues continuously and is calculated at the second level when interacting with the protocol.",
    },
    {
      question: "Is there a lockup period?",
      answer:
        "No, YieldUSD has no lockup period. You can withdraw your original deposit plus accrued yield at any time.",
    },
    {
      question: "What is the test USDC faucet?",
      answer:
        "For this hackathon demo, we've integrated a test USDC faucet that allows you to claim test USDC tokens to try out the protocol without using real assets.",
    },
    {
      question: "What is the 'yield amplifier' in the contract?",
      answer:
        "The yield amplifier is a hackathon demo feature that accelerates the yield calculation to demonstrate the protocol's functionality in a compressed timeframe.",
    },
    {
      question: "Is YieldUSD audited?",
      answer:
        "As a hackathon project, YieldUSD is built as a proof of concept and has not undergone a formal audit. It's built with OpenZeppelin standards and follows best security practices.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about YieldUSD
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
