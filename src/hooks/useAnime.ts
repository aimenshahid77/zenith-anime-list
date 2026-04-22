import { useQuery } from "@tanstack/react-query";
import {
  getTopAnime,
  getTopManga,
  getCurrentlyAiring,
  getAnimeDetails,
  getAnimeCharacters,
  getAnimeRecommendations,
  getCharacterDetails,
  getMangaDetails,
  getMangaCharacters,
  getMangaRecommendations,
} from "@/services/animeService";

export function useHomeData() {
  const topAnime = useQuery({
    queryKey: ["top-anime", 1],
    queryFn: () => getTopAnime(1),
  });
  const topManga = useQuery({
    queryKey: ["top-manga", 1],
    queryFn: () => getTopManga(1),
  });
  const currentlyAiring = useQuery({
    queryKey: ["currently-airing"],
    queryFn: getCurrentlyAiring,
  });

  return { topAnime, topManga, currentlyAiring };
}

export function useTrendingAnime(page: number) {
  const topTrendingAnime = useQuery({
    queryKey: ["top-anime", page],
    queryFn: () => getTopAnime(page),
  });
  return { topTrendingAnime };
}

export function useTrendingManga(page: number) {
  const topTrendingManga = useQuery({
    queryKey: ["top-manga", page],
    queryFn: () => getTopManga(page),
  });
  return { topTrendingManga };
}

export function useAnimeDetails(id: number) {
  const animeDetails = useQuery({
    queryKey: ["anime-details", id],
    queryFn: () => getAnimeDetails(id),
    enabled: !!id,
  });
  return { animeDetails };
}

export function useAnimeCharacters(id: number) {
  const animeCharacters = useQuery({
    queryKey: ["anime-characters", id],
    queryFn: () => getAnimeCharacters(id),
    enabled: !!id,
  });
  return { animeCharacters };
}

export function useAnimeRecommendations(id: number) {
  const animeRecommendations = useQuery({
    queryKey: ["anime-recommendations", id],
    queryFn: () => getAnimeRecommendations(id),
    enabled: !!id,
  });
  return { animeRecommendations };
}

export function useCharacterDetails(id: number) {
  const characterDetails = useQuery({
    queryKey: ["character-details", id],
    queryFn: () => getCharacterDetails(id),
    enabled: !!id,
  });
  return { characterDetails };
}

export function useMangaDetails(id: number) {
  const mangaDetails = useQuery({
    queryKey: ["manga-details", id],
    queryFn: () => getMangaDetails(id),
    enabled: !!id,
  });
  return { mangaDetails };
}

export function useMangaCharacters(id: number) {
  const mangaCharacters = useQuery({
    queryKey: ["manga-characters", id],
    queryFn: () => getMangaCharacters(id),
    enabled: !!id,
  });
  return { mangaCharacters };
}

export function useMangaRecommendations(id: number) {
  const mangaRecommendations = useQuery({
    queryKey: ["manga-recommendations", id],
    queryFn: () => getMangaRecommendations(id),
    enabled: !!id,
  });
  return { mangaRecommendations };
}
