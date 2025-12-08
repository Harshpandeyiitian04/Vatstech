import { benefits } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export function Client() {
    return (
        <>
            {/* Client Section */}
            <section id="why-us" className="py-24 bg-gradient-to-b from-white to-[#F8FBFD]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center">
                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2240] mb-8">
                            Find Out How We Can Help Your Business Grow
                        </h2>

                        {/* Trust Benefits - Beautiful Checkmarks */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center md:justify-start gap-4 text-lg text-gray-700 group"
                                >
                                    <CheckCircle2 className="w-8 h-8 text-[#00A8E8] flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                        <Button
                            size="lg"
                            className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-lg px-12 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Explore All Services
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}