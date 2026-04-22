import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, type LucideIcon } from "lucide-react";
import type { Anime } from "../anime/AnimeCard";
import AnimeCard from "../anime/AnimeCard";
import { useRef } from "react";
interface AnimeSectionProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  viewAllLink: string;
  animeList: Anime[];
  isLoading: boolean;
  mediaType: "anime" | "manga";
}

const AnimeSection = ({
  title,
  subtitle,
  icon: Icon,
  viewAllLink,
  animeList,
  isLoading,
  mediaType,
}: AnimeSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <section className="mb-10 px-8 font-['Poppins']">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-start gap-4">
          <div className="bg-white/5 p-2.5 rounded-xl ml-1">
            <Icon size={22} className="text-slate-400" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-slate-50 tracking-wide">
              {title}
            </h2>
            <p className="text-[13px] text-slate-400 mt-0.5">{subtitle}</p>
          </div>
        </div>

        <Link
          to={viewAllLink}
          className="flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors mr-2"
        >
          View All
          <ChevronRight size={16} />
        </Link>
      </div>

      <div className="relative">
        <button
          onClick={() =>
            scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" })
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full p-2 -ml-4"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide snap-x"
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[180px] sm:w-[200px] aspect-[2/3] bg-slate-800/50 rounded-2xl animate-pulse flex-shrink-0"
                />
              ))
            : animeList?.map((anime) => (
                <div key={anime.mal_id} className="snap-start shrink-0">
                  <AnimeCard anime={anime} mediaType={mediaType} />
                </div>
              ))}
        </div>

        <button
          onClick={() =>
            scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" })
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full p-2 -mr-4"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default AnimeSection;
