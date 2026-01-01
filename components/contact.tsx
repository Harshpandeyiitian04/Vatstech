import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { sendEmail, useNavigation } from "@/lib/functions";
import Messagebox from "./messagebox";

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const { handleContact } = useNavigation();

    return (
        <>
            <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8FBFD]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#0A2240] mb-4 sm:mb-6 leading-tight">
                            Get In Touch
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-2 sm:px-0">
                            Ready to transform your business with next-gen technology?
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
                            <div className="flex flex-col items-center p-4 sm:p-0">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E6F4FA] rounded-full flex items-center justify-center mb-3 sm:mb-5 shadow-inner">
                                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[#00A8E8]" />
                                </div>
                                <p className="font-semibold text-[#0A2240] text-sm sm:text-base">Email</p>
                                <p className="text-gray-600 text-sm sm:text-base break-all">info@vatstech.in</p>
                            </div>
                            <div className="flex flex-col items-center p-4 sm:p-0">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E6F4FA] rounded-full flex items-center justify-center mb-3 sm:mb-5 shadow-inner">
                                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[#00A8E8]" />
                                </div>
                                <p className="font-semibold text-[#0A2240] text-sm sm:text-base">Phone</p>
                                <p className="text-gray-600 text-sm sm:text-base">+91-9576894955</p>
                            </div>
                            <div className="flex flex-col items-center p-4 sm:p-0">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E6F4FA] rounded-full flex items-center justify-center mb-3 sm:mb-5 shadow-inner">
                                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[#00A8E8]" />
                                </div>
                                <p className="font-semibold text-[#0A2240] text-sm sm:text-base">Location</p>
                                <p className="text-gray-600 text-sm sm:text-base">Patna, Bihar India</p>
                            </div>
                            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm sm:shadow-md lg:col-span-1 sm:col-span-2 xs:col-span-1 min-w-70">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                                    Send a Message
                                </h3>
                                <Messagebox title='Quick Contact Request' servicename="" categoryname="" formData={formData} setFormData={setFormData} />
                            </div>
                        </div>
                        <Button
                            onClick={handleContact}
                            size="lg"
                            className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-7 h-auto"
                        >
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}