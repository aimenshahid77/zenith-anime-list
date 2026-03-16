export async function getTopAnime (){
    const res = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await res.json();
    return data;

}

export async function getCurrentlyAiring(){
    const res = await fetch("https://api.jikan.moe/v4/top/anime?filter=airing");
    const data = await res.json();
    return data;
}
export async function getTopManga(){
    const res = await fetch("https://api.jikan.moe/v4/top/manga");
    const data = await res.json();
    return data;
}