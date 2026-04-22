import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Anime } from "../anime/AnimeCard";
import AnimeCard from "../anime/AnimeCard";

interface TrendingAnime {
  animeList: Anime[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function TrendingAnimeSection({
  animeList,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
}: TrendingAnime) {
  return (
    <div className="min-h-[400px]">
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 gap-x-12 gap-y-12">
            {animeList?.slice(0, 24).map((anime: Anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} mediaType="anime" />
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-12 pb-8 text-sm font-bold">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-800/40 hover:bg-slate-800/60 border border-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            {[1, 2, 3, 4, 5].map((page: number) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center border border-white/5 transition-all ${
                  currentPage === page
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="text-slate-600 px-1 font-bold tracking-widest">
              ...
            </span>

            <button
              onClick={() => onPageChange(totalPages)}
              className={`w-14 h-10 rounded-lg flex items-center justify-center border border-white/5 transition-all ${
                currentPage === totalPages
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800/40 text-slate-400 hover:text-white"
              }`}
            >
              {totalPages}
            </button>

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-800/40 hover:bg-slate-800/60 border border-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrendingAnimeSection;
