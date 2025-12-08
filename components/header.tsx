import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { Menu } from "lucide-react";
import { redirect } from "next/navigation";

export function Header() {
    
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function handleStarted(){
    redirect('/login')
  }
    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#0A2240] to-[#00A8E8] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    V
                                </div>
                                <span className="text-2xl font-bold text-[#0A2240]">
                                    Vatstech
                                </span>
                            </Link>
                        </div>

                        <nav className="hidden md:flex items-center space-x-10">
                            <Link href="#about" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">About</Link>
                            <Link href="#blog" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">Blog</Link>
                            <Link href="#contact" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">Contact</Link>
                            <Button className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold shadow-md" onClick={handleStarted}>
                                Get Started
                            </Button>
                        </nav>

                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6 text-[#0A2240]" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-white">
                                <div className="flex flex-col space-y-8 mt-10">
                                    <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-800 hover:text-[#00A8E8]">About</Link>
                                    <Link href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-800 hover:text-[#00A8E8]">Blog</Link>
                                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-800 hover:text-[#00A8E8]">Contact</Link>
                                    <Button className="w-full bg-[#00A8E8] hover:bg-[#0095D1] text-white text-lg py-6">
                                        Get Started
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </>
    )
}