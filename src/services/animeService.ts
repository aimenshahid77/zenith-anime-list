const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export async function getTopAnime(page: number) {
  const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
  const data = await res.json();
  return data;
}

export async function getCurrentlyAiring() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime?filter=airing");
  const data = await res.json();
  return data;
}
export async function getTopManga(page: number) {
  const res = await fetch(`https://api.jikan.moe/v4/top/manga?page=${page}`);
  const data = await res.json();
  return data;
}

export async function getAnimeDetails(id: number) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  const data = await res.json();
  return data;
}

export async function getAnimeCharacters(id: number) {
  await delay(400);
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
  const data = await res.json();
  return data;
}

export async function getAnimeRecommendations(id: number) {
  await delay(800);
  const res = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/recommendations`,
  );
  const data = await res.json();
  return data;
}

export async function getCharacterDetails(id: number) {
  await delay(400);
  const res = await fetch(`https://api.jikan.moe/v4/characters/${id}/full`);
  const data = await res.json();
  return data;
}

export async function getMangaDetails(id: number) {
  const res = await fetch(`https://api.jikan.moe/v4/manga/${id}/full`);
  const data = await res.json();
  return data;
}

export async function getMangaCharacters(id: number) {
  await delay(400);
  const res = await fetch(`https://api.jikan.moe/v4/manga/${id}/characters`);
  const data = await res.json();
  return data;
}

export async function getMangaRecommendations(id: number) {
  await delay(800);
  const res = await fetch(
    `https://api.jikan.moe/v4/manga/${id}/recommendations`,
  );
  const data = await res.json();
  return data;
}
