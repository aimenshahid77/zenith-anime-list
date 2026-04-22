import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";

const AppLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
