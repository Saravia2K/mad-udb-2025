import { Outlet } from "react-router";

import Footer from "@/components/features/home-layout/footer";
import Header from "@/components/features/home-layout/header";
import MobileNavbar from "@/components/features/home-layout/mobile-navbar";

export default function RootLayout() {
  return (
    <main className="relative">
      <MobileNavbar />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
