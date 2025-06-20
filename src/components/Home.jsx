import { Header } from "./Header";
import { MainSection } from "./MainSection";
import { Sidebar } from "./Sidebar";

export function Home() {
  return (
    <div className="bg-[#F4F4FF] min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <MainSection />
      </div>
    </div>
  );
}
