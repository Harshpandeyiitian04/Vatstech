import { Button } from "./ui/button";
import { useNavigation } from "@/lib/functions";

export function Intro() {
  const { handleExplore } = useNavigation();
  const { handleContact } = useNavigation();

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-[#E6F4FA] via-white to-[#F0F9FF] py-12 md:py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A2240] mb-4 sm:mb-6 leading-tight">
                            Your Trusted Digital Partner for Business Growth
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-0 leading-relaxed">
                            A multi-service company dedicated to empowering individuals, entrepreneurs, and organizations to thrive in today's competitive business landscape through comprehensive business solutions across India.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center items-stretch xs:items-center">
                            <Button
                                size="lg"
                                className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-base sm:text-lg px-6 sm:px-8 lg:px-10 h-12 sm:h-14 w-full xs:w-auto min-w-[70px] lg:w-119 transition-all duration-300"
                                onClick={handleExplore}
                            >
                                Explore Services
                            </Button>
                            <Button
                                onClick={handleContact}
                                size="lg"
                                variant="outline"
                                className="border-2 border-[#00A8E8] text-[#00A8E8] hover:bg-[#e4eef2] hover:text-[#00A8E8] h-12 sm:h-14 w-full xs:w-auto min-w-[70px] lg:w-119 transition-all duration-300"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="absolute top-10 left-5 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#00A8E8]/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-5 w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-[#00A8E8]/5 rounded-full blur-xl"></div>
            </section>
        </>
    )
}