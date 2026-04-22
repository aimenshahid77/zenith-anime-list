import { Link } from "react-router-dom";

interface type {
  title: string;
  role: string;
  imageUrl: string;
  mal_id: number;
  mediaType: string;
}

function MediaCard({ title, role, imageUrl, mal_id, mediaType }: type) {
  return (
    <Link to={`/details/${mediaType}/${mal_id}`} className="block">
      <div className="group relative w-44 transition-all duration-300 hover:-translate-y-2">
        <div className="relative w-full aspect-[3/4] min-h-[240px] overflow-hidden rounded-[2rem] shadow-lg mb-3 bg-slate-800">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Role Badge on Image */}
          {role && (
            <div className="absolute bottom-4 left-4 bg-blue-500/90 backdrop-blur-md px-3 py-1 rounded-md shadow-lg border border-white/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-white leading-none">
                {role}
              </span>
            </div>
          )}
        </div>

        <div className="px-1">
          <h3 className="text-sm font-black text-white line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors uppercase tracking-tight">
            {title}
          </h3>
          {role && (
            <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-widest">
              {role}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default MediaCard;
