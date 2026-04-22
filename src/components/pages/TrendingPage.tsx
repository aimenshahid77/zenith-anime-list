import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useTrendingAnime, useTrendingManga } from "@/hooks/useAnime";
import { Trophy, TrendingUp } from "lucide-react";
import TrendingAnimeSection from "../features/trending/TrendingAnimeSection";
import TrendingMangaSection from "../features/trending/TrendingMangaSection";
import { useParams } from "react-router-dom";
function TrendingPage() {
  const { section } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const animePage = Number(searchParams.get("animePage") ?? "1");
  const mangaPage = Number(searchParams.get("mangaPage") ?? "1");

  const { topTrendingAnime } = useTrendingAnime(animePage);
  const { topTrendingManga } = useTrendingManga(mangaPage);
  console.log(topTrendingAnime.data);
  const totalPages = {
    anime: topTrendingAnime.data?.pagination?.last_visible_page ?? 1,
    manga: topTrendingManga.data?.pagination?.last_visible_page ?? 1,
  };
  const animeSectionRef = useRef<HTMLElement>(null);
  const mangaSectionRef = useRef<HTMLElement>(null);

  const handleAnimePageChange = (newPage: number) => {
    setSearchParams(
      (prev) => {
        prev.set("animePage", newPage.toString());
        return prev;
      },
      { preventScrollReset: true },
    );
    animeSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMangaPageChange = (newPage: number) => {
    setSearchParams(
      (prev) => {
        prev.set("mangaPage", newPage.toString());
        return prev;
      },
      { preventScrollReset: true },
    );
    mangaSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (section === "manga" && !topTrendingManga.isLoading) {
      mangaSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [section, topTrendingManga.isLoading]);

  return (
    <div className="w-full  py-6 min-h-screen text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Anime Section */}
        <section ref={animeSectionRef} className="mb-8 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20">
              <Trophy className="text-orange-500" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight leading-none mb-1">
                Top Rated Anime
              </h1>
              <p className="text-slate-400 text-sm font-medium">
                The highest scored series on MAL
              </p>
            </div>
          </div>
          <TrendingAnimeSection
            animeList={topTrendingAnime.data?.data}
            isLoading={topTrendingAnime.isLoading}
            currentPage={animePage}
            totalPages={totalPages.anime}
            onPageChange={handleAnimePageChange}
          />
        </section>

        {/* Manga Section */}
        <section ref={mangaSectionRef} className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center border border-pink-500/20">
              <TrendingUp className="text-pink-500" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight leading-none mb-1">
                Top Rated Manga
              </h1>
              <p className="text-slate-400 text-sm font-medium">
                The most acclaimed literature
              </p>
            </div>
          </div>
          <TrendingMangaSection
            mangaList={topTrendingManga.data?.data}
            isLoading={topTrendingManga.isLoading}
            currentPage={mangaPage}
            totalPages={totalPages.manga}
            onPageChange={handleMangaPageChange}
          />
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-slate-800/50 text-center pb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-white italic">
            Z
          </div>
          <span className="font-bold tracking-tighter text-slate-300">
            ZENITH
          </span>
        </div>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">
          &copy; 2026 Zenith. Powered by Jikan API.
        </p>
        <div className="flex items-center justify-center gap-6 mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default TrendingPage;
