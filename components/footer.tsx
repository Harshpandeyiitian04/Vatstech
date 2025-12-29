import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";

export function Footer() {
    return (
        <>
            {/* Footer - Deep Blue */}
            <footer className="bg-[#0A2240] text-white py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                        {/* Company Info & Logo */}
                        <div className="xs:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
                            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4 sm:mb-5 w-full max-w-xs lg:max-w-none">
                                <img
                                    src="/22.png"
                                    alt="VATSTECH Logo"
                                    className="w-40 h-auto sm:w-48 lg:w-50 rounded-xl object-cover"
                                />
                            </div>
                            <div className="text-gray-300 leading-relaxed text-center lg:text-left text-sm sm:text-base">
                                <div className="mb-1">
                                    VATSTECH BUSINESS SOLUTION PRIVATE LIMITED
                                </div>
                                <div>
                                    CIN: U62099BR2025PTC073050
                                </div>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-base sm:text-lg">Company</h4>
                            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                                <li>
                                    <Link href="/about" className="hover:text-[#00A8E8] transition hover:underline">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="hover:text-[#00A8E8] transition hover:underline">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:text-[#00A8E8] transition hover:underline">
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h4 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-base sm:text-lg">Legal</h4>
                            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                                <li>
                                    <Link href="#" className="hover:text-[#00A8E8] transition hover:underline">
                                        Privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-[#00A8E8] transition hover:underline">
                                        Terms
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold mb-3 sm:mb-4 lg:mb-5 text-base sm:text-lg">Follow Us</h4>
                            <div className="flex space-x-4 sm:space-x-5 lg:space-x-6 flex-wrap gap-3 sm:gap-0">
                                <a
                                    href="https://www.x.com/vatstechb"
                                    className="hover:text-[#f6d11b] transition hover:scale-110 inline-block"
                                    aria-label="Follow us on X (Twitter)"
                                >
                                    <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <a
                                    href="https://linkedin.com/company/vatstechb"
                                    className="hover:text-[#0077b5] transition hover:scale-110 inline-block"
                                    aria-label="Follow us on LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <a
                                    href="https://www.facebook.com/vatstechb"
                                    className="hover:text-[#1877F2] transition hover:scale-110 inline-block"
                                    aria-label="Follow us on Facebook"
                                >
                                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <a
                                    href="https://www.instagram.com/vatstechb"
                                    className="hover:text-[#E4405F] transition hover:scale-110 inline-block"
                                    aria-label="Follow us on Instagram"
                                >
                                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <a
                                    href="https://wa.me/919576894955"
                                    className="hover:text-[#25D366] transition hover:scale-110 inline-block"
                                    aria-label="Chat with us on WhatsApp"
                                >
                                    <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-700 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
                        © VATSTECH BUSINESS SOLUTION PRIVATE LIMITED . All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}