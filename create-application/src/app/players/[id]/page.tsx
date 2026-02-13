import PlayerStatsChart from "@/app/components/PlayerStatsChart";
import players from "@/data/players.json";
import { notFound } from "next/navigation";

/* ---------------------------
   Types
---------------------------- */

interface Props {
  params: Promise<{ id: string }>;
}

/* ---------------------------
   Dynamic Metadata (SEO)
---------------------------- */

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const player = players.find(
    (p) => p.id === parseInt(id)
  );

  if (!player) return {};

  return {
    title: `${player.name} - Stats & Profile`,
    description: `View ${player.name} stats, matches, runs and performance.`,
    openGraph: {
      title: `${player.name} - Cricket Profile`,
      description: `Complete stats of ${player.name}`,
      images: [player.image],
    },
  };
}

/* ---------------------------
   Page Component
---------------------------- */

export default async function PlayerPage({ params }: Props) {
  const { id } = await params;
  const player = players.find(
    (p) => p.id === parseInt(id)
  );

  if (!player) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: player.name,
    jobTitle: player.role,
    affiliation: player.team,
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-zinc-900 px-6 lg:px-12 py-16 selection:bg-emerald-600 selection:text-white">

      {/* Animation Styles */}
      <style>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: reveal 0.8s cubic-bezier(0.2,0.8,0.2,1) forwards;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="animate-reveal flex flex-col lg:flex-row items-center gap-16 mb-20 opacity-0">

          {/* Player Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-[2rem] blur-3xl"></div>
            <img
              src={player.image}
              alt={player.name}
              className="relative w-72 h-72 object-cover rounded-[2rem] shadow-2xl border border-zinc-100"
            />
          </div>

          {/* Player Info */}
          <div className="max-w-xl">
            <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.3em]">
              {player.role}
            </span>

            <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mt-4 mb-6 leading-tight">
              {player.name}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm font-semibold text-zinc-500">
              <span className="bg-zinc-100 px-4 py-2 rounded-full">
                Team: {player.team}
              </span>
              <span className="bg-zinc-100 px-4 py-2 rounded-full">
                Matches: {player.matches}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-reveal opacity-0 [animation-delay:200ms]">
          <StatCard label="Total Runs" value={player.runs} />
          <StatCard label="Batting Average" value={player.average} />
          <StatCard label="Strike Rate" value={player.strikeRate} />
          <StatCard label="Matches Played" value={player.matches} />
        </div>

        {/* Performance Insight */}
        <div className="mt-20 animate-reveal opacity-0 [animation-delay:400ms]">
          <div className="bg-white border border-zinc-200 rounded-[2rem] p-10 shadow-xl">

            <h2 className="text-2xl font-black mb-6">
              Performance Overview
            </h2>

            <p className="text-zinc-500 leading-relaxed max-w-3xl">
              {player.name} has demonstrated consistent performance in
              international cricket. With a batting average of{" "}
              <strong>{player.average}</strong> and a strike rate of{" "}
              <strong>{player.strikeRate}</strong>, the player remains
              a key asset for <strong>{player.team}</strong>.
            </p>

          </div>
          <PlayerStatsChart
            matches={player.matches}
            runs={player.runs}
            average={player.average}
            strikeRate={player.strikeRate}
            />
        </div>

      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

/* ---------------------------
   Reusable Stat Card
---------------------------- */

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="group bg-white border border-zinc-200 rounded-[2rem] p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-100/50 hover:border-emerald-500/30 transition-all duration-500">
      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-3">
        {label}
      </p>
      <p className="text-4xl font-black text-zinc-900 group-hover:text-emerald-600 transition-colors">
        {value}
      </p>
    </div>
  );
}
