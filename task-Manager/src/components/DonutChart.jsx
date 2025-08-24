import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "./DountChart.css";

const DonutChart = ({ completed, incomplete }) => {
  const data = [
    { name: "Completed", value: completed },
    { name: "Incomplete", value: incomplete },
  ];

  const COLORS = ["#4CAF50", "#FF5252"]; // Green + Red

  return (
    <div className="chart-container">
      <h2 className="chart-title">Subtask Progress</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default DonutChart;


