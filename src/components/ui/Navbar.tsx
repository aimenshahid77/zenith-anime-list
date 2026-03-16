import { Link, NavLink } from "react-router-dom";
import {
  AlignJustify,
  Heart,
  History,
  Home,
  ListVideo,
  Moon,
  Search,
  Sparkles,
  Sun,
  TrendingUp,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="font-['Poppins'] fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white font-bold text-sm"
        >
          Z
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-400 hover:text-slate-50 hover:bg-slate-800 transition-colors"
          >
            <Home size={16} /> Home
          </Link>
          <Link
            to="/trending"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white font-medium transition-colors"
          >
            <TrendingUp size={16} className="text-white" /> Trending
          </Link>
          <Link
            to="/suggested"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-400 hover:text-slate-50 hover:bg-slate-800 transition-colors"
          >
            <Sparkles size={16} /> Suggested
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-400 hover:text-slate-50 hover:bg-slate-800 transition-colors outline-none cursor-pointer">
              <AlignJustify size={16} /> More
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-800/90 backdrop-blur-md border border-slate-700 text-slate-50 mt-2 min-w-[180px] p-2 space-y-1 rounded-xl shadow-xl">
              <DropdownMenuItem className="focus:bg-slate-700 focus:text-slate-50 cursor-pointer rounded-lg p-0">
                <Link
                  to="/more/my-list"
                  className="flex items-center gap-3 w-full px-3 py-2"
                >
                  <ListVideo size={16} className="text-slate-400" />
                  <span>My List</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-slate-700 focus:text-slate-50 cursor-pointer rounded-lg p-0">
                <Link
                  to="/more/favorites"
                  className="flex items-center gap-3 w-full px-3 py-2"
                >
                  <Heart size={16} className="text-slate-400" />
                  <span>Favourites</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-slate-700 focus:text-slate-50 cursor-pointer rounded-lg p-0">
                <Link
                  to="/more/history"
                  className="flex items-center gap-3 w-full px-3 py-2"
                >
                  <History size={16} className="text-slate-400" />
                  <span>History</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Link
          to="/search"
          className="text-slate-400 hover:text-slate-50 transition-colors"
        >
          <Search size={18} />
        </Link>

        <button
          onClick={toggleTheme}
          className="text-slate-400 hover:text-slate-50 transition-colors"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="flex items-center gap-2 ml-1 border-l border-slate-700 pl-4">
          <Link
            to="/login"
            className="px-3 py-1.5 rounded-md text-sm text-slate-300 hover:text-slate-50 hover:bg-slate-800 transition-colors font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-3 py-1.5 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
