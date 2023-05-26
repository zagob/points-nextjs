import { Calendar } from "@/components/Calendar";

export default function Dashboard() {
  return (
    <main className="w-full min-h-screen bg-zinc-800 text-zinc-100">
      <div className="grid min-h-screen">
        {/* Add Point */}
        <div>
          <Calendar />
        </div>

        {/* Table */}
        <div>table</div>

        {/* Graph */}
        <div>graph</div>
      </div>
    </main>
  );
}
