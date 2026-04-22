import { useRef } from "react";
import MangaRecCard from "./MangaRecCard";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useMangaDetails } from "@/hooks/useAnime";

function MangaRecommendations({
  recommendationlist,
  isloading,
}: {
  recommendationlist: any[];
  isloading: boolean;
}) {
  const { id } = useParams();
  const { mangaDetails } = useMangaDetails(Number(id));
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -500 : 500;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative space-y-8">
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
          <Sparkles size={12} className="text-blue-500" />
          Personalized
        </span>
        <h2 className="text-3xl font-black">
          Because you liked{" "}
          <span className="text-blue-500">
            {mangaDetails.data?.data.title || "this manga"}
          </span>
        </h2>
        <Link
          to="#"
          className="text-blue-500 text-[10px] font-black uppercase tracking-widest mt-2 hover:underline"
        >
          View All Recommendations &rsaquo;
        </Link>
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
          {isloading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-44 sm:w-52 aspect-[2/3] bg-slate-800/20 rounded-3xl animate-pulse flex-shrink-0"
                />
              ))
            : recommendationlist?.map((recommendation: any) => (
                <MangaRecCard
                  key={recommendation.entry.mal_id}
                  recommendation={recommendation}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default MangaRecommendations;
