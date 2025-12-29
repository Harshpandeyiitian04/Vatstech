import { benefits } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function Client() {
    const router = useRouter()
    function handleExplore() {
        router.push('/services')
    }
    return (
        <>
            <section id="why-us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F8FBFD]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2240] mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
                            Find Out How We Can Help Your Business Grow
                        </h2>
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start sm:items-center gap-3 sm:gap-4 text-base sm:text-lg text-gray-700 group p-2 sm:p-0"
                                >
                                    <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#00A8E8] flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5 sm:mt-0" />
                                    <span className="font-medium text-left sm:text-center md:text-left">{benefit}</span>
                                </div>
                            ))}
                        </div>
                        <Button
                            onClick={handleExplore}
                            size="lg"
                            className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-base sm:text-lg px-6 sm:px-8 md:px-12 h-12 sm:h-14 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl transition-all duration-300 w-full max-w-xs sm:max-w-none"
                        >
                            Explore All Services
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}