import { services } from "@/lib/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function About() {
    const router = useRouter()
    function handleAbout() {
        router.push('/about')
    }
    return (
        <>
            <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8FBFD]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center text-center">
                        <div className="w-full max-w-7xl">
                            <div className="mb-8 sm:mb-12 lg:mb-16">
                                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2240] mb-3 sm:mb-4 lg:mb-6 leading-tight">
                                    We Serve
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
                                    End-to-end support from registrations to IT & Marketing.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                {services.map((service) => (
                                    <Card
                                        key={service.id}
                                        className="group border border-gray-200 hover:border-[#00A8E8] hover:shadow-lg sm:hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
                                    >
                                        <CardHeader className="text-center pb-3 sm:pb-4 lg:pb-6 px-3 sm:px-6">
                                            {/* Icon Container */}
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#00A8E8] to-[#0095D1] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                                {(() => {
                                                    const Icon = service.icon as any;
                                                    return <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />;
                                                })()}
                                            </div>
                                            <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-[#0A2240] mb-2">
                                                {service.title}
                                            </CardTitle>
                                            <CardDescription className="text-[#00A8E8] font-medium text-sm sm:text-base lg:text-lg mt-1 sm:mt-2">
                                                {service.tags}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-center pt-0 px-3 sm:px-6">
                                            <Button
                                                onClick={handleAbout}
                                                variant="link"
                                                className="text-[#00A8E8] hover:text-[#0095D1] font-semibold text-sm sm:text-base p-0 h-auto"
                                            >
                                                Learn More
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}