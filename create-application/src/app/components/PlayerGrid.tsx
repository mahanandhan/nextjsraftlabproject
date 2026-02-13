"use client";

import { useState, useMemo } from "react";
import players from "@/data/players.json";
import PlayerCard from "./PlayerCard";

interface Player {
  id: number;
  name: string;
  team: string;
  role: string;
  matches: number;
  runs: number;
  average: number;
  strikeRate: number;
  image: string;
}

export default function PlayerGrid() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredPlayers = useMemo(() => {
    return players.filter((p: Player) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.team.toLowerCase().includes(search.toLowerCase());

      const matchesFilter = filter === "All" || p.role === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <>
      {/* 🔍 Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">

        <input
          type="text"
          placeholder="Search player or team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-xl"
          aria-label="Search players"
        />

        <div>
          <label htmlFor="roleFilter" className="sr-only">
            Filter by role
          </label>

          <select
            id="roleFilter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border px-4 py-2 rounded-xl"
          >
            <option value="All">All Roles</option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="All-Rounder">All-Rounder</option>
          </select>
        </div>
      </div>

      {/* 🏏 Player Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.slice(0, 12).map((player: Player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </>
  );
}
