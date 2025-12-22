import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";

export function Footer() {
    return (
        <>
            {/* Footer - Deep Blue */}
            <footer className="bg-[#0A2240] text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-10">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <img src="/2.png" alt="" srcSet="" className="h-28 w-56 rounded-xl m-3 ml-14 mr-14" />
                                {/* <span className="text-2xl font-bold">Vatstech</span> */}
                            </div>
                            <div className="text-gray-300 leading-relaxed text-center">
                                <div>
                                    VATSTECH BUSINESS SOLUTION PRIVATE LIMITED
                                </div>  
                                <div>
                                    CIN: U62099BR2025PTC073050 .
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-5 text-lg">Company</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li><Link href="/about" className="hover:text-[#00A8E8] transition">About</Link></li>
                                <li><Link href="/services" className="hover:text-[#00A8E8] transition">Blog</Link></li>
                                <li><Link href="/" className="hover:text-[#00A8E8] transition">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-5 text-lg">Legal</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li><Link href="#" className="hover:text-[#00A8E8] transition">Privacy</Link></li>
                                <li><Link href="#" className="hover:text-[#00A8E8] transition">Terms</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-5 text-lg">Follow Us</h4>
                            <div className="flex space-x-6">
                                <a href="https://www.x.com/vatstechb" className="hover:text-[#f6d11b] transition"><Twitter className="w-6 h-6" /></a>
                                <a href=" https://linkedin.com/company/vatstechb" className="hover:text-[#6617ed] transition"><Linkedin className="w-6 h-6" /></a>
                                <a href="https://www.facebook.com/vatstechb" className="hover:text-[#20bbf8] transition"><Facebook className="w-6 h-6" /></a>
                                <a href="https://www.instagram.com/vatstechb" className="hover:text-[#fe0ef6] transition"><Instagram className="w-6 h-6" /></a>
                                <a href="https://wa.me/919576894955" className="hover:text-[#34f908] transition"><FaWhatsapp className="w-6 h-6" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                        © VATSTECH BUSINESS SOLUTION PRIVATE LIMITED . All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}