import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
    return (
        <>
            {/* Contact Section */}
            <section id="contact" className="py-24 bg-[#F8FBFD]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-[#0A2240] mb-6">Get In Touch</h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Ready to transform your business with next-gen technology?
                        </p>
                        <div className="grid md:grid-cols-3 gap-10 mb-12">
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 bg-[#E6F4FA] rounded-full flex items-center justify-center mb-5 shadow-inner">
                                    <Mail className="h-10 w-10 text-[#00A8E8]" />
                                </div>
                                <p className="font-semibold text-[#0A2240]">Email</p>
                                <p className="text-gray-600"> info@vatstech.in</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 bg-[#E6F4FA] rounded-full flex items-center justify-center mb-5 shadow-inner">
                                    <Phone className="h-10 w-10 text-[#00A8E8]" />
                                </div>
                                <p className="font-semibold text-[#0A2240]">Phone</p>
                                <p className="text-gray-600"> +91- 9576894955</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 bg-[#E6F4FA] rounded-full flex items-center justify-center mb-5 shadow-inner">
                                    <MapPin className="h-10 w-10 text-[#00A8E8]" />
                                </div>
                                <p className="font-semibold text-[#0A2240]">Location</p>
                                <p className="text-gray-600">Patna, Bihar India</p>
                            </div>
                        </div>
                        <Button size="lg" className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-xl px-12 py-7">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}