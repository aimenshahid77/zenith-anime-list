import { Heart, Play, Plus, Star } from "lucide-react";

 export interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  score: number;
  episodes: number;
  status: string;
  aired: {
    from: string;
    to: string;
  };
  rating: string;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  type: string;
  genres: {
    mal_id: number;
    name: string;
  }[];
}

function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <div className="w-[180px] sm:w-[200px] flex flex-col gap-2 group cursor-pointer font-['Poppins']">
      <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden bg-slate-800">
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {anime.episodes && (
          <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-white text-[11px] font-medium z-10 transition-opacity duration-300 group-hover:opacity-0">
            <Play size={10} className="fill-white" />
            <span>{anime.episodes}</span>
          </div>
        )}

        {/* Full Hover Information Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 z-0">
          
          {/* Action row (Type, Rating, Fav, Add) */}
          <div className="flex items-center gap-2 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded">
              {anime.type ? anime.type.toUpperCase() : "ANIME"}
            </span>
            
            {anime.score && (
              <div className="flex items-center gap-1 font-bold text-[12px] text-[#fbbf24] ml-1">
                <Star size={14} className="fill-[#fbbf24] text-[#fbbf24]" />
                {anime.score}
              </div>
            )}

            <div className="flex-1" />

            <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors">
              <Heart size={14} className="text-white" />
            </button>
            <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors">
              <Plus size={16} className="text-white" />
            </button>
          </div>

          <h4 className="text-[14px] font-bold text-white leading-tight mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-50 line-clamp-2">
            {anime.title}
          </h4>

          {anime.synopsis && (
            <p className="text-[11px] text-slate-300 line-clamp-3 leading-snug translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {anime.synopsis}
            </p>
          )}

        </div>
      </div>

      <div className="flex flex-col gap-0.5 px-1 mt-1">
        <h3
          className="text-[14px] font-semibold text-slate-50 truncate w-full"
          title={anime.title}
        >
          {anime.title}
        </h3>

        <div className="flex items-center gap-2 text-[11px] font-medium mt-0.5">
          <span className="text-blue-400 uppercase tracking-wider">
            {anime.type || "TV"}
          </span>
          <span className="text-slate-50">{anime.status}</span>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
