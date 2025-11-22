import React, { useState } from "react";

const MarketPrices = () => {
  const [commodity, setCommodity] = useState("Onion");
  const [state, setState] = useState("Rajasthan");

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Market Prices (APMC)
        </h1>
        <p className="text-gray-600 mb-8">
          Real-time mandi prices using authenticated Government API.
        </p>

        {/* Filters Box */}
        <div className="bg-white p-6 mb-8 rounded-xl shadow border space-y-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600">Commodity</label>
              <input
                type="text"
                value={commodity}
                onChange={(e) => setCommodity(e.target.value)}
                className="w-full bg-gray-100 p-3 mt-1 rounded-lg outline-none"
              />
            </div>

            <div>
              <label className="text-gray-600">State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-gray-100 p-3 mt-1 rounded-lg outline-none"
              />
            </div>
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Fetch Prices
          </button>
        </div>

        {/* Empty State */}
        <div className="bg-white p-10 text-center rounded-xl shadow border">
          <p className="text-gray-500 text-lg">Enter filters & click Fetch Prices.</p>
        </div>

      </div>
    </div>
  );
};

export default MarketPrices;
