"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
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

    function handleStarted(){
        if (userName) router.push('/');
        else router.push('/login');
    }

    // Prevent hydration mismatch by not rendering Sheet until mounted
    if (!isMounted) {
        return (
            <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-3">
                                <img src="/3.png" alt="" srcSet="" className="h-15"/>
                            </Link>
                        </div>
                        <nav className="hidden md:flex items-center space-x-10">
                            <Link href="/about" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">About</Link>
                            <Link href="/services" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">Blog</Link>
                            <Link href="/contact" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">Contact</Link>
                            <div className="flex items-center space-x-3">
                                <Button className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold shadow-md" onClick={handleStarted}>
                                    Get Started
                                </Button>
                            </div>
                        </nav>
                        <div className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6 text-[#0A2240]" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3">
                            <img src="/3.png" alt="" srcSet="" className="h-15"/>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center space-x-10">
                        <Link href="/about" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">About</Link>
                        <Link href="/services" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">Blog</Link>
                        <Link href="/contact" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">Contact</Link>
                        <div className="flex items-center space-x-3">
                            <Button className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold shadow-md" onClick={handleStarted}>
                                {userName ? `Flat 10% discount for first-time users` : 'Get Started'}
                            </Button>
                            {userName && (
                                <button onClick={handleLogout} className="text-sm text-gray-700 hover:text-gray-900">
                                    Logout
                                </button>
                            )}
                        </div>
                    </nav>

                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6 text-[#0A2240]" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-white">
                            <div className="flex flex-col space-y-8 mt-10">
                                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-800 hover:text-[#00A8E8]">About</Link>
                                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-800 hover:text-[#00A8E8]">Blog</Link>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-800 hover:text-[#00A8E8]">Contact</Link>
                                <Button className="w-full bg-[#00A8E8] hover:bg-[#0095D1] text-white text-lg py-6" onClick={handleStarted}>
                                    {userName ? `Flat 10% discount for first-time users` : 'Get Started'}
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}