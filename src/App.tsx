import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import HomePage from "./components/pages/HomePage";
import TrendingPage from "./components/pages/TrendingPage";
import SuggestedPage from "./components/pages/SuggestedPage";
import SearchPage from "./components/pages/SearchPage";
import AnimePage from "./components/pages/AnimePage";
import MangaPage from "./components/pages/MangaPage";
import AnimeDetailPage from "./components/pages/AnimeDetailPage";
import MangaDetailPage from "./components/pages/MangaDetailPage";
import CharacterPage from "./components/pages/CharacterPage";
import MyListPage from "./components/pages/MyListPage";
import FavoritesPage from "./components/pages/FavoritesPage";
import HistoryPage from "./components/pages/HistoryPage";
import CollectionsPage from "./components/pages/CollectionsPage";
import CollectionDetailPage from "./components/pages/CollectionDetailPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";

function App() {
  const router = createBrowserRouter([
    {
      Component: AppLayout,
      children: [
        { path: "/", Component: HomePage },
        { path: "trending", Component: TrendingPage },
        { path: "suggested", Component: SuggestedPage },
        { path: "search", Component: SearchPage },
        { path: "anime", Component: AnimePage },
        { path: "manga", Component: MangaPage },
        { path: "details/anime/:id", Component: AnimeDetailPage },
        { path: "details/manga/:id", Component: MangaDetailPage },
        { path: "character/:id", Component: CharacterPage },
        { path: "more/my-list", Component: MyListPage },
        { path: "more/favorites", Component: FavoritesPage },
        { path: "more/history", Component: HistoryPage },
        { path: "more/collections", Component: CollectionsPage },
        { path: "more/collections/:id", Component: CollectionDetailPage },
      ],
    },

    { path: "login", Component: LoginPage },
    { path: "signup", Component: SignupPage },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
