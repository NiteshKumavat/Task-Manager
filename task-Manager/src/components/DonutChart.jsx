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
      <PieChart width={300} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={105}
          outerRadius={150}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      <div className="select-task">
        <label htmlFor="task-select" id="task-select-label">Select Task:</label>
        <select id="task-select">
          <option value="task1">Task 1</option>
          <option value="task2">Task 2</option>
          <option value="task3">Task 3</option>
        </select>
      </div>
    </div>
  );
};

export default DonutChart;


