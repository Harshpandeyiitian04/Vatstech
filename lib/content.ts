import {
  CheckCircle2,
  Target,
  Eye,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  Shield,
  Tag,
  Lightbulb,
  BookOpen,
  Calculator,
  Code,
  FileText,
  Megaphone,
  Monitor,
  Palette,
} from "lucide-react";

export const categories = [
  { id: "all", name: "All Insights", icon: BookOpen },
  { id: "compliance", name: "Compliance", icon: FileText },
  { id: "business", name: "Business Growth", icon: TrendingUp },
  { id: "technology", name: "Technology", icon: Lightbulb },
  { id: "marketing", name: "Marketing", icon: Tag },
];

export const insight = [
  {
    id: 1,
    title:
      "GST Compliance Updates for 2025: What Every Business Owner Needs to Know",
    excerpt:
      "Stay ahead of the curve with the latest GST compliance requirements and changes effective from January 2025. Learn about new filing procedures, penalty structures, and optimization strategies.",
    category: "compliance",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    author: "VatsTech Legal Team",
    featured: true,
  },
  {
    id: 2,
    title: "5 Digital Marketing Trends That Will Dominate 2025",
    excerpt:
      "Discover the emerging digital marketing strategies that successful businesses are implementing. From AI-powered campaigns to interactive content, learn what's driving results.",
    category: "marketing",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    author: "Marketing Team",
  },
  {
    id: 3,
    title: "Complete Guide to MSME Registration Benefits in 2025",
    excerpt:
      "Understanding the advantages of MSME registration including tax benefits, easier loan access, and government subsidies. A step-by-step breakdown of the registration process.",
    category: "compliance",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    author: "VatsTech Advisory",
  },
  {
    id: 4,
    title: "Scaling Your Startup: From Idea to Profitable Business",
    excerpt:
      "Real strategies from successful entrepreneurs on building sustainable growth. Learn about funding options, team building, and market expansion tactics that actually work.",
    category: "business",
    date: "Dec 8, 2024",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    author: "Business Strategy Team",
    featured: true,
  },
  {
    id: 5,
    title:
      "Website Design Essentials: Creating User-Friendly Digital Experiences",
    excerpt:
      "Master the fundamentals of effective website design. From responsive layouts to conversion optimization, discover what makes websites that actually generate business.",
    category: "technology",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    author: "Tech Team",
  },
  {
    id: 6,
    title: "Trademark Registration: Protecting Your Brand Identity",
    excerpt:
      "Everything you need to know about trademark registration in India. Learn about the process, costs, common mistakes to avoid, and how to maintain your trademark rights.",
    category: "compliance",
    date: "Dec 3, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    author: "Legal Team",
  },
  {
    id: 7,
    title: "SEO Strategies That Actually Work in 2025",
    excerpt:
      "Cut through the noise with proven SEO tactics. From technical optimization to content strategy, learn how to rank higher and drive organic traffic to your business.",
    category: "marketing",
    date: "Dec 1, 2024",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    author: "SEO Specialists",
  },
  {
    id: 8,
    title: "Understanding Annual Compliance Requirements for Private Companies",
    excerpt:
      "A comprehensive guide to statutory compliance obligations including ROC filings, tax returns, and board meetings. Stay compliant and avoid penalties.",
    category: "compliance",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    author: "Compliance Team",
  },
  {
    id: 9,
    title: "Building a Strong Brand Identity: Logo Design Best Practices",
    excerpt:
      "Your logo is the face of your business. Learn the principles of effective logo design and how to create a visual identity that resonates with your target audience.",
    category: "business",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    author: "Design Team",
  },
];

export const stats = [
  { number: "2025", label: "Founded", icon: Award },
  { number: "Pan-India", label: "Service Coverage", icon: TrendingUp },
  { number: "50+", label: "Services Offered", icon: Briefcase },
  { number: "1000+", label: "Happy Clients", icon: Users },
];

export const values = [
  {
    icon: Award,
    title: "Quality Over Quantity",
    description:
      "We deliver exceptional service that creates lasting value, measuring success by client outcomes rather than transaction numbers.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description:
      "We equip clients with knowledge, tools, and confidence to thrive independently, fostering sustainable growth.",
  },
  {
    icon: Shield,
    title: "Compliance & Transparency",
    description:
      "As a Startup India-recognized company, we uphold the highest standards of legal compliance and operate with complete transparency.",
  },
  {
    icon: TrendingUp,
    title: "Innovation with Responsibility",
    description:
      "We embrace technology guided by data security, privacy protection, and user welfare, creating safe and sustainable solutions.",
  },
];

export const benefits = [
  "Startup India Certified Company",
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
