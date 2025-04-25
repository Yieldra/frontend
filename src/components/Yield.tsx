const Yield = () => {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-slate-50 rounded-lg shadow-lg">
      {/* Account Information */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-blue-50 rounded">
            <p className="text-sm text-gray-600">USDC Balance</p>
            <p className="text-xl font-medium">{10000} USDC</p>
          </div>
          <div className="p-3 bg-green-50 rounded">
            <p className="text-sm text-gray-600">YieldUSD Balance</p>
            <p className="text-xl font-medium">{100} yUSD</p>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <p className="text-sm text-gray-600">Current Deposit</p>
            <p className="text-xl font-medium">{5} USDC</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded">
            <p className="text-sm text-gray-600">Earned Yield</p>
            <p className="text-xl font-medium">{123} yUSD</p>
          </div>
        </div>
      </div>

      {/* Contract Information */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Protocol Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-indigo-50 rounded">
            <p className="text-sm text-gray-600">Current APY</p>
            <p className="text-xl font-medium">{15}%</p>
          </div>
          <div className="p-3 bg-pink-50 rounded">
            <p className="text-sm text-gray-600">Yield Amplifier</p>
            <p className="text-xl font-medium">{100}x</p>
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
              value={0}
              onChange={(e) => {}}
              className="flex-grow p-2 border border-gray-300 rounded"
              disabled={false}
            />
            <button
              onClick={() => {}}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
              disabled={false}
            >
              Approve
            </button>
            <button
              onClick={() => {}}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              disabled={false}
            >
              Deposit
            </button>
          </div>
        </div>

        {/* Withdraw */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Withdraw USDC</h3>
          <button
            onClick={() => {}}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            disabled={false}
          >
            Withdraw All
          </button>
        </div>

        {/* Claim USDC Faucet */}
        <div>
          <h3 className="font-medium mb-2">Claim Test USDC</h3>
          <button
            onClick={() => {}}
            className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
            disabled={false}
          >
            Claim USDC Faucet
          </button>
        </div>
      </div>

      {/* Admin Functions */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow border-t-4 border-red-500">
        <h2 className="text-xl font-semibold mb-4">Admin Functions</h2>

        {/* Set Yield Parameters */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Set Yield Parameters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <input
              type="number"
              placeholder="New APY (%)"
              value={10}
              onChange={(e) => {}}
              className="p-2 border border-gray-300 rounded"
              disabled={false}
            />
            <input
              type="number"
              placeholder="New Amplifier"
              value={0}
              onChange={(e) => {}}
              className="p-2 border border-gray-300 rounded"
              disabled={false}
            />
          </div>
          <button
            onClick={() => {}}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
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
              value={0}
              onChange={(e) => {}}
              className="flex-grow p-2 border border-gray-300 rounded"
              disabled={false}
            />
            <button
              onClick={() => {}}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
              disabled={false}
            >
              Fund Reserves
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Yield;
