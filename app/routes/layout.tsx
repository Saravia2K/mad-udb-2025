import Footer from "@/components/features/home-layout/footer";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  );
}
