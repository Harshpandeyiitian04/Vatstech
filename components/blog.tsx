import { categoryInfo, CategoryKey, servicesData } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowRightIcon, CheckCircle2Icon, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Blog() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);
    return (
        <>
            {/* Blog Section */}
            <section id="services" className="py-24 bg-gradient-to-b from-white to-[#F8FBFD]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-[#0A2240] mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600">Everything your business needs under one roof</p>
                    </div>

                    {/* Main 5 Category Cards */}
                    {!activeCategory ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Object.entries(categoryInfo).map(([key, cat]) => {
                                const Icon = cat.icon;
                                return (
                                    <Card
                                        key={key}
                                        className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100"
                                        onClick={() => setActiveCategory(key as CategoryKey)}
                                    >
                                        <CardHeader className="pb-8">
                                            <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                            <CardTitle className="text-2xl text-center text-[#0A2240]">{cat.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3 text-gray-600 text-center">
                                                {cat.items.map((item, i) => (
                                                    <li key={i} className="flex items-center justify-start">
                                                        <CheckCircle2Icon className='text-[#0095D1] mx-3' />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button className="w-full mt-8 bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold">
                                                View All Services <ChevronRight className="ml-2 h-5 w-5" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    ) : (
                        /* Expanded View - All Services in 3-column Grid */
                        <>
                            <Button
                                variant="ghost"
                                className="mb-8 text-[#00A8E8] hover:text-[#0095D1] text-xl hover:border hover:border-[#0095D1]"
                                onClick={() => setActiveCategory(null)}
                            >
                                ← Back to Categories
                            </Button>

                            <h3 className="text-4xl font-bold text-[#0A2240] mb-10 text-center">
                                {categoryInfo[activeCategory].name}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {servicesData[activeCategory].map((service, index) => (
                                    <Card
                                        key={index}
                                        className="border border-gray-200 hover:border-[#00A8E8] hover:shadow-xl transition-all duration-300"
                                    >
                                        <CardHeader>
                                            <CardTitle className="text-lg text-[#0A2240]">{service.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-2xl font-bold text-[#00A8E8]">
                                                {typeof service.price === 'number'
                                                    ? `₹${service.price.toLocaleString('en-IN')}`
                                                    : service.price}
                                                <span className="text-sm font-normal text-gray-500 block mt-1">
                                                    {typeof service.price === 'number' ? 'exclusive gst' : ''}
                                                </span>
                                            </p>
                                            <Button size="lg" className="mt-4 w-full bg-[#00A8E8] hover:bg-[#0095D1]">
                                                Get It now<ArrowRightIcon />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    )
}