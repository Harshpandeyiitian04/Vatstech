import { categoryInfo, CategoryKey, servicesData } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowRightIcon, CheckCircle2Icon, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Blog() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);
    const router = useRouter()

    function slugify(str: string) {
        return str
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
    }

    function handleGetit(category: string, service: string) {
        const serviceSlug = slugify(service);
        router.push(`/services/${category}/${serviceSlug}`);
    }

    return (
        <>
            <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F8FBFD]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2240] mb-3 sm:mb-4 leading-tight">
                            Our Services
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                            Everything your business needs under one roof
                        </p>
                    </div>
                    {!activeCategory ? (
                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {Object.entries(categoryInfo).map(([key, cat]) => {
                                const Icon = cat.icon;
                                return (
                                    <Card
                                        key={key}
                                        className="group cursor-pointer hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 sm:duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 lg:hover:-translate-y-3 border border-gray-100 sm:border-2"
                                        onClick={() => setActiveCategory(key as CategoryKey)}
                                    >
                                        <CardHeader className="pb-4 sm:pb-6 lg:pb-8">
                                            <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${cat.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`}>
                                                <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                                            </div>
                                            <CardTitle className="text-lg sm:text-xl lg:text-2xl text-center text-[#0A2240]">
                                                {cat.name}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="px-3 sm:px-6">
                                            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3 text-gray-600">
                                                {cat.items.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start sm:items-center text-sm sm:text-base"
                                                    >
                                                        <CheckCircle2Icon className='text-[#0095D1] h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0' />
                                                        <span className="text-left">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button
                                                className="w-full mt-4 sm:mt-6 lg:mt-8 bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold text-sm sm:text-base h-10 sm:h-12"
                                            >
                                                View All Services
                                                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    ) : (
                        <>
                            <Button
                                variant="ghost"
                                className="mb-6 sm:mb-8 text-[#00A8E8] hover:text-[#0095D1] text-base sm:text-lg md:text-xl hover:bg-transparent px-2 sm:px-4"
                                onClick={() => setActiveCategory(null)}
                            >
                                ← Back to Categories
                            </Button>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2240] mb-6 sm:mb-8 lg:mb-10 text-center">
                                {categoryInfo[activeCategory].name}
                            </h3>
                            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {servicesData[activeCategory].map((service, index) => (
                                    <Card
                                        key={index}
                                        className="border border-gray-200 hover:border-[#00A8E8] hover:shadow-lg sm:hover:shadow-xl transition-all duration-300"
                                    >
                                        <CardHeader className="pb-2 sm:pb-3">
                                            <CardTitle className="text-base sm:text-lg lg:text-xl text-[#0A2240] leading-snug">
                                                {service.name}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="text-xl sm:text-2xl font-bold text-[#00A8E8]">
                                                {typeof service.price === 'number'
                                                    ? `₹${service.price.toLocaleString('en-IN')}`
                                                    : service.price}
                                            </p>
                                            {typeof service.price === 'number' && (
                                                <span className="text-xs sm:text-sm font-normal text-gray-500 block mt-1">
                                                    EXCLUSIVE GST
                                                </span>
                                            )}
                                            <Button
                                                onClick={() => handleGetit(activeCategory, service.name)}
                                                size="sm"
                                                className="mt-3 sm:mt-4 w-full bg-[#00A8E8] hover:bg-[#0095D1] text-white h-10 sm:h-12 text-sm sm:text-base"
                                            >
                                                Get It Now
                                                <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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