import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const PriceTrendChart = ({ data }) => {
  const chartData = data.map((d) => ({
    date: d.arrivalDate,
    modal: Number(d.modalPrice),
    min: Number(d.minPrice),
    max: Number(d.maxPrice),
  }));

  return (
    <div className="mt-6 h-72 w-full">
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="modal" stroke="#16a34a" strokeWidth={2} />
          <Line type="monotone" dataKey="min" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="max" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceTrendChart;
