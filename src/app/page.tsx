// app/page.tsx - Main Feed Page
import VideoFeed from "@/components/VideoFeed";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <VideoFeed />
    </main>
  );
}
