import { Link } from "react-router-dom";

export interface Character {
  character: {
    mal_id: number;
    name: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
  };
  role: string;
}

function MangaCharacterCard({ character }: { character: Character }) {
  return (
    <Link to={`/character/${character.character.mal_id}`}>
      <div className="flex-shrink-0 group w-32 sm:w-40 cursor-pointer transition-transform duration-300 hover:-translate-y-2 active:scale-95">
        <div className="relative aspect-[1/1.2] rounded-2xl overflow-hidden shadow-lg mb-3 border border-white/5">
          <img
            src={character.character.images.jpg.image_url}
            alt={character.character.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-0.5 px-1">
          <p className="text-white text-[13px] font-black tracking-tight truncate group-hover:text-blue-400 transition-colors">
            {character.character.name}
          </p>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest truncate">
            {character.role}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MangaCharacterCard;
