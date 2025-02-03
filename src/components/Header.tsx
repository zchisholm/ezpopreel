// components/Header.tsx
import { Home, Search, Plus, MessageCircle, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
      <nav className="flex justify-between items-center px-4 py-2 max-w-screen-md mx-auto">
        <Link href="/" className="text-xl font-bold">
          EZ-Pop Reel
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="p-2">
            <Home size={24} />
          </Link>
          <Link href="/search" className="p-2">
            <Search size={24} />
          </Link>
          <Link href="/upload" className="p-2">
            <Plus size={24} />
          </Link>
          <Link href="/messages" className="p-2">
            <MessageCircle size={24} />
          </Link>
          <Link href="/profile" className="p-2">
            <User size={24} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
