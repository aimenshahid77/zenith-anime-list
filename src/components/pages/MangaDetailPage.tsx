import MangaCharacterSection from "../features/manga/MangaCharacterSection";
import MangaDetails from "../features/manga/MangaDetails";
import { useParams } from "react-router-dom";
import { useMangaCharacters } from "@/hooks/useAnime";
import { useMangaRecommendations } from "@/hooks/useAnime";
import MangaRecommendations from "../features/manga/MangaRecommendations";

function MangaDetailPage() {
  const { id } = useParams();
  const { mangaCharacters } = useMangaCharacters(Number(id));
  const { mangaRecommendations } = useMangaRecommendations(Number(id));
  console.log(mangaCharacters.data?.data);
  console.log(mangaRecommendations.data?.data);

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white">
      <MangaDetails />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <MangaCharacterSection
          characterlist={mangaCharacters.data?.data}
          isLoading={mangaCharacters.isLoading}
        />

        {mangaRecommendations.data?.data?.length > 0 && (
          <MangaRecommendations
            recommendationlist={mangaRecommendations.data?.data}
            isloading={mangaRecommendations.isLoading}
          />
        )}
      </div>
    </div>
  );
}

export default MangaDetailPage;
