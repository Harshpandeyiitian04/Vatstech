'use client'
import { servicesData } from "@/lib/servicescontent";
import Link from "next/link";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useParams } from "next/navigation";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

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
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [paymentLoading, setPaymentLoading] = useState(false);

    const category = categorySlug ? servicesData[categorySlug] : null;
    const service = category?.services.find(
        (s) => toSlug(s.name) === serviceSlug
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    email: formData.email,
                    phone: formData.phone,
                    message: `Service Request: ${service?.name || 'General'}\nCategory: ${category?.title || 'N/A'}`,
                    title: 'Service Request'
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (result.text === 'OK') {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '' });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePayNow = async () => {
        if (!formData.name || !formData.email || !formData.phone) {
            alert('Please fill all fields before proceeding to payment');
            return;
        }

        if (!service || service.price === "Custom") {
            alert('This service requires custom pricing. Please submit the request form first.');
            return;
        }

        setPaymentLoading(true);

        try {
            // Create checkout session
            const response = await fetch('/api/create-checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // amount: parseInt(service.price.replace(/,/g, '')), // Remove commas from price
                    serviceName: service.name,
                    customerName: formData.name,
                    customerEmail: formData.email,
                    customerPhone: formData.phone,
                }),
            });

            const { url, error } = await response.json();

            if (error) {
                alert('Payment error: ' + error);
                setPaymentLoading(false);
                return;
            }

            // Redirect to Stripe Checkout
            window.location.href = url;
        } catch (err) {
            console.error('Payment error:', err);
            alert('Something went wrong. Please try again.');
            setPaymentLoading(false);
        }
    };

    if (!category) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center">
                <h1 className="text-3xl font-bold">❌ Not Found</h1>
                <Link href="/#services" className="mt-4 text-blue-600 underline">
                    <button type="button" className="rounded-full bg-cyan-700 text-white p-3">
                        Back to Home
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="p-10 max-w-5xl mx-auto space-y-10">

            <header className="text-center space-y-3">
                <h1 className="text-4xl font-bold capitalize">{category.title}</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    {category.description}
                </p>
            </header>

            {/* If a specific service is opened */}
            {serviceSlug && service ? (
                <div className="border rounded-xl p-6 shadow max-w-3xl mx-auto space-y-5">
                    <h2 className="text-4xl font-bold text-blue-700">{service.name}</h2>

                    <div className="text-gray-700 leading-relaxed text-lg">
                        <p>{service.desc}</p>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-xl">
                        <h3 className="text-xl font-semibold">💰 Pricing:</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">
                            {service.price === "Custom" ? "➤ Custom Pricing Available" : `₹${service.price}`}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">*Taxes extra as applicable</p>
                    </div>

                    <div className="bg-gray-50 p-5 rounded-xl border">
                        <h3 className="text-xl font-semibold">📌 Service Includes:</h3>
                        <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
                            <li>Dedicated support until completion</li>
                            <li>Step-by-step guidance</li>
                            <li>Document and paperwork assistance</li>
                            <li>Fast processing & priority handling</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-6">
                    {category.services.map((item, i) => (
                        <Link
                            key={i}
                            href={`/services/${categorySlug}/${toSlug(item.name)}`}
                            className="block border p-5 rounded-xl hover:bg-gray-50 transition"
                        >
                            <h3 className="font-bold mb-1">{item.name}</h3>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                            <p className="text-blue-600 font-semibold mt-2">
                                {item.price === "Custom" ? "Custom Pricing" : `₹${item.price}`}
                            </p>
                        </Link>
                    ))}
                </div>
            )}

            {/* Contact Form */}
            <hr className="my-10" />

            <form onSubmit={handleSubmit} id="form" className="space-y-4 max-w-lg mx-auto">
                <h2 className="text-3xl font-bold text-center">
                    🚀 Request Service Details
                </h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border p-3 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border p-3 rounded"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border p-3 rounded"
                />

                {/* Payment Buttons */}
                <div className="space-y-3">
                    {service && service.price !== "Custom" && (
                        <button
                            type="button"
                            onClick={handlePayNow}
                            disabled={paymentLoading}
                            className={`w-full py-3 rounded-lg font-bold transition-all ${
                                paymentLoading
                                    ? 'bg-gray-400 cursor-not-allowed text-white'
                                    : 'bg-green-600 text-white hover:bg-green-700'
                            }`}
                        >
                            {paymentLoading ? 'Processing...' : `💳 Pay Now - ₹${service.price}`}
                        </button>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-lg font-bold transition-all ${
                            isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed text-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                    >
                        {isSubmitting ? 'Submitting...' : '📧 Request Info (No Payment)'}
                    </button>
                </div>

                {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                        ✅ Request submitted successfully! We'll contact you within 24 hours.
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                        ❌ Something went wrong. Please try again.
                    </div>
                )}

                <p className="text-sm text-center text-gray-400">
                    {service && service.price !== "Custom" 
                        ? 'Choose to pay now or request more information first'
                        : "We'll contact you within 24 hours ✔️"
                    }
                </p>
            </form>
        </div>
    );
}