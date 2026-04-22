import { useAnimeDetails } from "@/hooks/useAnime";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Star, Heart, MessageSquare, Send } from "lucide-react";

function AnimeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { animeDetails } = useAnimeDetails(Number(id));

    if (animeDetails.isLoading) return <div className="min-h-[400px] flex items-center justify-center text-slate-400">Loading...</div>;
    if (!animeDetails.data) return null;

    const data = animeDetails.data.data;

    return (
        <div className="w-full">
            {/* Hero Section Header */}
            <div className="relative w-full bg-[#1a2133]/20 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-8 flex items-center gap-2 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 hover:bg-slate-800/80 transition-all text-xs font-bold uppercase tracking-wider"
                    >
                        <ChevronLeft size={16} />
                        Back
                    </button>

                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        {/* Poster */}
                        <div className="flex-shrink-0 relative group">
                            <img
                                src={data.images.jpg.large_image_url}
                                alt={data.title}
                                className="w-64 sm:w-[350px] rounded-[2.5rem] border-4 border-white shadow-2xl object-cover"
                            />
                        </div>

                        {/* Hero Info & Synopsis */}
                        <div className="flex-1 space-y-8 py-4">
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-7xl font-[900] tracking-tight leading-[1.1] text-white">
                                    {data.title}
                                </h1>

                                <div className="flex flex-wrap gap-3 items-center">
                                    {data.genres.map((genre: any) => (
                                        <span key={genre.mal_id} className="px-5 py-2 bg-blue-500/10 backdrop-blur-md rounded-full text-[11px] font-black text-blue-400 border border-blue-500/10 uppercase tracking-[0.15em]">
                                            {genre.name}
                                        </span>
                                    ))}
                                    <button className="flex items-center gap-2 px-6 py-2 bg-slate-900/40 backdrop-blur-md rounded-full text-[11px] font-black uppercase tracking-[0.15em] border border-white/10 hover:bg-slate-800 transition-all">
                                        <Heart size={14} className="text-white/80" />
                                        Add to Favorites
                                    </button>
                                </div>
                            </div>

                            {/* Synopsis moved to Hero */}
                            <div className="space-y-4 max-w-4xl">
                                <h2 className="text-2xl font-black text-white/90">Synopsis</h2>
                                <p className="text-slate-300/80 leading-relaxed text-sm sm:text-base font-medium">
                                    {data.synopsis}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area (Sidebar & Lists) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar */}
                    <div className="w-full md:w-[30%] space-y-8">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-[#151b2b] p-5 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center space-y-2">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Score</span>
                                <div className="flex items-center gap-1.5 text-yellow-500">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-xl font-black">{data.score}</span>
                                </div>
                            </div>
                            <div className="bg-[#151b2b] p-5 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center space-y-2">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Rank</span>
                                <div className="flex items-center gap-1.5 text-white">
                                    <span className="text-xl font-black">#{data.rank}</span>
                                </div>
                            </div>
                            <div className="bg-[#151b2b] p-5 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center space-y-2">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Favorite</span>
                                <div className="flex items-center gap-1.5 text-pink-500">
                                    <Heart size={14} fill="currentColor" />
                                    <span className="text-xl font-black">{data.favorites}</span>
                                </div>
                            </div>
                        </div>

                        {/* Information Section */}
                        <div className="bg-[#151b2b] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                            <h2 className="text-lg font-black uppercase tracking-[0.2em] flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-blue-600 rounded-full" />
                                Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center group">
                                    <span className="text-slate-500 font-black uppercase tracking-widest text-[11px] group-hover:text-slate-300 transition-colors">Type</span>
                                    <span className="font-bold text-white/90">{data.type}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="text-slate-500 font-black uppercase tracking-widest text-[11px] group-hover:text-slate-300 transition-colors">Status</span>
                                    <span className="font-bold text-white/90">{data.status}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="text-slate-500 font-black uppercase tracking-widest text-[11px] group-hover:text-slate-300 transition-colors">Episodes</span>
                                    <span className="font-bold text-white/90">{data.episodes}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="text-slate-500 font-black uppercase tracking-widest text-[11px] group-hover:text-slate-300 transition-colors">Popularity</span>
                                    <span className="font-bold text-white/90">#{data.popularity}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 space-y-12">
                        {/* Reviews Section */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-[900] flex items-center gap-4">
                                    <Heart size={28} className="text-pink-500" />
                                    Reviews
                                </h2>
                                <span className="bg-[#151b2b] px-5 py-2 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest border border-white/5">0 reviews</span>
                            </div>

                            <div className="bg-[#151b2b] rounded-[3rem] border border-white/5 p-10 space-y-8 shadow-2xl">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Write a Review</h3>
                                    <select className="bg-[#0a0f1d] text-xs font-black px-5 py-2.5 rounded-xl border border-white/10 outline-none focus:border-blue-500/50 cursor-pointer">
                                        <option>10/10</option>
                                        <option>9/10</option>
                                        <option>8/10</option>
                                        <option>7/10</option>
                                        <option>6/10</option>
                                        <option>5/10</option>
                                        <option>4/10</option>
                                        <option>3/10</option>
                                        <option>2/10</option>
                                        <option>1/10</option>
                                    </select>
                                </div>
                                <textarea
                                    className="w-full h-40 bg-[#0a0f1d] rounded-[2rem] p-8 text-sm text-slate-300 placeholder:text-slate-700 outline-none border border-white/5 focus:border-blue-500/20 transition-all resize-none font-medium leading-relaxed"
                                    placeholder="Share your thoughts on this masterpiece..."
                                />
                                <button className="w-full py-5 bg-[#1a2133] hover:bg-blue-600 text-white text-[11px] font-[900] uppercase tracking-[0.3em] rounded-2xl transition-all border border-white/5 shadow-lg active:scale-[0.98]">
                                    Post Review
                                </button>
                            </div>
                        </div>

                        {/* Discussion Section */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-[900] flex items-center gap-4">
                                    <MessageSquare size={28} className="text-blue-500" />
                                    Discussion
                                </h2>
                                <span className="bg-[#151b2b] px-5 py-2 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest border border-white/5">0</span>
                            </div>

                            <div className="relative group">
                                <input
                                    type="text"
                                    className="w-full bg-[#151b2b] rounded-full py-6 px-10 pr-24 text-sm border border-white/5 outline-none focus:border-blue-500/20 transition-all placeholder:text-slate-700 font-medium"
                                    placeholder="Join the conversation..."
                                />
                                <button className="absolute right-3.5 top-1/2 -translate-y-1/2 w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-all shadow-xl shadow-blue-600/20 active:scale-90">
                                    <Send size={22} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeDetails;
