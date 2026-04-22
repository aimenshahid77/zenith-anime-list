import type { Anime } from "../anime/AnimeCard";

interface HeroBannerProps {
  anime: Anime;
}

function HeroBanner({ anime }: HeroBannerProps) {
  return (
    <div
      className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1240px] h-[450px] md:h-[500px] rounded-[32px] overflow-hidden mx-auto mb-10 font-['Poppins']"
      style={{
        backgroundImage: `url(${anime.images.jpg.large_image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradients for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 w-full md:w-2/3 lg:w-3/5">
        {/* Huge Title */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-4 line-clamp-2">
          {anime.title.split(":")[0]}{" "}
          {/* Often titles have secondary parts, keeping it clean like the screenshot */}
        </h1>

        {/* Genre Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {anime.genres?.slice(0, 3).map((genre) => (
            <span
              key={genre.mal_id}
              className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-wider"
            >
              {genre.name}
            </span>
          ))}
        </div>

        {/* Synopsis */}
        <p className="text-slate-300 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4 mb-8 pr-4">
          {anime.synopsis}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-6 md:px-8 py-3 rounded-2xl md:rounded-3xl font-bold text-xs md:text-sm tracking-wide hover:bg-slate-200 transition-colors">
            START WATCHING
          </button>

          {anime.rank && (
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl md:rounded-3xl text-white font-bold text-xs md:text-sm">
              <span className="text-[#f97316]">🔥</span> #{anime.rank}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
