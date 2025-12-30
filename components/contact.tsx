import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { sendEmail, useNavigation } from "@/lib/functions";

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const { handleContact } = useNavigation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const result = await sendEmail({
                name: formData.name,
                email: '',
                phone: formData.number,
                message: 'Quick contact request - please call back',
                title: 'Quick Contact Request'
            })
            if (result.text === 'OK') {
                setSubmitStatus('success');
                setFormData({ name: '', number: '' });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


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
                                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="number"
                                            placeholder="Your Phone number..."
                                            value={formData.number}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-cyan-600 hover:bg-cyan-700 text-white hover:scale-[1.02]'
                                            }`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                                {submitStatus === 'success' && (
                                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm sm:text-base">
                                        Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm sm:text-base">
                                        Oops! Something went wrong. Please try again.
                                    </div>
                                )}
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