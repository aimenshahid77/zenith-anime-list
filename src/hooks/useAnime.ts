import { useQuery } from "@tanstack/react-query";
import {
  getTopAnime,
  getTopManga,
  getCurrentlyAiring,
} from "@/services/animeService";

export function useHomeData() {
  const topAnime = useQuery({
    queryKey: ["top-anime"],
    queryFn: getTopAnime,
  });
  const topManga = useQuery({
    queryKey: ["top-manga"],
    queryFn: getTopManga,
  });
  const currentlyAiring = useQuery({
    queryKey: ["currently-airing"],
    queryFn: getCurrentlyAiring,
  });

  return { topAnime, topManga, currentlyAiring };
}
