'use client'
import { stats, values } from '@/lib/content';
import { CheckCircle2, Target, Eye, Award, Users, Briefcase, TrendingUp, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
    const router = useRouter()
    function handleContact() {
        router.push('/contact')
    }


    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0A2240] via-[#0A2240] to-[#00A8E8] text-white py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            About VatsTech
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                            Empowering businesses with comprehensive solutions that simplify growth and ensure success in today's competitive landscape.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#F8FBFD]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00A8E8] to-[#0095D1] rounded-2xl flex items-center justify-center shadow-lg">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-[#0A2240] mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-[#0A2240] mb-8 text-center">
                            Our Story
                        </h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
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

            {/* Mission & Vision */}
            <section className="py-20 bg-gradient-to-b from-white to-[#F8FBFD]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Mission */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                            <div className="w-20 h-20 mb-6 bg-gradient-to-br from-[#00A8E8] to-[#0095D1] rounded-2xl flex items-center justify-center shadow-lg">
                                <Target className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#0A2240] mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                To empower entrepreneurs, startups, and organizations with reliable, technology-driven solutions that simplify business processes and ensure they remain competitive in an ever-evolving marketplace. We strive to deliver fast, affordable, and high-quality services that eliminate barriers to growth and enable our clients to focus on what they do best—building their vision.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                            <div className="w-20 h-20 mb-6 bg-gradient-to-br from-[#00A8E8] to-[#0095D1] rounded-2xl flex items-center justify-center shadow-lg">
                                <Eye className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#0A2240] mb-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                To establish VatsTech as a stable multinational corporation (MNC) recognized globally for excellence in business solutions, innovation, and client empowerment. We aspire to expand our footprint beyond India and become a trusted partner for businesses worldwide, contributing to job creation, economic development, and entrepreneurial success across borders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-[#0A2240] mb-4 text-center">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 text-center">
                            The principles that guide everything we do
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-[#00A8E8] hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#00A8E8] to-[#0095D1] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#0A2240] mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-20 bg-[#F8FBFD]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-[#0A2240] mb-8 text-center">
                            What Sets Us Apart
                        </h2>
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0A2240] mb-2">
                                            Comprehensive One-Stop Solution
                                        </h4>
                                        <p className="text-gray-700">
                                            From business registration to digital marketing, we provide end-to-end services under one roof, saving you time and effort.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0A2240] mb-2">
                                            Startup India Recognition
                                        </h4>
                                        <p className="text-gray-700">
                                            As a government-recognized startup, we understand the unique challenges entrepreneurs face and provide tailored solutions.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0A2240] mb-2">
                                            Technology-Driven Approach
                                        </h4>
                                        <p className="text-gray-700">
                                            We combine cutting-edge technology with human expertise to deliver innovative solutions that drive real results.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0A2240] mb-2">
                                            Pan-India Service with Personal Touch
                                        </h4>
                                        <p className="text-gray-700">
                                            We serve clients across India while maintaining a personalized approach that understands regional nuances and industry-specific needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#00A8E8] to-[#0095D1] text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl mb-8 text-gray-100">
                            Partner with VatsTech and experience the difference that comprehensive, quality-driven business solutions can make.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={handleContact} className="border-2 border-white text-white hover:bg-white hover:text-[#00A8E8] font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}