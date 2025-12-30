'use client'
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { sendEmail } from '@/lib/functions';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: '',
        message: formData.message,
        title: 'Website Contact Form'
      })

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Contact Information
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm sm:shadow-md">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Email</p>
                  <a href="mailto:info@vatstech.in" className="text-blue-600 hover:underline text-sm sm:text-base truncate">
                    info@vatstech.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm sm:shadow-md">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Phone</p>
                  <a href="tel:+919576894955" className="text-blue-600 hover:underline text-sm sm:text-base">
                    +91-9576894955
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm sm:shadow-md">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Location</p>
                  <p className="text-gray-600 text-sm sm:text-base">Patna, Bihar, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm sm:shadow-md">
                <Send className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Website</p>
                  <a href="https://www.vatstech.in" className="text-blue-600 hover:underline text-sm sm:text-base">
                    www.vatstech.in
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm sm:shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Send a Message
            </h2>
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
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-[1.02]'
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
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
            Follow Us
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            <a
              href="https://www.facebook.com/vatstechb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-white rounded-full shadow-sm sm:shadow-md hover:shadow-lg transition-all hover:scale-105"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/vatstechb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-white rounded-full shadow-sm sm:shadow-md hover:shadow-lg transition-all hover:scale-105"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
            </a>
            <a
              href="https://www.x.com/vatstechb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-white rounded-full shadow-sm sm:shadow-md hover:shadow-lg transition-all hover:scale-105"
              aria-label="Follow us on X (Twitter)"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </a>
            <a
              href="https://linkedin.com/company/vatstechb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-white rounded-full shadow-sm sm:shadow-md hover:shadow-lg transition-all hover:scale-105"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
            </a>
            <a
              href="https://wa.me/919576894955"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-white rounded-full shadow-sm sm:shadow-md hover:shadow-lg transition-all hover:scale-105"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm sm:shadow-md overflow-hidden">
          <div className="h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-100 flex flex-col sm:flex-row items-center justify-center p-4">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-500 mb-2 sm:mb-0 sm:mr-4" />
            <p className="text-gray-500 text-sm sm:text-base md:text-lg text-center sm:text-left">
              Map Placeholder - Embed Google Maps here for Patna, Bihar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};