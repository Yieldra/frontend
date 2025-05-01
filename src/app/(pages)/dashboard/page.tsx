"use client";

import "@/app/globals.css";
import { ChatWidget } from "@/components/ChatWidget";
import Yield from "@/components/Yield";


const DashboardPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20">
      <Yield />
      <ChatWidget />
    </main>
  );
};

export default DashboardPage;
