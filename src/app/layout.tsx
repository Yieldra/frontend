import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import Provider from "./Provider";
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: "Yieldra",
  description: "RWA Backed Yield Stablecoin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-white text-black`}>
        <Provider>
          <AppShell>{children}</AppShell>
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
