import { useHomeData } from "@/hooks/useAnime";
import AnimeSection from "../features/home/AnimeSection";
import { Flame, BookOpen, Calendar } from "lucide-react"
import HeroBanner from "../features/home/HeroBanner";

function HomePage() {
  const { topAnime, topManga, currentlyAiring } = useHomeData();
  



  return (
    <div className="pt-18.5 pb-8">
      {topAnime.data?.data[0] && (
        <HeroBanner anime={topAnime.data.data[0]} />
      )}
      <AnimeSection
        title="Currently Airing"
        icon={Calendar}
        subtitle="The hottest shows of the season"
        viewAllLink="/airing"
        animeList={currentlyAiring.data?.data}
        isLoading={currentlyAiring.isLoading}
      />
      <AnimeSection
        title="Top Anime"
        icon={Flame}
        subtitle="All-time favorites and classics"
        viewAllLink="/anime"
        animeList={topAnime.data?.data}
        isLoading={topAnime.isLoading}
      />
      <AnimeSection
        title="Top Manga"
        icon={BookOpen}
        subtitle="Masterpieces in print"
        viewAllLink="/manga"
        animeList={topManga.data?.data}
        isLoading={topManga.isLoading}
      />
    </div>
  );
}

export default HomePage;
