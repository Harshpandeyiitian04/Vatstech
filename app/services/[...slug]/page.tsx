import { servicesData } from "@/lib/servicescontent";
import Link from "next/link";

function toSlug(str: string) {
    return str
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

type Props = { params: Promise<{ slug?: string[] }> };

export default async function ServiceSlugPage({ params }: Props) {
    const { slug } = await params; // 👈 FIX
    const categorySlug = slug?.[0] ?? null;
    const serviceSlug = slug?.[1] ?? null;

    const category = categorySlug ? servicesData[categorySlug] : null;
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

    const service = category.services.find(
        (s) => toSlug(s.name) === serviceSlug
    );

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

            <form id="form" className="space-y-4 max-w-lg mx-auto">
                <h2 className="text-3xl font-bold text-center">
                    🚀 Request Service Details
                </h2>

                <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
                <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
                <input type="text" placeholder="Phone Number" className="w-full border p-3 rounded" />

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
                    Submit Request
                </button>

                <p className="text-sm text-center text-gray-400">
                    We'll contact you within 24 hours ✔️
                </p>
            </form>
        </div>
    );
}
