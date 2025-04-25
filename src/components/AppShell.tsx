"use client";

import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      {/* <Header /> */}
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
