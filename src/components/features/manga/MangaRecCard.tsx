import { Link } from "react-router-dom";
import { Play, HelpCircle } from "lucide-react";

function MangaRecCard({ recommendation }: { recommendation: any }) {
  return (
    <Link
      to={`/details/manga/${recommendation.entry.mal_id}`}
      className="flex-shrink-0 group w-44 sm:w-52 cursor-pointer transition-transform duration-300 hover:-translate-y-2 active:scale-95"
    >
      <div className="relative aspect-[2/3] rounded-3xl overflow-hidden shadow-xl border border-white/5 mb-3">
        <img
          src={recommendation.entry.images.jpg.image_url}
          alt={recommendation.entry.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top Right Icons */}
        <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 bg-black/60 backdrop-blur-md rounded-lg flex items-center justify-center text-white/80 border border-white/10 hover:bg-black/80">
            <Play size={14} fill="currentColor" />
          </div>
          <div className="w-8 h-8 bg-black/60 backdrop-blur-md rounded-lg flex items-center justify-center text-white/80 border border-white/10 hover:bg-black/80">
            <HelpCircle size={14} />
          </div>
        </div>
      </div>

      {/* Title below image */}
      <div className="px-2">
        <p className="text-white text-xs font-black leading-tight line-clamp-2 text-center group-hover:text-blue-400 transition-colors">
          {recommendation.entry.title}
        </p>
      </div>
    </Link>
  );
}

export default MangaRecCard;
