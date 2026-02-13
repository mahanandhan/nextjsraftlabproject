import Link from "next/link";
import { User, ArrowUpRight, ShieldCheck } from "lucide-react";

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

export default function PlayerCard({ player, index }: any) {
  return (
    <Link href={`/players/${player.id}`}>
      <div
        style={{ animationDelay: `${index * 50}ms` }}
        className="animate-reveal opacity-0 fill-mode-forwards group bg-white border border-zinc-200 rounded-[2rem] p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-100/50 hover:border-emerald-500/30"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
            <User className="w-7 h-7" />
          </div>
          <ShieldCheck className="w-5 h-5 text-zinc-300 group-hover:text-emerald-500 transition" />
        </div>

        <div className="mb-6">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">
            {player.role}
          </span>
          <h3 className="text-2xl font-black text-zinc-900 mt-1">
            {player.name}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatMini label="Runs" value={player.runs} />
          <StatMini label="Average" value={player.average} />
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-4 bg-zinc-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-emerald-600 transition">
          View Profile <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </Link>
  );
}

function StatMini({ label, value }: any) {
  return (
    <div className="bg-zinc-50 p-3 rounded-2xl">
      <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-lg font-black text-zinc-900">{value}</p>
    </div>
  );
}
