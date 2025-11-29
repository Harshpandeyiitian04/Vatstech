'use client';
import { ChevronLeft, ChevronRight, Menu, Mail, Phone, MapPin, Github, Twitter, Linkedin, FileText, Palette, Code, Megaphone, Users, ArrowLeftIcon, ArrowRightIcon, CheckCircle2Icon, CircleCheckIcon, CheckCircle2, Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  const benefits = [
    "EStartup India Certified Agency",
    "Complete Business & IT Solutions Under One Roof",
    "100% Transparent & Affordable Pricing",
    "Trusted by 500+ Startups, SMEs & Institutions",
    "Proven Expertise with Pan India Service",
    "Dedicated Support & Fast Delivery"
  ];

  const services = [
    {
      id: 1,
      icon: "AI",
      title: "Startups & Entrepreneurs",
      tags: "Compliance, digital presence, and growth solutions."
    },
    {
      id: 2,
      icon: "Cloud",
      title: "SMEs & Corporates",
      tags: "Complete Business & IT Solutions."
    },
    {
      id: 3,
      icon: "Dev",
      title: "Educational Institutions",
      tags: "ERP systems, manpower solutions, and training programs."
    }
  ];

  type CategoryKey = 'compliance' | 'creative' | 'tech' | 'marketing' | 'training';

  const servicesData = {
    compliance: [
      { name: 'MSME/UDYAM Registration', price: 999 },
      { name: 'GST Registration', price: 1499 },
      { name: 'Income Tax Return (ITR) Filing', price: 1499 },
      { name: 'PF & ESI Registration', price: 1999 },
      { name: 'Proprietorship Registration', price: 2499 },
      { name: 'Trademark Registration', price: 2499 },
      { name: 'Import Export Code (IEC)', price: 2499 },
      { name: 'FSSAI Registration', price: 2999 },
      { name: 'ISO Certification', price: 2999 },
      { name: 'Private Limited Company Registration', price: 2999 },
      { name: 'Limited Liability Partnership (LLP)', price: 2999 },
      { name: 'Section 8 Company/NGO Registration', price: 4999 },
      { name: 'Startup India Registration', price: 5999 },
      { name: 'Startup India Seed Fund Assistance', price: 9999 },
      { name: 'MCA Annual Filings', price: 11999 },
    ],
    creative: [
      { name: 'Logo Design', price: 999 },
      { name: 'Banner/Poster Design', price: 1999 },
      { name: 'Graphic Design (Custom)', price: 1999 },
      { name: 'Brochure/Catalog Design', price: 1999 },
      { name: 'Website Design (Visual Only)', price: 9999 },
      { name: 'UI/UX Design (Full)', price: 4999 },
    ],
    tech: [
      { name: 'Web & Mobile Applications', price: 'Custom' },
      { name: 'E-commerce Platforms', price: 'Custom' },
      { name: 'CRM Development', price: 'Custom' },
      { name: 'ERP Development', price: 'Custom' },
      { name: 'Custom Software Development', price: 'Custom' },
    ],
    marketing: [
      { name: 'Social Media Management', price: 5999 },
      { name: 'Search Engine Optimization (SEO)', price: 7999 },
      { name: 'Google Ads & PPC Campaigns', price: 9999 },
      { name: 'Email Marketing', price: 1499 },
      { name: 'Content Marketing', price: 999 },
      { name: 'Online Reputation Management (ORM)', price: 7999 },
    ],
    training: [
      { name: 'Corporate Training Programs', price: 'Custom' },
      { name: 'Skill Development & Career Support', price: 999 },
      { name: 'Staffing & Recruitment Services', price: 'Custom' },
      { name: 'Internship & Placement Assistance', price: 'Custom' },
      { name: 'Custom Learning Modules', price: 'Custom' },
    ],
  };

  const categoryInfo = {
    compliance: { name: 'Compliance Services', icon: FileText, color: 'from-blue-500 to-cyan-600', items: ['GST & Tax Filing', 'Company Registration', 'Trademark & IEC', 'Startup India'] },
    creative: { name: 'Creative Design', icon: Palette, color: 'from-blue-500 to-cyan-600', items: ['Logo & Branding', 'Banners & Brochures', 'Website UI/UX', 'Graphic Design'] },
    tech: { name: 'Tech Development', icon: Code, color: 'from-blue-500 to-cyan-600', items: ['Web & Mobile Apps', 'E-commerce', 'CRM & ERP', 'Custom Software'] },
    marketing: { name: 'Digital Marketing', icon: Megaphone, color: 'from-blue-500 to-cyan-600', items: ['SEO & Google Ads', 'Social Media', 'Email & Content', 'Reputation Management'] },
    training: { name: 'Training & Manpower', icon: Users, color: 'from-blue-500 to-cyan-600', items: ['Corporate Training', 'Recruitment', 'Internships', 'Skill Programs'] },
  };
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);

  const insights = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      title: "How to Register Your Startup Under Startup India in 2025",
      excerpt: "Complete step-by-step guide with DPIIT recognition, tax benefits, and seed funding eligibility.",
      date: "Nov 20, 2025",
      author: "Priya Sharma",
      readTime: "5 min read"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      title: "GST Registration Made Easy for Small Businesses",
      excerpt: "Avoid common mistakes and get your GSTIN in just 3 days with our expert compliance team.",
      date: "Nov 15, 2025",
      author: "Rahul Verma",
      readTime: "4 min read"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      title: "Why Every Business Needs a Professional Logo in 2025",
      excerpt: "First impressions matter. Learn how strong branding increases trust and customer recall.",
      date: "Nov 10, 2025",
      author: "Ananya Desai",
      readTime: "6 min read"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      title: "Top 10 SEO Trends to Dominate Google Rankings in 2025",
      excerpt: "AI-powered search, voice optimization, core web vitals — stay ahead of the algorithm.",
      date: "Nov 5, 2025",
      author: "Vikram Singh",
      readTime: "8 min read"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
      title: "From Idea to Pvt Ltd Company in 10 Days",
      excerpt: "Real journey of how we helped 500+ founders legally launch their dream business.",
      date: "Oct 28, 2025",
      author: "Team Vatstech",
      readTime: "7 min read"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      title: "The Future of Web Development: AI + No-Code Tools",
      excerpt: "How modern developers are building 10x faster using AI assistants and visual builders.",
      date: "Oct 20, 2025",
      author: "Arjun Patel",
      readTime: "6 min read"
    }
  ];

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0A2240] to-[#00A8E8] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  V
                </div>
                <span className="text-2xl font-bold text-[#0A2240]">
                  Vatstech
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-10">
              <Link href="#about" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">About</Link>
              <Link href="#blog" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">Blog</Link>
              <Link href="#contact" className="text-gray-700 hover:text-[#00A8E8] font-medium transition">Contact</Link>
              <Button className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold shadow-md">
                Get Started
              </Button>
            </nav>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-[#0A2240]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white">
                <div className="flex flex-col space-y-8 mt-10">
                  <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-800 hover:text-[#00A8E8]">About</Link>
                  <Link href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-800 hover:text-[#00A8E8]">Blog</Link>
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-800 hover:text-[#00A8E8]">Contact</Link>
                  <Button className="w-full bg-[#00A8E8] hover:bg-[#0095D1] text-white text-lg py-6">
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section - Blue Theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E6F4FA] via-white to-[#F0F9FF] py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-7xl md:text-7xl font-bold text-[#0A2240] mb-6">
              Your Complete Business Solution Partner
            </h1>
            <p className="text-2xl text-gray-600 mb-10 max-w-1000 mx-auto">
              <span>From business registration to digital transformation, we provide comprehensive solutions tailored for startups, SMEs, and corporates to accelerate growth and ensure compliance.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="default" className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-lg px-10 h-14">
                Explore Services
              </Button>
              <Button size="default" variant="outline" className="border-[#00A8E8] text-[#00A8E8] hover:bg-[#e4eef2] hover:text-[#00A8E8] h-14">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-[#F8FBFD]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0A2240] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Everything your business needs under one roof</p>
          </div>

          {/* Main 5 Category Cards */}
          {!activeCategory ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(categoryInfo).map(([key, cat]) => {
                const Icon = cat.icon;
                return (
                  <Card
                    key={key}
                    className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100"
                    onClick={() => setActiveCategory(key as CategoryKey)}
                  >
                    <CardHeader className="pb-8">
                      <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-center text-[#0A2240]">{cat.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600 text-center">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-center justify-start">
                            <CheckCircle2Icon className='text-[#0095D1] mx-3' />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-8 bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold">
                        View All Services <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            /* Expanded View - All Services in 3-column Grid */
            <>
              <Button
                variant="ghost"
                className="mb-8 text-[#00A8E8] hover:text-[#0095D1] text-xl hover:border hover:border-[#0095D1]"
                onClick={() => setActiveCategory(null)}
              >
                ← Back to Categories
              </Button>

              <h3 className="text-4xl font-bold text-[#0A2240] mb-10 text-center">
                {categoryInfo[activeCategory].name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData[activeCategory].map((service, index) => (
                  <Card
                    key={index}
                    className="border border-gray-200 hover:border-[#00A8E8] hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-[#0A2240]">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-[#00A8E8]">
                        {typeof service.price === 'number'
                          ? `₹${service.price.toLocaleString('en-IN')}`
                          : service.price}
                        <span className="text-sm font-normal text-gray-500 block mt-1">
                          {typeof service.price === 'number' ? 'starting' : ''}
                        </span>
                      </p>
                      <Button size="lg" className="mt-4 w-full bg-[#00A8E8] hover:bg-[#0095D1]">
                        <ArrowRightIcon />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#F8FBFD]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center text-center gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#0A2240] mb-6">We Serve</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                End-to-end support from registrations to IT & Marketing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className="group border border-gray-200 hover:border-[#00A8E8] hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 w-100"
                  >
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#00A8E8] to-[#0095D1] rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-bold">{service.icon}</span>
                      </div>
                      <CardTitle className="text-3xl text-[#0A2240]">{service.title}</CardTitle>
                      <CardDescription className="text-[#00A8E8] font-medium mt-2 text-lg">
                        {service.tags}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button variant="link" className="text-[#00A8E8] hover:text-[#0095D1] font-semibold">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section id="why-us" className="py-24 bg-gradient-to-b from-white to-[#F8FBFD]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2240] mb-8">
              Find Out How We Can Help Your Business Grow
            </h2>

            {/* Trust Benefits - Beautiful Checkmarks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center md:justify-start gap-4 text-lg text-gray-700 group"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#00A8E8] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-lg px-12 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      <section id="insight" className="py-24 bg-gradient-to-b from-white to-[#F8FBFD]">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2240] mb-4">
              Latest Insights & Updates
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed with expert tips, compliance updates, and business growth strategies
            </p>
          </div>

          {/* Image Hover Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <Card
                key={insight.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-96 cursor-pointer"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${insight.image})` }}
                />

                {/* Dark Overlay on Hover
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

  {/* === Content that Slides Up on Hover === */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600 ease-out">
                  <h3 className="text-2xl font-bold mb-3 drop-shadow-lg line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-base mb-6 line-clamp-3 drop-shadow">
                    {insight.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm mb-6 opacity-90">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        Calendar {insight.date}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{insight.readTime}</span>
                    </div>
                  </div>

                  <Button className="w-fit bg-[#00A8E8] hover:bg-[#0095D1] font-medium flex items-center gap-2">
                    Read Article
                    Right Arrow
                  </Button>
                </div>

                {/* === Bottom Title Bar — Hides on Hover === */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white 
                  transform transition-all duration-500 ease-out 
                  group-hover:opacity-0 group-hover:translate-y-8 
                  pointer-events-none">
                  <h3 className="text-xl font-bold line-clamp-2">{insight.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm opacity-80">
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Optional: View All Button */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-semibold px-10">
              View All Insights
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#F8FBFD]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0A2240] mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to transform your business with next-gen technology?
            </p>
            <div className="grid md:grid-cols-3 gap-10 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#E6F4FA] rounded-full flex items-center justify-center mb-5 shadow-inner">
                  <Mail className="h-10 w-10 text-[#00A8E8]" />
                </div>
                <p className="font-semibold text-[#0A2240]">Email</p>
                <p className="text-gray-600">hello@vatstech.io</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#E6F4FA] rounded-full flex items-center justify-center mb-5 shadow-inner">
                  <Phone className="h-10 w-10 text-[#00A8E8]" />
                </div>
                <p className="font-semibold text-[#0A2240]">Phone</p>
                <p className="text-gray-600">+91 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#E6F4FA] rounded-full flex items-center justify-center mb-5 shadow-inner">
                  <MapPin className="h-10 w-10 text-[#00A8E8]" />
                </div>
                <p className="font-semibold text-[#0A2240]">Location</p>
                <p className="text-gray-600">Mumbai, India</p>
              </div>
            </div>
            <Button size="lg" className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-xl px-12 py-7">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Deep Blue */}
      <footer className="bg-[#0A2240] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A8E8] to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                  V
                </div>
                <span className="text-2xl font-bold">Vatstech</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Building tomorrow's technology, today.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-5 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="#about" className="hover:text-[#00A8E8] transition">About</Link></li>
                <li><Link href="#blog" className="hover:text-[#00A8E8] transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-[#00A8E8] transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="#" className="hover:text-[#00A8E8] transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-[#00A8E8] transition">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5 text-lg">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-[#00A8E8] transition"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="hover:text-[#00A8E8] transition"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="hover:text-[#00A8E8] transition"><Github className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            © 2025 Vatstech. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}