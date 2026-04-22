import AnimeDetails from "../features/anime/AnimeDetails";
import AnimeRecommendations from "../features/anime/AnimeRecommendations";
import CharacterSection from "../features/anime/CharacterSection";
import { useAnimeCharacters, useAnimeRecommendations } from "@/hooks/useAnime";
import { useParams } from "react-router-dom";

function AnimeDetailPage() {
  const { id } = useParams();
  const { animeCharacters } = useAnimeCharacters(Number(id));
  const { animeRecommendations } = useAnimeRecommendations(Number(id));
  console.log(animeCharacters.data?.data);

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white">
      <AnimeDetails />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <CharacterSection
          characterlist={animeCharacters.data?.data}
          isLoading={animeCharacters.isLoading}
        />

        {animeRecommendations.data?.data?.length > 0 && (
          <AnimeRecommendations
            recommendationlist={animeRecommendations.data?.data}
            isloading={animeRecommendations.isLoading}
          />
        )}
      </div>
    </div>
  );
}

export default AnimeDetailPage;
