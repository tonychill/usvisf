import Hero from "@/components/hero";
import News from "@/components/news";
import Feed from "@/components/ui/feed";

export default function Home() {
  return (
    <main className="flex mt-12 min-h-screen flex-col bg-white">
      {/* <News /> */}
      <Feed />
      {/* <Hero /> */}
    </main>
  );
}
