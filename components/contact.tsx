import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export function Contact() {
    const router = useRouter()
    function handleContact() {
        router.push('/contact')
    }
    const [formData, setFormData] = useState({
        name: '',
        number: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.name,
                    email: '', // Empty for this form
                    phone: formData.number,
                    message: 'Quick contact request - please call back',
                    title: 'Quick Contact Request'
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

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
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-12">
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
                            {/* Contact Form */}
                            <div className="bg-white p-8 rounded-lg shadow-md min-w-100">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            name="number"
                                            placeholder="Your Phone number..."
                                            value={formData.number}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-cyan-600 hover:bg-cyan-300 text-white hover:scale-105'
                                            }`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                                {submitStatus === 'success' && (
                                    <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                        Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                        Oops! Something went wrong. Please try again.
                                    </div>
                                )}
                            </div>
                        </div>
                        <Button onClick={handleContact} size="lg" className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-xl px-12 py-7">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}