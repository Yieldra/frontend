import { abiITestUSDC, abiTestUSDC, abiYieldUSDC } from "./abi";
import {
  contractAddressTestUSDC,
  contractAddressYieldUSDC,
} from "./contractAddress";

export const wagmiContractTestUSDCConfig = {
  address: contractAddressTestUSDC,
  abi: abiTestUSDC,
} as const;

export const wagmiContractITestUSDCConfig = {
  address: contractAddressTestUSDC,
  abi: abiITestUSDC,
} as const;

export const wagmiContractYieldUSDCConfig = {
  address: contractAddressYieldUSDC,
  abi: abiYieldUSDC,
} as const;
