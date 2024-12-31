// components
import {
  MainLayoutHeader,
  MainLayoutHeaderBanner,
  MainLayoutNavbarHorizontal,
} from "@/components/layout/MainLayout";

export default function MainHeader() {
  return (
    <header className="w-full bg-tertiary-50 relative flex flex-col gap-2">
      <MainLayoutHeaderBanner />
      <MainLayoutHeader />
      <MainLayoutNavbarHorizontal />
    </header>
  );
}
