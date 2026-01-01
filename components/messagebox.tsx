import { sendEmail } from "@/lib/functions";
import { Loader2, Mail, MessageCircleWarning, Phone, Send, User } from "lucide-react";
import { useState } from "react";

interface MessageboxProps {
  title: string;
  servicename: string|undefined;
  categoryname: string;
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    phone: string;
    message: string;
  }>>;
}


export default function Messagebox({title,servicename,categoryname,formData,setFormData}:MessageboxProps) {
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

        if (!formData.name || !formData.email || !formData.phone) {
            alert('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const result = await sendEmail({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message || `Interested in ${servicename || 'Service'}. Please contact me.`,
                service: servicename || 'General Inquiry',
                category: categoryname || 'N/A',
                title: title
            });

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

    return (
        <>
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
                    <MessageCircleWarning className="absolute left-9 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <textarea
                        name="message"
                        placeholder="Type your message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 pl-9 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E8] text-sm sm:text-base"
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
                        <>
                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                            Sending...
                        </>
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
        </>
    )
}