"use client";
import { useState, useMemo } from "react";
import players from "@/data/players.json";
import PlayerCard from "./components/PlayerCard";

import {
  Trophy,
  Activity,
  Search,
  TrendingUp,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

export const Metadata = {
  title: "Cricket Player Directory",
  description: "Explore cricket player stats, teams and performance",
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredPlayers = useMemo(() => {
    return players.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.team.toLowerCase().includes(search.toLowerCase());

      const matchesFilter = filter === "All" || p.role === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-zinc-900 selection:bg-emerald-600 selection:text-white">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>

      {/* Sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-20 bg-white border-r border-zinc-100 flex-col items-center py-8 gap-10 z-50">
        <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
          <Trophy className="w-5 h-5" />
        </div>
      </div>

      <div className="lg:pl-20">

        {/* Header Section */}
        <section className="pt-20 pb-12 px-6 lg:px-12 border-b border-zinc-100 bg-white">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div className="max-w-3xl">
                <div className="animate-reveal inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full text-[10px] font-black text-emerald-700 uppercase tracking-widest mb-6">
                  <Activity className="w-3 h-3" /> Live Cricket Intelligence
                </div>

                <h1 className="animate-reveal text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-zinc-950 mb-8">
                  ELITE PLAYER <br />
                  <span className="text-emerald-600">ANALYTICS.</span>
                </h1>

                <p className="animate-reveal text-zinc-400 text-lg max-w-xl">
                  Professional-grade performance tracking and statistics
                  visualization for international cricket players.
                </p>
              </div>

              {/* Search & Filter */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative min-w-[280px]">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search player or team..."
                    className="w-full bg-zinc-100 rounded-[1.5rem] py-4 pl-14 pr-6 outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/10 text-sm font-semibold shadow-sm"
                  />
                </div>

                <div className="relative">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="appearance-none bg-white border border-zinc-200 rounded-[1.5rem] py-4 pl-6 pr-14 outline-none focus:border-emerald-500 text-sm font-bold uppercase tracking-widest shadow-sm"
                  >
                    <option value="All">All Roles</option>
                    <option value="Batsman">Batsman</option>
                    <option value="Bowler">Bowlers</option>
                    <option value="All-Rounder">All-Rounders</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-zinc-100">
              <Stat label="Total Players" value={players.length.toString()} />
              <Stat label="Avg Strike Rate" value="89.2" />
              <Stat label="Top Performer" value="Virat Kohli" />
              <Stat label="Active Teams" value="12+" />
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {filteredPlayers.map((player, index) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
        {label}
      </span>
      <span className="text-xl font-black text-zinc-900">
        {value}
      </span>
    </div>
  );
}
