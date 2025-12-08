import { insights } from "@/lib/content";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Insight() {
    return (
        <>
            {/* insight */}
            <section id="insight" className="py-24 bg-gradient-to-b from-white to-[#F8FBFD]">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2240] mb-4">
                            Latest Insights & Updates
                        </h2>
                        <p className="text-xl text-gray-600">
                            Stay informed with expert tips, compliance updates, and business growth strategies
                        </p>
                    </div>

                    {/* Image Hover Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {insights.map((insight) => (
                            <Card
                                key={insight.id}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-96 cursor-pointer"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${insight.image})` }}
                                />

                                {/* Dark Overlay on Hover
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

  {/* === Content that Slides Up on Hover === */}
                                <div className="relative h-full flex flex-col justify-end p-8 text-white transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600 ease-out">
                                    <h3 className="text-2xl font-bold mb-3 drop-shadow-lg line-clamp-2">
                                        {insight.title}
                                    </h3>
                                    <p className="text-base mb-6 line-clamp-3 drop-shadow">
                                        {insight.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm mb-6 opacity-90">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                Calendar {insight.date}
                                            </span>
                                            <span className="mx-2">•</span>
                                            <span>{insight.readTime}</span>
                                        </div>
                                    </div>

                                    <Button className="w-fit bg-[#00A8E8] hover:bg-[#0095D1] font-medium flex items-center gap-2">
                                        Read Article
                                        Right Arrow
                                    </Button>
                                </div>

                                {/* === Bottom Title Bar — Hides on Hover === */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white 
                  transform transition-all duration-500 ease-out 
                  group-hover:opacity-0 group-hover:translate-y-8 
                  pointer-events-none">
                                    <h3 className="text-xl font-bold line-clamp-2">{insight.title}</h3>
                                    <div className="flex items-center gap-3 mt-2 text-sm opacity-80">
                                        <span>{insight.date}</span>
                                        <span>•</span>
                                        <span>{insight.readTime}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Optional: View All Button */}
                    <div className="text-center mt-16">
                        <Button size="lg" className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold px-10">
                            View All Insights
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}