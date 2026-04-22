import { useParams } from "react-router-dom";
import { useCharacterDetails } from "@/hooks/useAnime";
import MediaCard from "@/components/ui/MediaCard";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Heart, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CharacterDetail() {
  const { id } = useParams();
  const AnimescrollRef = useRef<HTMLDivElement>(null);
  const MangascrollRef = useRef<HTMLDivElement>(null);
  const { characterDetails } = useCharacterDetails(Number(id));
  const navigate = useNavigate();

  if (characterDetails.isLoading) {
    return (
      <div className="min-h-screen bg-[#0b121e] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (characterDetails.isError || !characterDetails.data?.data) {
    return (
      <div className="min-h-screen bg-[#0b121e] flex items-center justify-center text-white p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Error loading character data.
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-500 hover:underline"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const scroll = (direction: "left" | "right") => {
    if (AnimescrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      AnimescrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scroll2 = (direction: "left" | "right") => {
    if (MangascrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      MangascrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const data = characterDetails.data.data;
  console.log(data.images.jpg.image_url);

  const isFromManga = data.anime.length === 0 && data.manga.length > 0;
  const sourceTitle = isFromManga
    ? data.manga[0]?.manga.title
    : data.anime[0]?.anime.title;
  const sourceLabel = isFromManga ? "Manga" : "Anime";

  return (
    <div className="min-h-screen bg-[#0b121e] text-white p-6 md:p-12 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-10 group"
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-bold text-sm">Back</span>
        </button>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-24">
          <div className="shrink-0 w-full md:w-[350px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
              <img
                src={data.images.jpg.image_url}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 mt-8">
              <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white hover:bg-white/10 transition-all active:scale-95">
                <Heart size={16} />
                <span className="font-black text-sm">Favourite</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white hover:bg-white/10 transition-all active:scale-95">
                <Share size={16} />
                <span className="font-black text-sm">Share</span>
              </button>
            </div>
          </div>

          <div className="flex-1 pt-6">
            <p className="text-blue-500 font-black tracking-[0.3em] text-[13px] uppercase mb-4">
              FROM {sourceTitle ? `${sourceLabel} ${sourceTitle}` : sourceLabel}
            </p>
            <h1 className="text-6xl md:text-8xl font-black mb-2 tracking-tighter leading-[0.9]">
              {data.name}
            </h1>
            <p className="text-3xl font-medium text-gray-100 mb-8 opacity-90">
              {data.name_kanji}
            </p>

            <div className="inline-flex items-center gap-2 bg-[#0a101d] border border-white/5 pr-5 pl-4 py-2.5 rounded-xl shadow-xl mb-12">
              <Heart size={16} className="fill-blue-500 text-blue-500" />
              <span className="text-[13px] font-black text-white">
                {data.favorites.toLocaleString()} Favorites
              </span>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-tight">
                About Character
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl whitespace-pre-line text-[17px] font-medium opacity-80">
                {data.about || "No description available."}
              </p>
            </div>
            {/* Character Notes Section */}
            <div className=" space-y-6 mt-24 ">
              <h3 className="text-3xl font-black tracking-tight">
                Character notes
              </h3>
              <div className="bg-[#0f172a]/50 border border-white/5 rounded-[2.5rem] p-8 max-w-3xl backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Add a note"
                    className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-600"
                  />
                  <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-blue-500/20 whitespace-nowrap">
                    Add note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appears in Anime */}
        {data.anime.length > 0 && (
          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 tracking-tight">
              Appears In <span className="text-blue-400">Anime</span>
            </h2>
            <div className="relative group/scroll">
              <button
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-3 shadow-2xl opacity-0 group-hover/scroll:opacity-100 transition-all hover:scale-110 active:scale-90"
                onClick={() => scroll("left")}
              >
                <ChevronLeft size={24} />
              </button>

              <div
                className="flex gap-8 overflow-x-auto scrollbar-hide pb-6 snap-x"
                ref={AnimescrollRef}
              >
                {data.anime.map((anime: any, index: number) => (
                  <div key={`anime-${index}`} className="shrink-0 snap-start">
                    <MediaCard
                      title={anime.anime.title}
                      role={anime.role}
                      imageUrl={anime.anime.images.jpg.large_image_url}
                      mal_id={anime.anime.mal_id}
                      mediaType="anime"
                    />
                  </div>
                ))}
              </div>

              <button
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-3 shadow-2xl opacity-0 group-hover/scroll:opacity-100 transition-all hover:scale-110 active:scale-90"
                onClick={() => scroll("right")}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}

        {/* Appears in Manga */}
        {data.manga.length > 0 && (
          <div className="mb-24">
            <h2 className="text-4xl font-black mb-12 tracking-tight">
              Appears In <span className="text-blue-400">Manga</span>
            </h2>
            <div className="relative group/scroll">
              <button
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-3 shadow-2xl opacity-0 group-hover/scroll:opacity-100 transition-all hover:scale-110 active:scale-90"
                onClick={() => scroll2("left")}
              >
                <ChevronLeft size={24} />
              </button>

              <div
                className="flex gap-8 overflow-x-auto scrollbar-hide pb-6 snap-x"
                ref={MangascrollRef}
              >
                {data.manga.map((manga: any, index: number) => (
                  <div key={`manga-${index}`} className="shrink-0 snap-start">
                    <MediaCard
                      title={manga.manga.title}
                      role={manga.role}
                      imageUrl={manga.manga.images.jpg.large_image_url}
                      mal_id={manga.manga.mal_id}
                      mediaType="manga"
                    />
                  </div>
                ))}
              </div>

              <button
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-3 shadow-2xl opacity-0 group-hover/scroll:opacity-100 transition-all hover:scale-110 active:scale-90"
                onClick={() => scroll2("right")}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterDetail;
