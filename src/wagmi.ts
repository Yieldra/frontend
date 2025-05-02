import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, Chain } from "@rainbow-me/rainbowkit";
import { sepolia, arbitrumSepolia } from "wagmi/chains";

// Define Pharos Devnet chain
const pharosDevnet = {
  id: 50002,
  name: "Pharos Devnet",
  // network: "pharos-devnet",
  nativeCurrency: {
    name: "Pharos Test Token",
    symbol: "PTT",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://devnet.dplabs-internal.com"] },
    public: { http: ["https://devnet.dplabs-internal.com"] },
  },
  blockExplorers: {
    default: { name: "PharosScan", url: "https://pharosscan.xyz" },
  },
  // No multicall3 contract provided, optional
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: "Template Fullstack Web3",
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "",
  chains: [sepolia, arbitrumSepolia, pharosDevnet],
  ssr: true,
});
