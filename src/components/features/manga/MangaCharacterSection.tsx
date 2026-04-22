import { ChevronLeft, ChevronRight } from "lucide-react";
import MangaCharacterCard, { type Character } from "./MangaCharacterCard";
import { useRef } from "react";
interface CharacterSectionProps {
  characterlist: Character[];
  isLoading: boolean;
}

function MangaCharacterSection({
  characterlist,
  isLoading,
}: CharacterSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative space-y-8">
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
          <span className="w-6 h-[1px] bg-slate-800" />
          Cast & Characters
        </span>
        <h2 className="text-3xl font-black">
          Choose Your Favorite <span className="text-blue-500">Characters</span>
        </h2>
      </div>

      <div className="relative group">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/5 flex items-center justify-center text-white hover:bg-slate-800 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/5 flex items-center justify-center text-white hover:bg-slate-800 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x"
        >
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-40 sm:w-48 aspect-[2/3] bg-slate-800/20 rounded-3xl animate-pulse flex-shrink-0"
                />
              ))
            : characterlist?.map((character: any) => (
                <MangaCharacterCard
                  key={character.character.mal_id}
                  character={character}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default MangaCharacterSection;
