import { services } from "@/lib/content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function About() {
    return (
        <>
            {/* About Section */}
            <section id="about" className="py-24 bg-[#F8FBFD]">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center text-center gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-bold text-[#0A2240] mb-6">We Serve</h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                End-to-end support from registrations to IT & Marketing.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {services.map((service) => (
                                    <Card
                                        key={service.id}
                                        className="group border border-gray-200 hover:border-[#00A8E8] hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 w-100"
                                    >
                                        <CardHeader className="text-center">
                                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#00A8E8] to-[#0095D1] rounded-2xl flex items-center justify-center shadow-lg">
                                                <span className="text-white text-2xl font-bold">{service.icon}</span>
                                            </div>
                                            <CardTitle className="text-3xl text-[#0A2240]">{service.title}</CardTitle>
                                            <CardDescription className="text-[#00A8E8] font-medium mt-2 text-lg">
                                                {service.tags}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <Button variant="link" className="text-[#00A8E8] hover:text-[#0095D1] font-semibold">
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