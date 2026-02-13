"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

interface Props {
  matches: number;
  runs: number;
  average: number;
  strikeRate: number;
}

export default function PlayerStatsChart({
  matches,
  runs,
  average,
  strikeRate,
}: Props) {

  // Find highest value for smart scaling
  const maxValue = Math.max(runs, matches, average, strikeRate);

  const data = [
    {
      name: "Total Runs",
      value: runs,
      color: "#22c55e",
    },
    {
      name: "Batting Average",
      value: average,
      color: "#3b82f6",
    },
    {
      name: "Strike Rate",
      value: strikeRate,
      color: "#f59e0b",
    },
    {
      name: "Matches Played",
      value: matches,
      color: "#ef4444",
    },
  ];

  return (
    <div className="mt-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 rounded-[2rem] p-10 shadow-2xl text-white">
      <h2 className="text-3xl font-black mb-10 tracking-tight">
        Performance Analytics
      </h2>

      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="4 4" stroke="#ffffff22" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#fff", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, maxValue]}
              tick={{ fill: "#fff", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              formatter={(value) => value}
              contentStyle={{
                backgroundColor: "#111827",
                borderRadius: "12px",
                border: "none",
                color: "#fff",
              }}
            />
            <Bar
              dataKey="value"
              radius={[12, 12, 0, 0]}
              animationDuration={1500}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
