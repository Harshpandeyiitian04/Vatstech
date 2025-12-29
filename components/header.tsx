"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const name = localStorage.getItem('userName') || sessionStorage.getItem('userName');
    if (name) setUserName(name);
  }, []);

  async function handleLogout() {
    try {
      await axios.post('/api/logout');
    } catch (e) {
      console.error('Logout error', e);
    }
    localStorage.removeItem('userName');
    sessionStorage.removeItem('userName');
    setUserName(null);
    router.push('/login');
  }

  function handleStarted() {
    if (userName) router.push('/');
    else router.push('/login');
  }

  // Prevent hydration mismatch by not rendering Sheet until mounted
  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <img src="/3.png" alt="Logo" className="h-10 sm:h-12 md:h-15 w-auto" />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              <Link href="/" className="text-gray-700 hover:text-[#00A8E8] font-medium transition text-sm lg:text-base">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#00A8E8] font-medium transition text-sm lg:text-base">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#00A8E8] font-medium transition text-sm lg:text-base">Blog</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#00A8E8] font-medium transition text-sm lg:text-base">Contact</Link>
              <Link href="/insight" className="text-gray-700 hover:text-[#00A8E8] font-medium transition text-sm lg:text-base">Insight</Link>
              <div className="flex items-center space-x-3">
                <Button className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold shadow-md text-sm px-4 py-2" onClick={handleStarted}>
                  Get Started
                </Button>
              </div>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-[#0A2240]" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <img src="/3.png" alt="Company Logo" className="h-10 sm:h-12 md:h-15 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            <Link href="/" className="text-gray-700 hover:text-[#00A8E8] font-medium transition text-sm lg:text-base">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#00A8E8] font-medium transition text-sm lg:text-base">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-[#00A8E8] font-medium transition text-sm lg:text-base">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#00A8E8] font-medium transition text-sm lg:text-base">Contact</Link>
            <Link href="/insight" className="text-gray-700 hover:text-[#00A8E8] font-medium transition text-sm lg:text-base">Insight</Link>

            {/* User Actions */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <Button
                className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold shadow-md text-sm px-4 py-2 lg:text-base lg:px-6 lg:py-2 whitespace-nowrap"
                onClick={handleStarted}
              >
                {userName ? `Flat 10% discount for first-time users` : 'Get Started'}
              </Button>
              {userName && (
                <button
                  onClick={handleLogout}
                  className="text-xs lg:text-sm text-gray-700 hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-100 transition"
                >
                  Logout
                </button>
              )}
            </div>
          </nav>

          {/* Mobile Navigation Sheet */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <SheetTitle>
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-[#0A2240]" />
                </SheetTitle>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-full sm:w-80 p-6">
              <div className="flex flex-col space-y-4 sm:space-y-6 mt-8">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#00A8E8] font-medium transition py-2 text-base sm:text-lg"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#00A8E8] font-medium transition py-2 text-base sm:text-lg"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#00A8E8] font-medium transition py-2 text-base sm:text-lg"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#00A8E8] font-medium transition py-2 text-base sm:text-lg"
                >
                  Contact
                </Link>
                <Link
                  href="/insight"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#00A8E8] font-medium transition py-2 text-base sm:text-lg"
                >
                  Insight
                </Link>

                {userName && (
                  <div className="text-sm text-gray-600 py-2">
                    Welcome, <span className="font-semibold">{userName}</span>
                  </div>
                )}

                <Button
                  className="w-full bg-[#00A8E8] hover:bg-[#0095D1] text-white text-base sm:text-lg py-4 sm:py-6 mt-4"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleStarted();
                  }}
                >
                  {userName ? `Flat 10% discount for first-time users` : 'Get Started'}
                </Button>

                {userName && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="text-sm text-gray-700 hover:text-gray-900 py-2 border-t pt-4"
                  >
                    Logout
                  </button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}