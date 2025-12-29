'use client'
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
          email: formData.email,
          phone: '', // Empty for this form
          message: formData.message,
          title: 'Website Contact Form'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a href="mailto:info@vatstech.in" className="text-blue-600 hover:underline">info@vatstech.in</a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <a href="tel:+919576894955" className="text-blue-600 hover:underline">+91-9576894955</a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Patna, Bihar, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                <Send className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Website</p>
                  <a href="https://www.vatstech.in" className="text-blue-600 hover:underline">www.vatstech.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
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
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
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

        {/* Social Media */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Follow Us</h2>
          <div className="flex justify-center gap-6">

            <a href="https://www.facebook.com/vatstechb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Facebook className="w-6 h-6 text-blue-600" />
            </a>

            <a href="https://www.instagram.com/vatstechb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Instagram className="w-6 h-6 text-pink-500" />
            </a>

            <a href="https://www.x.com/vatstechb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Twitter className="w-6 h-6 text-blue-400" />
            </a>

            <a href="https://linkedin.com/company/vatstechb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Linkedin className="w-6 h-6 text-blue-700" />
            </a>

            <a href="https://wa.me/919576894955"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <FaWhatsapp className="w-6 h-6 text-green-500" />
            </a>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            <MapPin className="w-12 h-12 text-gray-500" />
            <p className="ml-4 text-gray-500">Map Placeholder - Embed Google Maps here for Patna, Bihar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;