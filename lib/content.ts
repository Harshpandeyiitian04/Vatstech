import {
  Calculator,
  Code,
  FileText,
  Megaphone,
  Monitor,
  Palette,
  TrendingUp,
  Users,
} from "lucide-react";

export const benefits = [
  "Startup India Certified Agency",
  "Complete Business & IT Solutions Under One Roof",
  "100% Transparent & Affordable Pricing",
  "Trusted by 500+ Startups, SMEs & Institutions",
  "Proven Expertise with Pan India Service",
  "Dedicated Support & Fast Delivery",
];

export const services = [
  {
    id: 1,
    icon: FileText,
    title: "Business Registration & Certification",
    tags: "Company incorporation, GST, MSME, trademark registration.",
  },
  {
    id: 2,
    icon: Calculator,
    title: "Annual Compliance",
    tags: "Accounting and corporate filings.",
  },
  {
    id: 3,
    icon: Palette,
    title: "Graphic Design",
    tags: "Logos, brochures, and brand visuals.",
  },
  {
    id: 4,
    icon: Monitor,
    title: "Website Design & Development",
    tags: "Responsive and user-friendly digital experiences.",
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Digital Marketing",
    tags: "SEO, social media, PPC, and content marketing.",
  },
  {
    id: 6,
    icon: Users,
    title: "Training & Manpower Solutions",
    tags: "Corporate training and professional development.",
  },
];

export type CategoryKey =
  | "compliance"
  | "creative"
  | "tech"
  | "marketing"
  | "training";

export const servicesData = {
  compliance: [
    { name: "MSME/UDYAM Registration", price: 999 },
    { name: "GST Registration", price: 1499 },
    { name: "Income Tax Return (ITR) Filing", price: 1499 },
    { name: "PF & ESI Registration", price: 1999 },
    { name: "Proprietorship Registration", price: 2499 },
    { name: "Trademark Registration", price: 2499 },
    { name: "Import Export Code (IEC)", price: 2499 },
    { name: "FSSAI Registration", price: 2999 },
    { name: "ISO Certification", price: 2999 },
    { name: "Private Limited Company Registration", price: 2999 },
    { name: "Limited Liability Partnership (LLP)", price: 2999 },
    { name: "Section 8 Company/NGO Registration", price: 4999 },
    { name: "Startup India Registration", price: 5999 },
    { name: "Startup India Seed Fund Assistance", price: 9999 },
    { name: "MCA Annual Filings", price: 11999 },
  ],
  creative: [
    { name: "Logo Design", price: 999 },
    { name: "Banner/Poster Design", price: 1999 },
    { name: "Graphic Design (Custom)", price: 1999 },
    { name: "Brochure/Catalog Design", price: 1999 },
    { name: "Website Design (Visual Only)", price: 9999 },
    { name: "UI/UX Design (Full)", price: 4999 },
  ],
  tech: [
    { name: "Web & Mobile Applications", price: "Custom" },
    { name: "E-commerce Platforms", price: "Custom" },
    { name: "CRM Development", price: "Custom" },
    { name: "ERP Development", price: "Custom" },
    { name: "Custom Software Development", price: "Custom" },
  ],
  marketing: [
    { name: "Social Media Management", price: 5999 },
    { name: "Search Engine Optimization (SEO)", price: 7999 },
    { name: "Google Ads & PPC Campaigns", price: 9999 },
    { name: "Email Marketing", price: 1499 },
    { name: "Content Marketing", price: 999 },
    { name: "Online Reputation Management (ORM)", price: 7999 },
  ],
  training: [
    { name: "Corporate Training Programs", price: "Custom" },
    { name: "Skill Development & Career Support", price: 999 },
    { name: "Staffing & Recruitment Services", price: "Custom" },
    { name: "Internship & Placement Assistance", price: "Custom" },
    { name: "Custom Learning Modules", price: "Custom" },
  ],
};

export const categoryInfo = {
  compliance: {
    name: "Compliance Services",
    icon: FileText,
    color: "from-blue-500 to-cyan-600",
    items: [
      "GST & Tax Filing",
      "Company Registration",
      "Trademark & IEC",
      "Startup India",
    ],
  },
  creative: {
    name: "Creative Design",
    icon: Palette,
    color: "from-blue-500 to-cyan-600",
    items: [
      "Logo & Branding",
      "Banners & Brochures",
      "Website UI/UX",
      "Graphic Design",
    ],
  },
  tech: {
    name: "Tech Development",
    icon: Code,
    color: "from-blue-500 to-cyan-600",
    items: ["Web & Mobile Apps", "E-commerce", "CRM & ERP", "Custom Software"],
  },
  marketing: {
    name: "Digital Marketing",
    icon: Megaphone,
    color: "from-blue-500 to-cyan-600",
    items: [
      "SEO & Google Ads",
      "Social Media",
      "Email & Content",
      "Reputation Management",
    ],
  },
  training: {
    name: "Training & Manpower",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
    items: [
      "Corporate Training",
      "Recruitment",
      "Internships",
      "Skill Programs",
    ],
  },
};

export const insights = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    title: "How to Register Your Startup Under Startup India in 2025",
    excerpt:
      "Complete step-by-step guide with DPIIT recognition, tax benefits, and seed funding eligibility.",
    date: "Nov 20, 2025",
    author: "Priya Sharma",
    readTime: "5 min read",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    title: "GST Registration Made Easy for Small Businesses",
    excerpt:
      "Avoid common mistakes and get your GSTIN in just 3 days with our expert compliance team.",
    date: "Nov 15, 2025",
    author: "Rahul Verma",
    readTime: "4 min read",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    title: "Why Every Business Needs a Professional Logo in 2025",
    excerpt:
      "First impressions matter. Learn how strong branding increases trust and customer recall.",
    date: "Nov 10, 2025",
    author: "Ananya Desai",
    readTime: "6 min read",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    title: "Top 10 SEO Trends to Dominate Google Rankings in 2025",
    excerpt:
      "AI-powered search, voice optimization, core web vitals — stay ahead of the algorithm.",
    date: "Nov 5, 2025",
    author: "Vikram Singh",
    readTime: "8 min read",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    title: "From Idea to Pvt Ltd Company in 10 Days",
    excerpt:
      "Real journey of how we helped 500+ founders legally launch their dream business.",
    date: "Oct 28, 2025",
    author: "Team Vatstech",
    readTime: "7 min read",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    title: "The Future of Web Development: AI + No-Code Tools",
    excerpt:
      "How modern developers are building 10x faster using AI assistants and visual builders.",
    date: "Oct 20, 2025",
    author: "Arjun Patel",
    readTime: "6 min read",
  },
];
