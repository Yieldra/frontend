/* eslint-disable @typescript-eslint/no-explicit-any */
import { wagmiContractITestUSDCConfig, wagmiContractTestUSDCConfig, wagmiContractYieldUSDCConfig } from '@/services/contract';
import { useEffect, useState } from 'react';
import { formatUnits } from 'viem';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Wallet,
  BadgeDollarSign,
  CreditCard,
  LineChart,
  ArrowDownUp,
  Lock,
  Loader2
} from "lucide-react";

const Yield = () => {
  const [tab, setTab] = useState<"deposit" | "withdraw" | "claim">("deposit");
  const { address } = useAccount();
  const [usdc, setUsdc] = useState(0);
  const [yusdc, setYusdc] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [yieldAmount, setYieldAmount] = useState(0);
  const [apy, setApy] = useState(0);
  const [yieldAmplifier, setYieldAmplifier] = useState(0);
  const [depositUSDC, setDepositUSDC] = useState(0);
  const [newApy, setNewApy] = useState(0);
  const [newYieldAmplifier, setNewYieldAmplifier] = useState(0);
  const [fundYield, setFundYield] = useState(0);
  const [isOwner, setIsOwner] = useState(false);

  const { writeContractAsync } = useWriteContract();
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const { data: ownerAddress } = useReadContract({
    ...wagmiContractTestUSDCConfig,
    functionName: 'owner',
  });

  useEffect(() => {
    if (typeof ownerAddress === 'string' && typeof address === 'string') {
      setIsOwner(ownerAddress.toLowerCase() === address.toLowerCase());
    }
  }, [ownerAddress, address]);

  const { data: balanceUSDC } = useReadContract({
    ...wagmiContractTestUSDCConfig,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: { refetchInterval: 10000 },
  });

  useEffect(() => {
    if (typeof balanceUSDC === 'bigint') {
      setUsdc(parseFloat(formatUnits(balanceUSDC, 6)));
    }
  }, [balanceUSDC]);

  const { data: balanceYUSDC } = useReadContract({
    ...wagmiContractYieldUSDCConfig,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: { refetchInterval: 10000 },
  });

  useEffect(() => {
    if (typeof balanceYUSDC === 'bigint') {
      setYusdc(parseFloat(formatUnits(balanceYUSDC, 6)));
    }
  }, [balanceYUSDC]);

  const { data: balanceDeposit } = useReadContract({
    ...wagmiContractYieldUSDCConfig,
    functionName: 'deposits',
    args: address ? [address] : undefined,
    query: { refetchInterval: 10000 },
  });

  useEffect(() => {
    if (balanceDeposit && Array.isArray(balanceDeposit) && typeof balanceDeposit[0] === 'bigint') {
      setDeposit(parseFloat(formatUnits(balanceDeposit[0], 6)));
    }
  }, [balanceDeposit]);

  const { data: balanceYield } = useReadContract({
    ...wagmiContractYieldUSDCConfig,
    functionName: 'earned',
    args: address ? [address] : undefined,
    query: { refetchInterval: 10000 },
  });

  useEffect(() => {
    if (typeof balanceYield === 'bigint') {
      setYieldAmount(parseFloat(formatUnits(balanceYield, 6)));
    }
  }, [balanceYield]);

  const { data: currentApy } = useReadContract({
    ...wagmiContractYieldUSDCConfig,
    functionName: 'apy',
    query: { refetchInterval: 10000 },
  });

  useEffect(() => {
    if (typeof currentApy === 'bigint') {
      setApy(Number(currentApy) / 100);
    }
  }, [currentApy]);

  const { data: yieldAmp } = useReadContract({
    ...wagmiContractYieldUSDCConfig,
    functionName: 'yieldAmplifier',
    query: { refetchInterval: 10000 },
  });

  useEffect(() => {
    if (typeof yieldAmp === 'bigint') {
      setYieldAmplifier(Number(yieldAmp));
    }
  }, [yieldAmp]);

  // ---- FUNCTION WRAPPERS ----
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const executeContract = async (key: string, config: any) => {
    try {
      setLoadingButton(key);
      await writeContractAsync(config);
      toast.success(`${key} success!`);
    } catch (error: unknown) {
      console.error(error);

      let errorMessage = 'Unknown Error';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'object' && error && 'shortMessage' in error) {
        errorMessage = (error as { shortMessage: string }).shortMessage;
      }

      toast.error(`${key} failed: ${errorMessage}`);
    } finally {
      setLoadingButton(null);
    }
  };


  const handleApprove = () => {
    if (!depositUSDC) return toast.warn('Set amount first!');

    // Convert depositUSDC to the correct unit with 6 decimals (USDC standard)
    const amountWithDecimals = BigInt(Math.floor(depositUSDC * 1_000_000));

    executeContract('Approve', {
      // Use TestUSDC contract config, not YieldUSDC
      ...wagmiContractTestUSDCConfig,
      functionName: 'approve',
      // Approve YieldUSDC contract to spend tokens, not the user's address
      args: [wagmiContractYieldUSDCConfig.address, amountWithDecimals],
    });
  };

  const handleDeposit = () => {
    if (!depositUSDC) return toast.warn('Set amount first!');

    // Convert depositUSDC to the correct unit with 6 decimals (USDC standard)
    const amountWithDecimals = BigInt(Math.floor(depositUSDC * 1_000_000));

    executeContract('Deposit', {
      ...wagmiContractYieldUSDCConfig,
      functionName: 'deposit',
      args: [amountWithDecimals],
    });
  };

  const handleWithdraw = () => {
    executeContract('Withdraw', {
      ...wagmiContractYieldUSDCConfig,
      functionName: 'withdraw',
    });
  };

  const handleClaim = () => {
    executeContract('Claim Faucet', {
      ...wagmiContractITestUSDCConfig,
      functionName: 'claimFaucet',
    });
  };

  const handleSetParameters = () => {
    executeContract('Set Parameters', {
      ...wagmiContractYieldUSDCConfig,
      functionName: 'setYieldParameters',
      args: [BigInt(newApy), BigInt(newYieldAmplifier)],
    });
  };

  const handleFundYieldReserves = () => {
    if (!fundYield) return toast.warn('Set amount first!');
    executeContract('Fund Reserves', {
      ...wagmiContractYieldUSDCConfig,
      functionName: 'fundYieldReserves',
      args: [BigInt(fundYield)],
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <div className="max-w-6xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Yieldra Protocol</h1>
          <p className="text-gray-400">Maximize your yield with our advanced staking platform</p>
        </header>

        <div className='flex flex-col gap-6'>
          <div className='grid grid-cols-3 gap-6'>
            <div className='lg:col-span-2 space-y-6'>
              <div className="bg-gray-900 border border-gray-800 rounded-lg">
                <div className="p-4 border-b border-gray-800">
                  <h2 className="flex items-center text-white text-lg font-semibold">
                    <Wallet className="mr-2 h-5 w-5 text-emerald-500" /> Account Overview
                  </h2>
                  <p className="text-sm text-gray-400">Your current balances and earnings</p>
                </div>
                <div className="p-4 grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "USDC Balance",
                      value: usdc,
                      icon: <BadgeDollarSign className="h-5 w-5 text-blue-400 mr-1" />,
                      suffix: "USDC",
                      color: "text-blue-400"
                    },
                    {
                      label: "Yieldra Balance",
                      value: yusdc,
                      icon: <BadgeDollarSign className="h-5 w-5 text-emerald-400 mr-1" />,
                      suffix: "yUSD",
                      color: "text-emerald-400"
                    },
                    {
                      label: "Current Deposit",
                      value: deposit,
                      icon: <CreditCard className="h-5 w-5 text-purple-400 mr-1" />,
                      suffix: "USDC",
                      color: "text-purple-400"
                    },
                    {
                      label: "Earned Yield",
                      value: yieldAmount,
                      icon: <LineChart className="h-5 w-5 text-yellow-400 mr-1" />,
                      suffix: "yUSD",
                      color: "text-yellow-400"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      <p className={`text-2xl font-medium text-white flex items-center`}>
                        {item.icon}
                        {item.value.toLocaleString()}{" "}
                        <span className={`text-sm ${item.color} ml-1`}>{item.suffix}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg">
              <div className="p-4 border-b border-gray-800">
                <h2 className="flex items-center text-white text-lg font-semibold">
                  <LineChart className="mr-2 h-5 w-5 text-emerald-500" /> Protocol Information
                </h2>
                <p className="text-sm text-gray-400">Current yield parameters</p>
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-400 mb-1">Current APY</p>
                  <p className="text-2xl font-medium text-white">{apy}%</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-400 mb-1">Yield Amplifier</p>
                  <p className="text-2xl font-medium text-white">{yieldAmplifier}x</p>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-6'>
            <div className={`${(isOwner ? 'col-span-2' : 'col-span-3')} gap-6`}>
              <div className="bg-gray-900 border border-gray-800 rounded-lg">
                <div className="p-4 border-b border-gray-800">
                  <h2 className="flex items-center text-white text-lg font-semibold">
                    <ArrowDownUp className="mr-2 h-5 w-5 text-emerald-500" /> Operations
                  </h2>
                  <p className="text-sm text-gray-400">Deposit USDC, withdraw, and claim faucet tokens</p>
                </div>
                <div className="p-4">
                  <div className="flex justify-between bg-gray-800 p-1 rounded mb-4">
                    {["deposit", "withdraw", "claim"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTab(t as any)}
                        className={`flex-1 py-2 text-sm font-medium rounded ${tab === t ? "bg-gray-900 text-white" : "text-gray-400"
                          }`}
                      >
                        {t === "claim" ? "Claim Faucet" : t === "deposit" ? "Deposit USDC" : t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>

                  {tab === "deposit" && (
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-2">
                        <label className="text-sm text-gray-400">Amount to Deposit</label>
                        <div className="flex space-x-2">
                          <input
                            type="number"
                            placeholder="Amount of USDC"
                            value={depositUSDC ?? ""}
                            onChange={(e) => setDepositUSDC(Number(e.target.value))}
                            className="bg-gray-800 border border-gray-700 text-white p-2 rounded w-full"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={handleApprove}
                          disabled={loadingButton !== null || !depositUSDC}
                          className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded"
                        >
                          {loadingButton === "Approve" ? (
                            <span className="flex items-center">
                              <Loader2 className="animate-spin mr-2 h-4 w-4" />
                              Approving...
                            </span>
                          ) : (
                            "Approve"
                          )}
                        </button>
                        <button
                          onClick={handleDeposit}
                          disabled={loadingButton !== null || !depositUSDC}
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                        >
                          {loadingButton === "Deposit" ? (
                            <span className="flex items-center">
                              <Loader2 className="animate-spin mr-2 h-4 w-4" />
                              Depositing...
                            </span>
                          ) : (
                            "Deposit USDC"
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {tab === "withdraw" && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                        <p className="text-sm text-gray-400 mb-1">Available to Withdraw</p>
                        <p className="text-xl font-medium text-white">{deposit.toLocaleString()} USDC</p>
                      </div>
                      <button
                        onClick={handleWithdraw}
                        disabled={loadingButton !== null || deposit <= 0}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                      >
                        {loadingButton === "Withdraw" ? (
                          <span className="flex items-center">
                            <Loader2 className="animate-spin mr-2 h-4 w-4" />
                            Withdrawing...
                          </span>
                        ) : (
                          "Withdraw All"
                        )}
                      </button>
                    </div>
                  )}

                  {tab === "claim" && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                        <p className="text-sm text-gray-400 mb-1">Claim Test USDC</p>
                        <p className="text-sm text-gray-400">Get 100 USDC for testing the protocol</p>
                      </div>
                      <button
                        onClick={handleClaim}
                        disabled={loadingButton !== null}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                      >
                        {loadingButton === "Claim" ? (
                          <span className="flex items-center">
                            <Loader2 className="animate-spin mr-2 h-4 w-4" />
                            Claiming...
                          </span>
                        ) : (
                          "Claim USDC Faucet"
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {isOwner && (
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                <div className="p-4 border-b border-gray-800">
                  <h2 className="flex items-center text-white text-lg font-semibold">
                    <Lock className="mr-2 h-5 w-5 text-red-500" /> Admin Functions
                  </h2>
                  <p className="text-sm text-gray-400">Protocol management operations</p>
                </div>
                <div className="p-4 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-300">Set Yield Parameters</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-400">APY (%)</label>
                        <input
                          type="number"
                          placeholder="New APY"
                          value={newApy ?? ""}
                          onChange={(e) => setNewApy(Number(e.target.value))}
                          className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Yield Amplifier</label>
                        <input
                          type="number"
                          placeholder="New Amplifier"
                          value={newYieldAmplifier ?? ""}
                          onChange={(e) => setNewYieldAmplifier(Number(e.target.value))}
                          className="w-full bg-gray-800 border border-gray-700 text-white p-2 rounded"
                        />
                      </div>
                    </div>
                    <button
                      onClick={handleSetParameters}
                      disabled={loadingButton !== null}
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                      {loadingButton === "Set Parameters" ? (
                        <span className="flex items-center">
                          <Loader2 className="animate-spin mr-2 h-4 w-4" />
                          Setting Parameters...
                        </span>
                      ) : (
                        "Set Parameters"
                      )}
                    </button>
                  </div>

                  <hr className="border-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-300">Fund Yield Reserves</h3>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        placeholder="Amount of USDC"
                        value={fundYield ?? ""}
                        onChange={(e) => setFundYield(Number(e.target.value))}
                        className="bg-gray-800 border border-gray-700 text-white p-2 rounded w-full"
                      />
                      <button
                        onClick={() => setFundYield(usdc)}
                        className="px-4 py-2 text-sm border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white rounded"
                      >
                        Max
                      </button>
                    </div>
                    <button
                      onClick={handleFundYieldReserves}
                      disabled={loadingButton !== null || !fundYield}
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded"
                    >
                      {loadingButton === "Fund Reserves" ? (
                        <span className="flex items-center">
                          <Loader2 className="animate-spin mr-2 h-4 w-4" />
                          Funding...
                        </span>
                      ) : (
                        "Fund Reserves"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yield;
