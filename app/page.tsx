import { Desktop } from "@/components/desktop";
import { GameZero } from "@/components/game-0";
import { GPT4o } from "@/components/gpt-4o";
import { SchoolSong } from "@/components/song";
import { SourceCodeLeakage } from "@/components/source";

export default function Home() {
  return (
    <div>
      <div className="border-b border-border h-16 flex items-center">
        <div className="container mx-auto flex items-center justify-between ">
          <p className="text-2xl font-bold tracking-wide">
            Let's Hack <span className="text-red-500 mr-1">LKT</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 mx-auto container py-8 gap-4">
        <GameZero />
        <GPT4o />
        <SchoolSong />
        <SourceCodeLeakage />
        <Desktop />
      </div>
    </div>
  );
}
