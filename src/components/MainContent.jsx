import React from "react";

export default function MainContent() {
  return (
    <section>
      {/* Example welcome message */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Dashboard Overview</h2>
        <p className="text-gray-400">
          Here you can see a quick overview of your logistics operations.
        </p>
      </div>

      {/* Example info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-1">Total Shipments</h3>
          <p className="text-3xl font-bold">1254</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-1">On-Time Deliveries</h3>
          <p className="text-3xl font-bold">1120</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-1">Delayed Shipments</h3>
          <p className="text-3xl font-bold">134</p>
        </div>
      </div>

      {/* Placeholder for charts or tables */}
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Shipments Trend</h3>
        <p className="text-gray-400">[Charts or Graphs go here]</p>
      </div>
    </section>
  );
}
