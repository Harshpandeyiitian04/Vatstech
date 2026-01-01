'use client'
import { servicesData } from "@/lib/servicescontent";
import { serviceDetails } from "@/lib/servicescontent";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, CreditCard, MessageSquare, Phone, Shield, Loader2 } from "lucide-react";
import { slugify } from "@/lib/functions";
import Messagebox from "@/components/messagebox";

// Import Razorpay types
declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function ServiceSlugPage() {
    const params = useParams();
    const slug = params.slug as string[];
    const categorySlug = slug?.[0] ?? null;
    const serviceSlug = slug?.[1] ?? null;
    const [userName, setUserName] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const name = localStorage.getItem('userName') || sessionStorage.getItem('userName');
        const email = localStorage.getItem('email') || sessionStorage.getItem('email');
        if (name||email) {
            setUserName(name) ;
            setUserEmail(email);
        };
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [razorpayLoaded, setRazorpayLoaded] = useState(false);

    const category = categorySlug ? servicesData[categorySlug] : null;
    const service = category?.services.find(
        (s) => slugify(s.name) === serviceSlug
    );

    // Get service details based on service name
    const getServiceDetails = () => {
        if (!service) return null;

        // Create a key from service name for lookup
        const detailKey = service.name.toLowerCase().replace(/[^a-z0-9\s]/g, '');

        // Find matching service details
        const matchedKey = Object.keys(serviceDetails).find(key =>
            detailKey.includes(key.toLowerCase()) ||
            key.toLowerCase().includes(detailKey)
        );

        return matchedKey ? serviceDetails[matchedKey] : null;
    };

    const serviceDetail = getServiceDetails();

    // Load Razorpay script
    useEffect(() => {
        if (typeof window !== 'undefined' && !window.Razorpay) {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            script.onload = () => setRazorpayLoaded(true);
            script.onerror = () => console.error('Failed to load Razorpay script');
            document.body.appendChild(script);
        } else {
            setRazorpayLoaded(true);
        }
    }, []);

    const initiateWhatsApp = () => {
        const message = `Hi, I'm interested in ${service?.name} service. Please share payment details.`;
        const whatsappUrl = `https://wa.me/919576894955?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const initiatePhoneCall = () => {
        window.location.href = 'tel:+919576894955';
    };

    // In your ServiceSlugPage component
    const generateReceipt = () => {
        const timestamp = Date.now();
        const serviceCode = service?.name
            ?.replace(/[^a-zA-Z]/g, '')
            .substring(0, 5)
            .toUpperCase();
        return `VT${serviceCode}${timestamp.toString().slice(-6)}`;
    };


    // In your ServiceSlugPage component - update handlePayNow function
    const handlePayNow = async () => {
        if (!service || service.price === "Custom") {
            alert('This service requires custom pricing. Please submit the enquiry form first.');
            return;
        }

        if (!razorpayLoaded) {
            alert('Payment system is loading. Please try again in a moment.');
            return;
        }

        setIsProcessingPayment(true);

        try {
            // Convert price to number
            const priceStr = service.price.toString().replace(/,/g, '');
            const amount = 1.18 * parseFloat(priceStr);


            // Then in handlePayNow:
            const orderResponse = await fetch('/api/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: amount,
                    receipt: generateReceipt(), // Add this
                    notes: {
                        service: service.name,
                        category: category?.title,
                        customerName: formData.name || userName,
                        customerEmail: userEmail || 'vatstechb@gmail.com',
                    },
                }),
            });

            const orderData = await orderResponse.json();

            if (!orderData.success) {
                throw new Error(orderData.error || 'Failed to create order');
            }

            // Step 2: Initialize Razorpay checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: orderData.order.amount,
                currency: orderData.order.currency,
                name: "VatsTech Business Solutions",
                description: `${service.name}`,
                image: "/logo.jpg", // Make sure you have a logo.png in public folder
                order_id: orderData.order.id,
                handler: function (response: any) {
                    setIsProcessingPayment(false);

                    // Handle successful payment
                    const successUrl = `/payment-success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&amount=${amount}&service=${encodeURIComponent(service.name)}&category=${encodeURIComponent(category?.title || '')}`;
                    window.location.href = successUrl;
                },
                prefill: {
                    name: formData.name || '',
                    email: formData.email || '',
                    contact: formData.phone || ''
                },
                notes: {
                    service: service.name,
                    category: category?.title,
                },
                theme: {
                    color: "#00A8E8"
                },
                modal: {
                    ondismiss: function () {
                        setIsProcessingPayment(false);
                    }
                }
            };

            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();

        } catch (error: any) {
            console.error('Payment error:', error);
            setIsProcessingPayment(false);
            alert(`Payment failed: ${error.message}. Please try again or contact us via WhatsApp.`);
        }
    };

    const handleWhatsAppPayment = () => {
        if (!service || service.price === "Custom") {
            alert('This service requires custom pricing. Please submit the enquiry form first.');
            return;
        }

        const message = `Hi, I want to pay ₹${service.price} for ${service.name} (${category?.title}). Please share payment details.`;
        const whatsappUrl = `https://wa.me/919576894955?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
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
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left Column - Service Details with Payment Button */}
                    <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                        {/* Service Header */}
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
                                {service ? (serviceDetail?.description || service.desc) : category.description}
                            </p>
                        </header>

                        {/* Specific Service Details */}
                        {service ? (
                            <div className="space-y-6">
                                {/* Pricing Card with Payment Button */}
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-4">
                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Service Pricing</h2>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00A8E8]">
                                                    {service.price === "Custom" ? "Custom" : `₹${service.price}`}
                                                </span>
                                                {service.price !== "Custom" && (
                                                    <span className="text-sm text-gray-500">+18% GST</span>
                                                )}
                                            </div>
                                            <p className="text-gray-600 text-sm sm:text-base mt-2">
                                                {service.price === "Custom"
                                                    ? "Contact us for personalized pricing"
                                                    : "All inclusive price for complete service"
                                                }
                                            </p>
                                        </div>

                                        {/* PAYMENT BUTTON */}
                                        {service.price !== "Custom" && (
                                            <div className="flex flex-col gap-3">
                                                <button
                                                    onClick={handlePayNow}
                                                    disabled={isProcessingPayment || !razorpayLoaded}
                                                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-colors shadow-md hover:shadow-lg whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px]"
                                                >
                                                    {isProcessingPayment ? (
                                                        <>
                                                            <Loader2 className="w-5 h-5 animate-spin" />
                                                            Processing...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <CreditCard className="w-5 h-5" />
                                                            Pay Now
                                                        </>
                                                    )}
                                                </button>

                                                {/* Fallback WhatsApp Payment Button */}
                                                <button
                                                    onClick={handleWhatsAppPayment}
                                                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-lg font-semibold text-xs transition-colors"
                                                >
                                                    <MessageSquare className="w-4 h-4" />
                                                    Pay via WhatsApp
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Payment Methods Info */}
                                    {service.price !== "Custom" && (
                                        <div className="mt-4 pt-4 border-t border-blue-200">
                                            <p className="text-sm text-gray-600 mb-2">Accepted Payment Methods:</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium border">Credit/Debit Card</span>
                                                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium border">UPI</span>
                                                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium border">Net Banking</span>
                                                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium border">Wallet</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                                                <Shield className="w-3 h-3" />
                                                Secure payment powered by Razorpay
                                            </p>
                                        </div>
                                    )}

                                    {/* Custom Pricing Message */}
                                    {service.price === "Custom" && (
                                        <div className="mt-4 p-3 bg-blue-100 border border-blue-200 rounded-lg">
                                            <p className="text-blue-800 text-sm sm:text-base text-center">
                                                💡 Custom pricing available. Submit enquiry for personalized quote.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Service Features - What's Included Section */}
                                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">What's Included</h2>

                                    {/* Service Highlights */}
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Highlights</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <div className="text-blue-600 font-bold mb-1">Expert Team</div>
                                                <div className="text-sm text-gray-600">Experienced professionals handling your case</div>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <div className="text-blue-600 font-bold mb-1">Fast Processing</div>
                                                <div className="text-sm text-gray-600">Quick turnaround time guaranteed</div>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <div className="text-blue-600 font-bold mb-1">Transparent Pricing</div>
                                                <div className="text-sm text-gray-600">No hidden charges or extra fees</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Description Section */}
                                {serviceDetail?.details && (
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Detailed Overview</h2>
                                        <div className="prose max-w-none">
                                            <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line">
                                                {serviceDetail.details}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Payment Process Info */}
                                {service.price !== "Custom" && (
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Payment Process</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <span className="font-bold text-blue-600">1</span>
                                                </div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Click Pay Now</h3>
                                                <p className="text-sm text-gray-600">Choose your payment method</p>
                                            </div>
                                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <span className="font-bold text-blue-600">2</span>
                                                </div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Complete Payment</h3>
                                                <p className="text-sm text-gray-600">Safe & secure Razorpay checkout</p>
                                            </div>
                                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <span className="font-bold text-blue-600">3</span>
                                                </div>
                                                <h3 className="font-semibold text-gray-800 mb-1">Get Confirmation</h3>
                                                <p className="text-sm text-gray-600">Instant email & WhatsApp confirmation</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Service List */
                            <div className="grid sm:grid-cols-2 gap-4">
                                {category.services.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={`/services/${categorySlug}/${slugify(item.name)}`}
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

                    {/* Right Column - MESSAGE FORM ONLY */}
                    <div className="space-y-6">
                        {/* Message Form Card */}
                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm sticky top-21">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
                                Get a Quote
                            </h2>
                            <p className="text-gray-600 text-sm text-center mb-6">
                                Fill in your details and we'll contact you within 24 hours
                            </p>
                            ,
                            <Messagebox title='Service Inquiry' servicename={service?.name || 'General Inquiry'} categoryname={category?.title || 'N/A'} formData={formData} setFormData={setFormData} />

                            {/* Alternative Contact Options */}
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