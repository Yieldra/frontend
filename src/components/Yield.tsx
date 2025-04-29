import { wagmiContractITestUSDCConfig, wagmiContractTestUSDCConfig, wagmiContractYieldUSDCConfig } from '@/services/contract';
import { useEffect, useState } from 'react';
import { formatUnits } from 'viem';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Yield = () => {
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
      setApy(parseFloat(formatUnits(currentApy, 6)));
    }
  }, [currentApy]);

  const { data: yieldAmp } = useReadContract({
    ...wagmiContractYieldUSDCConfig,
    functionName: 'yieldAmplifier',
    query: { refetchInterval: 10000 },
  });

  useEffect(() => {
    if (typeof yieldAmp === 'bigint') {
      setYieldAmplifier(parseFloat(formatUnits(yieldAmp, 6)));
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
    executeContract('Approve', {
      ...wagmiContractYieldUSDCConfig,
      functionName: 'approve',
      args: [address, BigInt(depositUSDC)],
    });
  };

  const handleDeposit = () => {
    console.log(BigInt(depositUSDC))
    if (!depositUSDC) return toast.warn('Set amount first!');
    executeContract('Deposit', {
      ...wagmiContractYieldUSDCConfig,
      functionName: 'deposit',
      args: [BigInt(depositUSDC)],
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
    <main className="max-w-4xl mx-auto p-6 bg-slate-50 rounded-lg shadow-lg">
      {/* Account Information */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-blue-50 rounded">
            <p className="text-sm text-gray-600">USDC Balance</p>
            <p className="text-xl font-medium">{usdc} USDC</p>
          </div>
          <div className="p-3 bg-green-50 rounded">
            <p className="text-sm text-gray-600">YieldUSD Balance</p>
            <p className="text-xl font-medium">{yusdc} yUSD</p>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <p className="text-sm text-gray-600">Current Deposit</p>
            <p className="text-xl font-medium">{deposit} USDC</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded">
            <p className="text-sm text-gray-600">Earned Yield</p>
            <p className="text-xl font-medium">{yieldAmount} yUSD</p>
          </div>
        </div>
      </div>

      {/* Contract Information */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Protocol Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-indigo-50 rounded">
            <p className="text-sm text-gray-600">Current APY</p>
            <p className="text-xl font-medium">{apy}%</p>
          </div>
          <div className="p-3 bg-pink-50 rounded">
            <p className="text-sm text-gray-600">Yield Amplifier</p>
            <p className="text-xl font-medium">{yieldAmplifier}x</p>
          </div>
        </div>
      </div>

      {/* User Actions */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Basic Operations</h2>

        {/* Deposit */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Deposit USDC</h3>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="number"
              placeholder="Amount of USDC"
              value={depositUSDC}
              onChange={(e) => setDepositUSDC(Number(e.target.value))}
              className="flex-grow p-2 border border-gray-300 rounded"
              disabled={false}
            />
            <button
              onClick={handleApprove}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition disabled:opacity-50"
              disabled={loadingButton !== null}
            >
              {loadingButton === 'Approve' ? 'Approving...' : 'Approve'}
            </button>
            <button
              onClick={handleDeposit}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition disabled:opacity-50"
              disabled={loadingButton !== null}
            >
              {loadingButton === 'Deposit' ? 'Depositing...' : 'Deposit'}
            </button>
          </div>
        </div>

        {/* Withdraw */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Withdraw USDC</h3>
          <button
            onClick={handleWithdraw}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
            disabled={loadingButton !== null}
          >
            {loadingButton === 'Withdraw' ? 'Withdrawing...' : 'Withdraw All'}
          </button>
        </div>

        {/* Claim USDC Faucet */}
        <div>
          <h3 className="font-medium mb-2">Claim Test USDC</h3>
          <button
            onClick={handleClaim}
            className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
            disabled={false}
          >
            Claim USDC Faucet
          </button>
        </div>
      </div>

      {/* Admin Functions */}
      {isOwner && (
        <div className="mb-8 p-4 bg-white rounded-lg shadow border-t-4 border-red-500">
          <h2 className="text-xl font-semibold mb-4">Admin Functions</h2>

          {/* Set Yield Parameters */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Set Yield Parameters</h3>
            <div className="flex w-full gap-2 flex-col md:flex-row">
              <div>
                <p>APY</p>
                <input
                  type="number"
                  placeholder="New APY (%)"
                  value={newApy}
                  onChange={(e) => setNewApy(Number(e.target.value))}
                  className="p-2 border border-gray-300 rounded"
                  disabled={false}
                />
              </div>
              <div>
                <p>Yield Amplifier</p>
                <input
                  type="number"
                  placeholder="New Amplifier"
                  value={newYieldAmplifier}
                  onChange={(e) => setNewYieldAmplifier(Number(e.target.value))}
                  className="p-2 border border-gray-300 rounded"
                  disabled={false}
                />
              </div>
            </div>
            <button
              onClick={handleSetParameters}
              className="bg-red-500 text-white px-6 py-2 mt-4 rounded hover:bg-red-600 transition"
              disabled={false}
            >
              Set Parameters
            </button>
          </div>

          {/* Fund Yield Reserves */}
          <div>
            <h3 className="font-medium mb-2">Fund Yield Reserves</h3>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="number"
                placeholder="Amount of USDC"
                value={fundYield}
                onChange={(e) => setFundYield(Number(e.target.value))}
                className="flex-grow p-2 border border-gray-300 rounded"
                disabled={false}
              />
              <button
                onClick={handleFundYieldReserves}
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition disabled:opacity-50"
                disabled={loadingButton !== null}
              >
                {loadingButton === 'Fund Reserves' ? 'Funding...' : 'Fund Reserves'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Yield;
