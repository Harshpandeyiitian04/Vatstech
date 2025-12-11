import { ChevronDown, ChevronUp, Check, ArrowRight, Briefcase, Palette, Code, TrendingUp, Users } from 'lucide-react';

export interface Service {
  name: string;
  price: number | string;
  desc: string;
}

export interface Category {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  services: Service[];
}

export const servicesData: Record<string, Category> = {
  compliance: {
    icon: Briefcase,
    title: "Business Registration & Compliance",
    description: "Streamline your business setup and ensure legal compliance with our comprehensive registration and certification services. From company incorporation to annual filings, we handle the paperwork so you can focus on growth.",
    services: [
      { name: "MSME/UDYAM Registration", price: 999, desc: "Get registered under MSME for benefits and subsidies" },
      { name: "GST Registration", price: 1499, desc: "Complete GST registration for your business operations" },
      { name: "Income Tax Return (ITR) Filing", price: 1499, desc: "Professional ITR filing for individuals and businesses" },
      { name: "PF & ESI Registration", price: 1999, desc: "Employee provident fund and insurance registration" },
      { name: "Proprietorship Registration", price: 2499, desc: "Register your sole proprietorship business" },
      { name: "Trademark Registration", price: 2499, desc: "Protect your brand with trademark registration" },
      { name: "Import Export Code (IEC)", price: 2499, desc: "Essential code for international trade operations" },
      { name: "FSSAI Registration", price: 2999, desc: "Food safety license for food businesses" },
      { name: "ISO Certification", price: 2999, desc: "International quality management certification" },
      { name: "Private Limited Company Registration", price: 2999, desc: "Incorporate your private limited company" },
      { name: "Limited Liability Partnership (LLP)", price: 2999, desc: "Register LLP for flexible business structure" },
      { name: "Section 8 Company/NGO Registration", price: 4999, desc: "Non-profit organization registration" },
      { name: "Startup India Registration", price: 5999, desc: "Official startup recognition with tax benefits" },
      { name: "Startup India Seed Fund Assistance", price: 9999, desc: "Guidance for government seed funding" },
      { name: "MCA Annual Filings", price: 11999, desc: "Complete MCA compliance and annual returns" },
    ]
  },
  creative: {
    icon: Palette,
    title: "Graphic Design & Branding",
    description: "Create a lasting impression with our professional design services. Our creative team crafts visually stunning logos, marketing materials, and brand identities that resonate with your target audience and elevate your business presence.",
    services: [
      { name: "Logo Design", price: 999, desc: "Unique, memorable logo for your brand identity" },
      { name: "Banner/Poster Design", price: 1999, desc: "Eye-catching promotional materials" },
      { name: "Graphic Design (Custom)", price: 1999, desc: "Custom graphics for any business need" },
      { name: "Brochure/Catalog Design", price: 1999, desc: "Professional print-ready marketing collateral" },
      { name: "UI/UX Design (Full)", price: 4999, desc: "Complete user interface and experience design" },
      { name: "Website Design (Visual Only)", price: 9999, desc: "Complete website mockups and visual design" },
    ]
  },
  tech: {
    icon: Code,
    title: "Website & Software Development",
    description: "Transform your digital vision into reality with cutting-edge technology solutions. We build responsive websites, mobile applications, and enterprise software tailored to your specific business requirements with scalability and performance in mind.",
    services: [
      { name: "Web & Mobile Applications", price: "Custom", desc: "Full-stack web and mobile app development" },
      { name: "E-commerce Platforms", price: "Custom", desc: "Complete online store with payment integration" },
      { name: "CRM Development", price: "Custom", desc: "Customer relationship management systems" },
      { name: "ERP Development", price: "Custom", desc: "Enterprise resource planning solutions" },
      { name: "Custom Software Development", price: "Custom", desc: "Bespoke software for unique business needs" },
    ]
  },
  marketing: {
    icon: TrendingUp,
    title: "Digital Marketing Solutions",
    description: "Amplify your online presence and drive measurable results with our data-driven digital marketing strategies. From SEO to social media management, we help you reach the right audience at the right time with compelling campaigns.",
    services: [
      { name: "Content Marketing", price: 999, desc: "Engaging content to attract and retain customers" },
      { name: "Email Marketing", price: 1499, desc: "Targeted email campaigns with high ROI" },
      { name: "Social Media Management", price: 5999, desc: "Complete social media strategy and execution" },
      { name: "Search Engine Optimization (SEO)", price: 7999, desc: "Improve search rankings and organic traffic" },
      { name: "Online Reputation Management (ORM)", price: 7999, desc: "Monitor and enhance your online reputation" },
      { name: "Google Ads & PPC Campaigns", price: 9999, desc: "Paid advertising for immediate results" },
    ]
  },
  training: {
    icon: Users,
    title: "Training & Manpower Solutions",
    description: "Invest in your most valuable asset—your people. Our comprehensive training programs and manpower solutions help develop skills, enhance productivity, and build high-performing teams aligned with your organizational goals.",
    services: [
      { name: "Skill Development & Career Support", price: 999, desc: "Professional development and career guidance" },
      { name: "Corporate Training Programs", price: "Custom", desc: "Tailored training for organizational growth" },
      { name: "Staffing & Recruitment Services", price: "Custom", desc: "Find the right talent for your business" },
      { name: "Internship & Placement Assistance", price: "Custom", desc: "Connect students with career opportunities" },
      { name: "Custom Learning Modules", price: "Custom", desc: "Specialized training content development" },
    ]
  }
};