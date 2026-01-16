'use client'
import { stats, values } from '@/lib/content';
import { useNavigation } from '@/lib/functions';
import { CheckCircle2, Target, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AboutPage() {
    const { handleContact } = useNavigation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <section className="relative bg-linear-to-br from-[#0A2240] via-[#0A2240] to-[#00A8E8] text-white py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                            About VatsTech
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed px-2 sm:px-0">
                            Empowering businesses with comprehensive solutions that simplify growth and ensure success in today's competitive landscape.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-8 sm:py-12 md:py-16 bg-[#F8FBFD]">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {isMounted && stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center p-2 sm:p-0">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-linear-to-br from-[#00A8E8] to-[#0095D1] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg">
                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                                    </div>
                                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2240] mb-1 sm:mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium px-1 sm:px-0">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2240] mb-6 sm:mb-8 text-center">
                            Our Story
                        </h2>
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                            <p>
                                <strong className="text-[#00A8E8]">VatsTech Business Solution Private Limited</strong> is a multi-service company proudly recognized by Startup India and dedicated to empowering individuals, entrepreneurs, and organizations to thrive in today's competitive business landscape.
                            </p>
                            <p>
                                Incorporated in January 2025 and headquartered in Patna, Bihar, we are a young, dynamic organization committed to providing comprehensive business solutions across India. At VatsTech, we understand that navigating the complexities of modern business can be overwhelming.
                            </p>
                            <p>
                                That's why we've created a one-stop solution platform that brings together legal compliance, branding, technology, digital marketing, and skill development services—all tailored to meet your unique needs and budget. Our mission is simple: to make business growth straightforward and accessible for startups, SMEs, educational institutions, and established enterprises alike.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 sm:py-16 md:py-20 bg-linear-to-b from-white to-[#F8FBFD]">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
                        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl border border-gray-100">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 bg-linear-to-br from-[#00A8E8] to-[#0095D1] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg">
                                <Target className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A2240] mb-3 sm:mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                To empower entrepreneurs, startups, and organizations with reliable, technology-driven solutions that simplify business processes and ensure they remain competitive in an ever-evolving marketplace. We strive to deliver fast, affordable, and high-quality services that eliminate barriers to growth and enable our clients to focus on what they do best—building their vision.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl border border-gray-100">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 bg-linear-to-br from-[#00A8E8] to-[#0095D1] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg">
                                <Eye className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A2240] mb-3 sm:mb-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                To establish VatsTech as a stable multinational corporation (MNC) recognized globally for excellence in business solutions, innovation, and client empowerment. We aspire to expand our footprint beyond India and become a trusted partner for businesses worldwide, contributing to job creation, economic development, and entrepreneurial success across borders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2240] mb-3 sm:mb-4 text-center">
                            Our Core Values
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 text-center">
                            The principles that guide everything we do
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-[#00A8E8] hover:shadow-lg sm:hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 bg-linear-to-br from-[#00A8E8] to-[#0095D1] rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm sm:shadow-md group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A2240] mb-2 sm:mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                            {value.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 sm:py-16 md:py-20 bg-[#F8FBFD]">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2240] mb-6 sm:mb-8 text-center">
                            What Sets Us Apart
                        </h2>
                        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl">
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00A8E8] shrink-0 mt-0.5 sm:mt-1" />
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-[#0A2240] mb-1 sm:mb-2">
                                            Comprehensive One-Stop Solution
                                        </h4>
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            From business registration to digital marketing, we provide end-to-end services under one roof, saving you time and effort.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00A8E8] shrink-0 mt-0.5 sm:mt-1" />
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-[#0A2240] mb-1 sm:mb-2">
                                            Startup India Recognition
                                        </h4>
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            As a government-recognized startup, we understand the unique challenges entrepreneurs face and provide tailored solutions.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00A8E8] shrink-0 mt-0.5 sm:mt-1" />
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-[#0A2240] mb-1 sm:mb-2">
                                            Technology-Driven Approach
                                        </h4>
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            We combine cutting-edge technology with human expertise to deliver innovative solutions that drive real results.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00A8E8] shrink-0 mt-0.5 sm:mt-1" />
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-[#0A2240] mb-1 sm:mb-2">
                                            Pan-India Service with Personal Touch
                                        </h4>
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            We serve clients across India while maintaining a personalized approach that understands regional nuances and industry-specific needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-[#00A8E8] to-[#0095D1] text-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100 px-2 sm:px-0">
                            Partner with VatsTech and experience the difference that comprehensive, quality-driven business solutions can make.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <button
                                onClick={handleContact}
                                className="border-2 border-white text-white hover:bg-white hover:text-[#00A8E8] font-bold text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}