import React from "react";
import sampleProducts from "../data/sampleProducts";

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Agricultural Products
        </h1>
        <p className="text-gray-600 mb-6">
          Fresh and verified farm produce across India.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sampleProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl border p-3 shadow-sm hover:shadow-md transition"
            >
              <img
                src={p.image}
                className="w-full h-40 object-cover rounded-lg mb-3"
                alt={p.name}
              />

              <h3 className="font-semibold text-gray-800">{p.name}</h3>

              <p className="text-green-700 font-semibold text-sm">
                ₹{p.pricePerKg}/Kg
              </p>

              <p className="text-xs text-gray-500">{p.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
