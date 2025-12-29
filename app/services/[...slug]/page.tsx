'use client'
import { servicesData } from "@/lib/servicescontent";
import Link from "next/link";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useParams } from "next/navigation";
import { ArrowLeft, CreditCard, MessageSquare, Phone, Mail, CheckCircle, Shield, Send, User, PhoneCall, Calendar } from "lucide-react";

function toSlug(str: string) {
    return str
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

export default function ServiceSlugPage() {
    const params = useParams();
    const slug = params.slug as string[];
    const categorySlug = slug?.[0] ?? null;
    const serviceSlug = slug?.[1] ?? null;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const category = categorySlug ? servicesData[categorySlug] : null;
    const service = category?.services.find(
        (s) => toSlug(s.name) === serviceSlug
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            alert('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message || `Interested in ${service?.name || 'Service'}. Please contact me.`,
                    service: service?.name || 'General Inquiry',
                    category: category?.title || 'N/A',
                    title: 'Service Inquiry'
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (result.text === 'OK') {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePayNow = () => {
        if (!service || service.price === "Custom") {
            alert('This service requires custom pricing. Please submit the enquiry form first.');
            return;
        }
        alert(`Payment link for ₹${service.price} will be sent to your email within 24 hours.`);
    };

    const initiateWhatsApp = () => {
        const message = `Hi, I'm interested in ${service?.name} service. Please share payment details.`;
        const whatsappUrl = `https://wa.me/919576894955?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const initiatePhoneCall = () => {
        window.location.href = 'tel:+919576894955';
    };

    if (!category) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-4">
                <div className="text-center space-y-6 max-w-md">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Service Not Found</h1>
                    <p className="text-gray-600">The service you're looking for doesn't exist or has been moved.</p>
                    <Link href="/#services" className="inline-flex items-center gap-2 bg-[#00A8E8] hover:bg-[#0095D1] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
                <div className="mb-6 sm:mb-8">
                    <nav className="flex items-center gap-2 text-sm sm:text-base">
                        <Link href="/" className="text-gray-600 hover:text-[#00A8E8]">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/services" className="text-gray-600 hover:text-[#00A8E8]">Services</Link>
                        <span className="text-gray-400">/</span>
                        <Link href={`/services/${categorySlug}`} className="text-gray-600 hover:text-[#00A8E8] capitalize">
                            {category.title}
                        </Link>
                        {service && (
                            <>
                                <span className="text-gray-400">/</span>
                                <span className="text-gray-800 font-medium truncate">{service.name}</span>
                            </>
                        )}
                    </nav>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                        <header className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    {category.icon && <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#00A8E8]" />}
                                </div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 capitalize">
                                    {service ? service.name : category.title}
                                </h1>
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                                {service ? service.desc : category.description}
                            </p>
                        </header>
                        {service ? (
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-4">
                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Service Pricing</h2>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00A8E8]">
                                                    {service.price === "Custom" ? "Custom" : `₹${service.price}`}
                                                </span>
                                                {service.price !== "Custom" && (
                                                    <span className="text-sm text-gray-500">+ GST</span>
                                                )}
                                            </div>
                                            <p className="text-gray-600 text-sm sm:text-base mt-2">
                                                {service.price === "Custom"
                                                    ? "Contact us for personalized pricing"
                                                    : "All inclusive price for complete service"
                                                }
                                            </p>
                                        </div>
                                        {service.price !== "Custom" && (
                                            <button
                                                onClick={handlePayNow}
                                                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
                                            >
                                                <CreditCard className="w-5 h-5" />
                                                Pay Now
                                            </button>
                                        )}
                                    </div>
                                    {service.price === "Custom" && (
                                        <div className="mt-4 p-3 bg-blue-100 border border-blue-200 rounded-lg">
                                            <p className="text-blue-800 text-sm sm:text-base text-center">
                                                💡 Custom pricing available. Submit enquiry for personalized quote.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">What's Included</h2>
                                    <ul className="space-y-3">
                                        {[
                                            "Dedicated account manager",
                                            "Complete documentation support",
                                            "Regular progress updates",
                                            "Post-service support",
                                            "100% satisfaction guarantee",
                                            "Timely delivery commitment"
                                        ].map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 gap-4">
                                {category.services.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={`/services/${categorySlug}/${toSlug(item.name)}`}
                                        className="group bg-white rounded-xl p-4 hover:shadow-md border border-gray-200 hover:border-[#00A8E8] transition-all"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-gray-800 group-hover:text-[#00A8E8] text-sm sm:text-base">
                                                {item.name}
                                            </h3>
                                            <span className="text-[#00A8E8] font-semibold text-sm sm:text-base whitespace-nowrap ml-2">
                                                {item.price === "Custom" ? "Custom" : `₹${item.price}`}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{item.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm sticky top-6">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
                                Get a Quote
                            </h2>
                            <p className="text-gray-600 text-sm text-center mb-6">
                                Fill in your details and we'll contact you within 24 hours
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E8] text-sm sm:text-base"
                                    />
                                </div>

                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E8] text-sm sm:text-base"
                                    />
                                </div>

                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number *"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E8] text-sm sm:text-base"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your requirements..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E8] text-sm sm:text-base"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 sm:py-4 rounded-lg font-bold text-white transition-all text-sm sm:text-base flex items-center justify-center gap-2 ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-[#00A8E8] hover:bg-[#0095D1]'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        'Processing...'
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                            Send Enquiry
                                        </>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center text-sm">
                                        ✅ Enquiry submitted successfully! We'll contact you within 24 hours.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center text-sm">
                                        ❌ Something went wrong. Please try again.
                                    </div>
                                )}
                            </form>
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-center text-gray-600 text-sm mb-4">Need immediate assistance?</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={initiateWhatsApp}
                                        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-lg font-semibold transition-colors text-sm"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        WhatsApp
                                    </button>
                                    <button
                                        onClick={initiatePhoneCall}
                                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors text-sm"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Call Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}