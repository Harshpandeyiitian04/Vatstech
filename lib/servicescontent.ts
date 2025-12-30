import {
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight,
  Briefcase,
  Palette,
  Code,
  TrendingUp,
  Users,
} from "lucide-react";

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
    description:
      "Streamline your business setup and ensure legal compliance with our comprehensive registration and certification services. From company incorporation to annual filings, we handle the paperwork so you can focus on growth.",
    services: [
      {
        name: "MSME/UDYAM Registration",
        price: 999,
        desc: "Get registered under MSME for benefits and subsidies",
      },
      {
        name: "GST Registration",
        price: 1499,
        desc: "Complete GST registration for your business operations",
      },
      {
        name: "Income Tax Return (ITR) Filing",
        price: 1499,
        desc: "Professional ITR filing for individuals and businesses",
      },
      {
        name: "PF & ESI Registration",
        price: 1999,
        desc: "Employee provident fund and insurance registration",
      },
      {
        name: "Proprietorship Registration",
        price: 2499,
        desc: "Register your sole proprietorship business",
      },
      {
        name: "Trademark Registration",
        price: 2499,
        desc: "Protect your brand with trademark registration",
      },
      {
        name: "Import Export Code (IEC)",
        price: 2499,
        desc: "Essential code for international trade operations",
      },
      {
        name: "FSSAI Registration",
        price: 2999,
        desc: "Food safety license for food businesses",
      },
      {
        name: "ISO Certification",
        price: 2999,
        desc: "International quality management certification",
      },
      {
        name: "Private Limited Company Registration",
        price: 2999,
        desc: "Incorporate your private limited company",
      },
      {
        name: "Limited Liability Partnership (LLP)",
        price: 2999,
        desc: "Register LLP for flexible business structure",
      },
      {
        name: "Section 8 Company/NGO Registration",
        price: 4999,
        desc: "Non-profit organization registration",
      },
      {
        name: "Startup India Registration",
        price: 5999,
        desc: "Official startup recognition with tax benefits",
      },
      {
        name: "Startup India Seed Fund Assistance",
        price: 9999,
        desc: "Guidance for government seed funding",
      },
      {
        name: "MCA Annual Filings",
        price: 11999,
        desc: "Complete MCA compliance and annual returns",
      },
    ],
  },
  creative: {
    icon: Palette,
    title: "Graphic Design & Branding",
    description:
      "Create a lasting impression with our professional design services. Our creative team crafts visually stunning logos, marketing materials, and brand identities that resonate with your target audience and elevate your business presence.",
    services: [
      {
        name: "Logo Design",
        price: 999,
        desc: "Unique, memorable logo for your brand identity",
      },
      {
        name: "Banner/Poster Design",
        price: 1999,
        desc: "Eye-catching promotional materials",
      },
      {
        name: "Graphic Design (Custom)",
        price: 1999,
        desc: "Custom graphics for any business need",
      },
      {
        name: "Brochure/Catalog Design",
        price: 1999,
        desc: "Professional print-ready marketing collateral",
      },
      {
        name: "UI/UX Design (Full)",
        price: 4999,
        desc: "Complete user interface and experience design",
      },
      {
        name: "Website Design (Visual Only)",
        price: 9999,
        desc: "Complete website mockups and visual design",
      },
    ],
  },
  tech: {
    icon: Code,
    title: "Website & Software Development",
    description:
      "Transform your digital vision into reality with cutting-edge technology solutions. We build responsive websites, mobile applications, and enterprise software tailored to your specific business requirements with scalability and performance in mind.",
    services: [
      {
        name: "Web & Mobile Applications",
        price: "Custom",
        desc: "Full-stack web and mobile app development",
      },
      {
        name: "E-commerce Platforms",
        price: "Custom",
        desc: "Complete online store with payment integration",
      },
      {
        name: "CRM Development",
        price: "Custom",
        desc: "Customer relationship management systems",
      },
      {
        name: "ERP Development",
        price: "Custom",
        desc: "Enterprise resource planning solutions",
      },
      {
        name: "Custom Software Development",
        price: "Custom",
        desc: "Bespoke software for unique business needs",
      },
    ],
  },
  marketing: {
    icon: TrendingUp,
    title: "Digital Marketing Solutions",
    description:
      "Amplify your online presence and drive measurable results with our data-driven digital marketing strategies. From SEO to social media management, we help you reach the right audience at the right time with compelling campaigns.",
    services: [
      {
        name: "Content Marketing",
        price: 999,
        desc: "Engaging content to attract and retain customers",
      },
      {
        name: "Email Marketing",
        price: 1499,
        desc: "Targeted email campaigns with high ROI",
      },
      {
        name: "Social Media Management",
        price: 5999,
        desc: "Complete social media strategy and execution",
      },
      {
        name: "Search Engine Optimization (SEO)",
        price: 7999,
        desc: "Improve search rankings and organic traffic",
      },
      {
        name: "Online Reputation Management (ORM)",
        price: 7999,
        desc: "Monitor and enhance your online reputation",
      },
      {
        name: "Google Ads & PPC Campaigns",
        price: 9999,
        desc: "Paid advertising for immediate results",
      },
    ],
  },
  training: {
    icon: Users,
    title: "Training & Manpower Solutions",
    description:
      "Invest in your most valuable asset—your people. Our comprehensive training programs and manpower solutions help develop skills, enhance productivity, and build high-performing teams aligned with your organizational goals.",
    services: [
      {
        name: "Skill Development & Career Support",
        price: 999,
        desc: "Professional development and career guidance",
      },
      {
        name: "Corporate Training Programs",
        price: "Custom",
        desc: "Tailored training for organizational growth",
      },
      {
        name: "Staffing & Recruitment Services",
        price: "Custom",
        desc: "Find the right talent for your business",
      },
      {
        name: "Internship & Placement Assistance",
        price: "Custom",
        desc: "Connect students with career opportunities",
      },
      {
        name: "Custom Learning Modules",
        price: "Custom",
        desc: "Specialized training content development",
      },
    ],
  },
};
// Complete service details for VatsTech
export interface ServiceDetail {
  title: string;
  description: string;
  whatsIncluded: string[];
  details: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "msmeudyam registration": {
    title: "MSME / Udyam Registration",
    description:
      "Get government-recognized MSME certification for your business with benefits including tax exemptions, subsidies, and priority lending.",
    whatsIncluded: [
      "Eligibility assessment and consultation",
      "Document preparation and verification",
      "Online application submission",
      "Udyam certificate generation",
      "Post-registration guidance",
      "Assistance with scheme benefits",
    ],
    details: `If you are a small business owner in India, getting MSME Registration—now officially known as Udyam Registration—is one of the smartest steps you can take for faster growth. This government-backed certification provides legal recognition, financial benefits, and exclusive access to schemes designed to support micro, small, and medium enterprises.

**What is MSME / Udyam Registration?**
Udyam Registration is an online certification process introduced by the Ministry of Micro, Small & Medium Enterprises. It replaces the old Udyog Aadhaar system and offers a completely digital, paperless method for registering MSMEs in India. Once the process is completed, businesses receive a lifetime-valid Udyam Certificate, which acts as an official proof of MSME status.

**Top Benefits of MSME / Udyam Registration**
1. **Easy Access to Loans and Low Interest Rates**
MSMEs enjoy collateral-free loans and reduced interest rates under government schemes like CGTMSE. Banks also prioritize MSME applications for business loans and working capital.

2. **Eligibility for Subsidies and Government Schemes**
With an MSME Certificate, businesses can avail subsidies on technology upgrades, ISO certification, patent registration, and industrial promotion.

3. **Protection Against Delayed Payments**
Registered MSMEs receive strong legal protection against late payments. Buyers must clear dues within 45 days, failing which interest applies—helping small businesses maintain steady cash flow.

4. **Tax Benefits & Easy Licensing**
Many states offer tax rebates, simplified compliance, and faster approvals for licenses and permits to Udyam-registered businesses.

5. **Higher Business Credibility**
Having an Udyam Certificate boosts trust among customers, vendors, banks, and investors, making it easier to grow and collaborate.

**Eligibility for MSME / Udyam Registration (2025 Criteria)**
To qualify as an MSME, a business must fall under the following investment and turnover limits:
- Micro Enterprise: Investment ≤ ₹1 crore & turnover ≤ ₹5 crore
- Small Enterprise: Investment ≤ ₹10 crore & turnover ≤ ₹50 crore
- Medium Enterprise: Investment ≤ ₹50 crore & turnover ≤ ₹250 crore

Both manufacturing and service-sector businesses can apply.

**Conclusion**
Whether you run a startup, manufacturing unit, or service-based business, obtaining MSME / Udyam Registration is essential for long-term growth. From financial benefits and subsidies to legal protection and credibility, this certification empowers small businesses to scale faster. If you are planning to register your business, now is the best time to get your Udyam Certificate and unlock powerful MSME benefits.`,
  },

  "gst registration": {
    title: "GST Registration in India",
    description:
      "Obtain your GSTIN for legal compliance and seamless business operations across India with input tax credit benefits.",
    whatsIncluded: [
      "GST eligibility assessment",
      "Document collection and verification",
      "GST portal registration",
      "GSTIN generation",
      "Login credentials setup",
      "Post-registration compliance guidance",
    ],
    details: `If you are starting a new business or expanding an existing one in India, obtaining GST Registration is essential for legal compliance and smooth operations. The Goods and Services Tax (GST) has replaced multiple indirect taxes and created a unified tax system, making GST registration crucial for anyone supplying goods or services.

**What is GST Registration?**
GST Registration is the process through which a business obtains a unique GSTIN (Goods and Services Tax Identification Number). This 15-digit number allows businesses to legally collect GST from customers, file returns, and claim input tax credit. The registration is done completely online through the official GST portal.

**Who Should Apply for GST Registration?**
GST registration is mandatory for:
- Businesses with annual turnover above ₹40 lakh (for goods)
- Service providers with turnover above ₹20 lakh
- E-commerce sellers and aggregators
- Businesses making interstate supply
- Casual taxable persons
- Importers and exporters

Even businesses below the threshold often apply voluntarily to claim input tax credit and work with GST-registered clients.

**Benefits of GST Registration**
1. **Legal Recognition**
A GST-registered business can collect GST legally and operate across India without restrictions.

2. **Input Tax Credit (ITC)**
Businesses can claim ITC for the GST paid on purchases, reducing overall tax liability and improving profit margins.

3. **Higher Credibility**
Having a GSTIN improves trust among customers, suppliers, and financial institutions.

4. **Access to Government Tenders**
Most government contracts require GST registration, offering more opportunities for growth.

5. **Simplified Business Expansion**
GST eliminates multiple state-level taxes, making interstate trade and expansion easier.

**Documents Required for GST Registration**
To complete the GST registration process, you need:
- PAN card of business or owner
- Aadhaar card
- Proof of business address (rent agreement, electricity bill)
- Bank account details (cancelled cheque or statement)
- Business incorporation certificate (for companies/LLP)
- Passport-size photographs

**Conclusion**
GST Registration is a vital step for any business in India. It ensures legal compliance, reduces tax burden, improves credibility, and enables businesses to take advantage of government schemes. Whether you are a startup founder, retailer, service provider, freelancer, or e-commerce seller, obtaining a GSTIN strengthens your business and supports long-term growth.`,
  },

  "income tax return itr filing": {
    title: "Income Tax Return (ITR) Filing in India",
    description:
      "Professional tax filing services ensuring compliance, maximizing deductions, and securing refunds for individuals and businesses.",
    whatsIncluded: [
      "Income assessment and tax planning",
      "Document collection and organization",
      "ITR form selection",
      "Deduction optimization",
      "Online filing submission",
      "Acknowledgment receipt",
    ],
    details: `Filing your Income Tax Return (ITR) is one of the most important financial responsibilities for every individual and business in India. An ITR is a document that reports your income, tax deductions, and tax liability to the Income Tax Department. Whether you are a salaried professional, freelancer, business owner, or investor, timely ITR filing helps you stay compliant and enjoy several long-term benefits.

**What is an Income Tax Return (ITR)?**
An Income Tax Return (ITR) is a form that taxpayers submit annually to declare their total income, taxable income, deductions under various sections, and the taxes paid during the financial year. The Income Tax Department offers different ITR forms (ITR-1 to ITR-7) depending on income type, source, and category of taxpayer.

Filing an ITR is not just a legal requirement—it is an important step in building your financial profile.

**Who Should File an ITR?**
ITR filing is mandatory for:
- Individuals with annual income above the basic exemption limit
- Salaried employees earning through salary, allowances, or bonus
- Freelancers and self-employed professionals
- Business owners and companies
- Individuals with income from rent, capital gains, or other sources
- NRIs earning income in India
- Individuals who want to claim a tax refund
- Anyone holding assets outside India

Even if your income is below the taxable limit, filing an ITR voluntarily is highly beneficial for future financial requirements.

**Benefits of Filing ITR on Time**
1. **Legal Compliance**
Filing ITR ensures you meet your legal obligations and avoid penalties or notices.

2. **Easy Loan Approvals**
Banks and financial institutions require ITRs for loans such as home loans, car loans, and personal loans. It helps establish consistent income proof.

3. **Claiming Tax Refunds**
If you paid extra TDS or advance tax, filing an ITR allows you to claim a refund directly to your bank account.

4. **Visa Processing**
Many countries require ITR copies for visa documentation to verify financial stability.

5. **Carry Forward Losses**
Timely filing lets you carry forward capital losses and business losses to offset future gains.

**Documents Required for ITR Filing**
- PAN card
- Aadhaar card
- Form 16 (for salaried individuals)
- Bank statements
- Investment proofs (80C, 80D, etc.)
- TDS certificates
- Rent receipts (if applicable)
- Capital gains statements
- Details of foreign assets (if any)

**Conclusion**
Filing your Income Tax Return is essential for financial discipline, compliance, and long-term stability. Whether you earn a salary, run a business, or work as a freelancer, timely ITR filing helps build a strong financial record and opens doors to loans, visas, and refunds. With the online system becoming simpler each year, filing your ITR is quicker and more convenient than ever.`,
  },

  "pf esi registration": {
    title: "PF & ESI Registration in India",
    description:
      "Complete PF and ESI registration for employee welfare compliance and social security benefits.",
    whatsIncluded: [
      "EPFO registration process",
      "ESIC registration process",
      "Document preparation",
      "Online application submission",
      "Registration certificates",
      "Compliance guidance",
    ],
    details: `For every growing business in India, complying with labour laws is crucial. Two of the most important statutory registrations for employers are PF (Provident Fund) Registration and ESI (Employee State Insurance) Registration. These provide financial security, healthcare benefits, and social protection to employees.

**What is PF Registration?**
Provident Fund (PF), managed by the Employees' Provident Fund Organisation (EPFO), is a social security scheme that helps employees build long-term savings. Both employer and employee contribute a percentage of the salary every month. PF is one of the most trusted retirement benefits for organised-sector employees.

**When Is PF Registration Mandatory?**
PF registration is mandatory for:
- Companies with 20 or more employees
- Any organisation voluntarily opting for PF, regardless of employee count
- Employees earning less than ₹15,000 per month must be enrolled compulsorily

PF provides financial stability, making it one of the most essential employee welfare schemes in India.

**What is ESI Registration?**
Employee State Insurance (ESI) is a health insurance scheme managed by ESIC (Employee State Insurance Corporation). It provides medical, maternity, disability, sickness, and dependent benefits to employees and their families.

**When Is ESI Registration Mandatory?**
ESI registration is required for:
- Businesses with 10 or more employees (in most states)
- Employees earning ₹21,000 per month or below

ESI ensures workers receive full medical care and financial protection during illness, injuries, or emergencies.

**Benefits of PF & ESI Registration for Employers and Employees**
1. **Employee Security and Satisfaction**
Employees feel secure knowing they have medical, financial, and retirement benefits—leading to better retention and productivity.

2. **Legal Compliance**
Businesses that comply with EPFO and ESIC regulations avoid penalties, inspections, and legal complications.

3. **Health and Medical Protection**
ESI offers free medical treatment, hospitalization, maternity benefits, and disability compensation.

4. **Retirement and Long-Term Savings**
PF helps employees save money systematically for retirement, emergencies, or post-employment needs.

5. **Better Employer Reputation**
Companies offering PF and ESI benefits appear more trustworthy and professional, attracting skilled employees and clients.

**Documents Required for PF & ESI Registration**
- PAN of business and employer
- Aadhaar card of employer
- Address proof of business (electricity bill, rent agreement)
- Certificate of incorporation/partnership deed
- Employee details (name, salary, joining date)
- Bank account details
- Digital signature (DSC) of employer

**Conclusion**
PF and ESI Registration are essential for every compliant and responsible employer. They offer significant benefits such as social security, medical protection, retirement savings, and improved employee morale. Whether you are running a startup, small business, or large organisation, completing PF and ESI registration ensures legal compliance and strengthens your company's reputation.`,
  },

  "proprietorship registration": {
    title: "Proprietorship Registration in India",
    description:
      "Register your sole proprietorship business quickly with minimal compliance for small businesses and freelancers.",
    whatsIncluded: [
      "Business name verification",
      "MSME/Udyam registration",
      "GST registration (if applicable)",
      "Shop Act license assistance",
      "Bank account opening support",
      "Complete documentation",
    ],
    details: `Starting a business in India is easier than ever, and one of the most popular business structures for beginners is a Sole Proprietorship. Simple, flexible, and cost-effective, a proprietorship is ideal for small shops, freelancers, consultants, traders, and home-based businesses.

**What is a Sole Proprietorship?**
A Sole Proprietorship is an unincorporated business owned and managed by a single individual. The proprietor and the business are legally considered the same entity. This makes it easy to start, operate, and dissolve compared to complex business structures like LLPs or private limited companies.

**Why Choose Proprietorship Registration?**
Although a proprietorship does not require formal incorporation, obtaining certain registrations helps establish business identity and credibility. Key advantages include:

1. **Easy to Start**
Starting a proprietorship requires no heavy paperwork or government approval. Basic registrations like GST or Shop Act license are enough to begin operations.

2. **Full Ownership & Control**
Since the business is owned by one person, the proprietor enjoys complete control over profits and decision-making.

3. **Low Compliance**
There are no mandatory audits or annual filings unless GST-registered. This makes compliance affordable and stress-free.

4. **Minimal Investment**
Proprietorships can be started with very low capital, making them ideal for small business owners and self-employed individuals.

5. **Builds Business Credibility**
With registrations like Udyam (MSME), GST, or Shop Act, your business gains legal recognition and trust in the market.

**Documents Required for Proprietorship Registration**
To register your proprietorship, the following documents may be required depending on the state and business nature:
- PAN card of the proprietor
- Aadhaar card
- Passport-size photograph
- Proof of business address (rent agreement, electricity bill)
- Bank account details
- Shop & Establishment Act license
- GST registration (if applicable)
- Udyam Registration certificate
- Business letterhead & rubber stamp

**Conclusion**
A Sole Proprietorship is one of the simplest and fastest ways to start a business in India. With low compliance, full ownership, and minimal setup costs, it's the perfect structure for small entrepreneurs, freelancers, and local businesses. By completing essential registrations like GST, Udyam, and Shop Act, you can establish a trusted and legally recognized proprietorship in 2025.`,
  },

  "trademark registration": {
    title: "Trademark Registration in India",
    description:
      "Protect your brand identity with official trademark registration. Ensure your brand name, logo, or tagline cannot be copied or misused.",
    whatsIncluded: [
      "Trademark search and availability check",
      "Application filing (Form TM-A)",
      "Document preparation and verification",
      "Follow-up with trademark office",
      "Registration certificate delivery",
      "Renewal reminder service",
    ],
    details: `In a competitive business environment, protecting your brand identity is crucial. Whether you run a startup, small business, or established company, securing a Trademark Registration in India ensures your brand name, logo, or tagline cannot be copied or misused. In this guide, we explain what a trademark is, why registration is important, documents required, and the complete trademark registration process in 2025.

**What is a Trademark?**
A trademark is a unique symbol, word, logo, design, phrase, or combination of these elements that distinguishes your products or services from competitors. Registering a trademark gives you exclusive legal rights over your brand identity under the Trademarks Act, 1999.

Common types of trademarks include:
- Brand names
- Company logos
- Taglines
- Product names
- Unique packaging
- Shapes, colors, and sounds

**Why is Trademark Registration Important?**
Registering a trademark offers legal protection and strengthens your brand identity. Key benefits include:

1. **Exclusive Ownership Rights**
No one else can legally use your registered brand name, logo, or mark in India.

2. **Strong Legal Protection**
You can take legal action against anyone who copies, imitates, or misuses your brand.

3. **Builds Brand Trust**
A registered trademark enhances brand credibility and customer confidence.

4. **Helps in Business Expansion**
Trademark registration supports franchising, licensing, and international brand expansion.

5. **Becomes an Intangible Asset**
A trademark can be sold, assigned, or licensed—adding to your business value.

6. **Valid for 10 Years**
Once registered, it remains valid for 10 years and can be renewed indefinitely.

**Documents Required for Trademark Registration**
To apply for trademark registration in India, you need:
- Applicant's name and address
- Trademark/logo (in JPEG/PNG format)
- Description of goods/services (Nice Classification)
- Identity proof: PAN, Aadhaar, Passport
- Address proof
- Business registration documents (if applicable)
- Power of Attorney (Form TM-48)
- Signed authorization letter

**Trademark Registration Process in India (2025)**
Follow these simple steps to register your trademark:

1. **Trademark Search**
Check availability on the IP India portal to ensure your brand name or logo is unique.

2. **File Trademark Application (TM-A)**
Submit the application online with necessary details and documents.

3. **Examination by Trademark Registry**
The examiner reviews your application for conflicts or errors.

4. **Trademark Journal Publication**
If accepted, your trademark is published in the journal for 4 months, allowing for opposition.

5. **Registration Certificate**
If no objections are raised, you receive the Trademark Registration Certificate and can start using the ® symbol.

6. **Renewal**
Renew every 10 years to maintain trademark protection.

**Conclusion**
Trademark Registration is essential for any business aiming to protect its brand identity, prevent infringement, and build long-term trust. With the increasing digital presence of brands, securing your trademark in India in 2025 is more important than ever. A registered trademark not only protects your brand legally but also adds value and credibility to your business.`,
  },

  "import export code iec": {
    title: "Import Export Code (IEC) Registration in India",
    description:
      "Get your IEC for international trade operations, customs clearance, and global business expansion.",
    whatsIncluded: [
      "IEC application preparation",
      "Document verification",
      "DGFT portal submission",
      "IEC certificate generation",
      "Post-registration guidance",
      "Export benefit assistance",
    ],
    details: `If you want to start import or export business in India, the first mandatory requirement is obtaining an Import Export Code (IEC). Issued by the Directorate General of Foreign Trade (DGFT), IEC Registration enables individuals and businesses to legally import goods, export products, receive international payments, and expand globally.

**What is an Import Export Code (IEC)?**
The Import Export Code (IEC) is a 10-digit unique identification number required for any commercial import or export activity in India. Whether you are a manufacturer, trader, exporter, importer, or e-commerce seller, IEC is essential for customs clearance and international trade.

IEC is valid for a lifetime, has no renewal requirement, and is one of the simplest business registrations in India.

**Why is IEC Registration Important?**
IEC unlocks multiple global opportunities for businesses. Major benefits include:

1. **Mandatory for Import & Export**
No individual or company can legally import or export goods/services without IEC.

2. **Fast Customs Clearance**
IEC is required for customs documentation and shipment clearance at ports.

3. **Access to Global Markets**
Exporters and importers can expand internationally and explore new business opportunities.

4. **Avail Export Benefits**
Registered exporters can claim government incentives like RoDTEP, SEIS, MEIS, and duty exemptions.

5. **Hassle-Free Registration**
IEC requires no annual filing, no compliance burden, and no renewal.

6. **Smooth International Payments**
Banks need IEC to process foreign remittances and export-import transactions.

**Who Needs IEC Registration?**
IEC is required for:
- Exporters of goods or services
- Importers of machinery, raw materials, or finished goods
- E-commerce exporters (Amazon Global, Etsy, Shopify)
- Manufacturers expanding to international markets
- Proprietors, partnerships, LLPs, and companies
- Freelancers or individuals exporting services

**Documents Required for IEC Registration**
The registration process is simple and requires only basic documents:
- PAN card (individual or business)
- Aadhaar of the applicant
- Business address proof
- Bank account details (cancelled cheque or passbook)
- Certificate of incorporation (for companies and LLPs)
- Digital signature (for company/LLP applications)

**Conclusion**
IEC Registration is the gateway to global trade for Indian businesses. Whether you're a startup, small business, exporter, importer, or e-commerce seller, having an Import Export Code helps you access international markets, claim export benefits, and build a global business presence. With a simple online process and lifetime validity, obtaining your IEC in 2025 is easier and faster than ever.`,
  },

  "fssai registration": {
    title: "FSSAI Registration in India",
    description:
      "Get your food safety license for legal food business operations and build customer trust with FSSAI certification.",
    whatsIncluded: [
      "FSSAI category determination",
      "Document preparation",
      "Online application filing",
      "FSSAI certificate generation",
      "Label compliance guidance",
      "Renewal assistance",
    ],
    details: `In India, food safety and quality are top priorities for consumers and regulators. Whether you are running a restaurant, cloud kitchen, food truck, packaged food business, dairy unit, or homemade food venture, obtaining FSSAI Registration is mandatory. The Food Safety and Standards Authority of India (FSSAI) issues licenses and registrations to ensure that every food business complies with hygiene and safety standards.

**What is FSSAI Registration?**
FSSAI Registration is the basic license issued to small and medium food businesses under the Food Safety and Standards Act, 2006. The registration provides a unique 14-digit FSSAI number that must be displayed on food packages and premises.

FSSAI offers three types of approvals:
- **Basic FSSAI Registration** – For small businesses with turnover up to ₹12 lakh
- **State FSSAI License** – For businesses with turnover between ₹12 lakh and ₹20 crore
- **Central FSSAI License** – For large businesses or those engaged in import, export, or interstate operations

**Who Needs FSSAI Registration?**
FSSAI Registration is mandatory for all food-related businesses, including:
- Restaurants, cafes, bakeries
- Cloud kitchens, tiffin services
- Home-based food sellers
- Packaged food manufacturers
- Food processors, cold storage units
- Dairy units, ice-cream units
- Meat shops, fish processing units
- Food importers and exporters
- Retailers, wholesalers, distributors
- Online food sellers (Swiggy, Zomato)

Whether small or large, every food business must register or obtain a license depending on turnover and operations.

**Benefits of FSSAI Registration**
1. **Legal Compliance**
Operating without an FSSAI license is illegal and can lead to penalties, fines, and closure.

2. **Builds Customer Trust**
Displaying the FSSAI number increases customer confidence in the safety and hygiene of your food.

3. **Business Expansion**
FSSAI certification is mandatory for supplying to online platforms, supermarkets, and major distributors.

4. **Ensures Food Safety**
FSSAI encourages hygienic practices, safe food handling, and quality maintenance.

5. **Brand Reputation**
A registered food business looks more professional and credible, helping attract more customers.

**Documents Required for FSSAI Registration**
Depending on the type of license, the required documents include:
- Aadhaar and PAN of the business owner
- Passport-size photographs
- Proof of business address (rent agreement/electricity bill)
- Business registration documents
- Food product details
- Layout plan of premises (for State/Central License)
- NOC from municipality (if applicable)
- Water test report (for manufacturing units)

**Conclusion**
FSSAI Registration is essential for anyone involved in the food business. It ensures food safety, builds customer trust, and allows legal business operations. Whether you're a home-based seller or a large manufacturer, obtaining the appropriate FSSAI registration in 2025 helps you operate confidently and expand your business without legal hurdles.`,
  },

  "iso certification": {
    title: "ISO Certification in India",
    description:
      "Get internationally recognized ISO certification to enhance quality, credibility, and business efficiency.",
    whatsIncluded: [
      "ISO standard selection guidance",
      "Documentation preparation",
      "Gap analysis",
      "Implementation support",
      "Audit preparation",
      "Certificate procurement",
    ],
    details: `In today's competitive market, customers expect quality, consistency, and trust from every product or service they purchase. As businesses grow, maintaining standards becomes crucial. This is where ISO Certification plays a major role. ISO (International Organization for Standardization) is a globally recognized body that develops standards to ensure the quality, safety, and efficiency of products, services, and systems. For businesses in India, obtaining ISO certification enhances credibility and improves operational performance.

**What is ISO Certification?**
ISO Certification is a formal approval granted by an external certification body after auditing and verifying a company's management system, processes, or product quality. ISO does not issue certifications directly; instead, it provides globally accepted standards used for evaluation.

Some of the most popular ISO standards include:
- **ISO 9001** – Quality Management System
- **ISO 14001** – Environmental Management System
- **ISO 27001** – Information Security Management
- **ISO 45001** – Occupational Health & Safety
- **ISO 22000** – Food Safety Management
- **ISO 50001** – Energy Management

Each certification ensures that the organization meets international benchmarks in that specific area.

**Why is ISO Certification Important?**
ISO certification is not just a badge of quality—it is a strategic tool that helps businesses improve efficiency and stand out in the marketplace. Key benefits include:

1. **Enhanced Customer Trust**
ISO-certified companies are perceived as reliable and professional. Customers feel more confident buying from businesses that follow internationally recognized standards.

2. **Improved Product & Service Quality**
ISO standards focus on continuous improvement, helping businesses maintain consistent quality and reduce operational errors.

3. **Better Market Opportunities**
Many corporate clients, government tenders, and international partnerships require ISO certification as a prerequisite.

4. **Competitive Advantage**
In a crowded market, an ISO certification helps brands differentiate themselves from competitors.

5. **Efficient Internal Processes**
ISO implementation improves workflow, documentation, risk management, and employee productivity.

6. **Global Recognition**
ISO is recognized and accepted globally, making it easier for companies to expand internationally.

**Documents Required for ISO Certification**
Although requirements vary by standard, common documents include:
- Business registration documents
- GST and PAN details
- Company profile
- Proof of business address
- Scope of certification
- Process manuals and SOPs
- Quality policy documents
- Employee list and structure

**Conclusion**
ISO Certification is an essential investment for businesses that aim to strengthen their processes, improve customer trust, and enhance their brand value. Whether you are a startup, SME, or large enterprise, implementing ISO standards in 2025 can help drive efficiency, ensure quality, and unlock new business opportunities. With the right guidance and proper implementation, obtaining ISO certification becomes a smooth and rewarding process.`,
  },

  "private limited company registration": {
    title: "Private Limited Company Registration in India",
    description:
      "Incorporate your Private Limited Company with limited liability protection and investor-friendly structure.",
    whatsIncluded: [
      "Company name approval",
      "DIN and DSC preparation",
      "MOA and AOA drafting",
      "Incorporation application",
      "CIN generation",
      "Post-incorporation compliance",
    ],
    details: `Looking to launch a startup or scale your business in India? Registering a Private Limited Company (Pvt Ltd) is one of the most reliable and preferred business structures. Known for limited liability, strong legal protection, investor-friendly structure, and high credibility, a private limited company is ideal for entrepreneurs aiming for long-term growth.

**What is a Private Limited Company?**
A Private Limited Company is a corporate structure registered under the Companies Act, 2013. It has a separate legal identity, limited liability for shareholders, and a structured compliance system. It is owned by shareholders and managed by directors (minimum 2). This structure is trusted by investors, lenders, government authorities, and clients across India.

**Benefits of Private Limited Company Registration**
Registering a private limited company offers multiple business advantages:

1. **Limited Liability Protection**
Shareholders are not personally liable for company debts. Their personal property remains protected.

2. **Separate Legal Entity**
The company can own assets, file lawsuits, enter contracts, and operate independently from its owners.

3. **Easy Fundraising**
Investors, banks, and venture capitalists prefer Pvt Ltd companies due to transparency and robust compliance.

4. **High Brand Credibility**
A registered company increases trust among customers, suppliers, and partners.

5. **Easy Transfer of Ownership**
Shares can be issued or transferred smoothly without affecting business continuity.

6. **Tax Advantages**
Companies can avail multiple tax exemptions, deductions, and benefits under Indian tax laws.

**Documents Required for Private Limited Company Registration**
You need the following documents for directors and the registered office:

**For Directors**
- PAN
- Aadhaar
- Passport-size photo
- Address proof (bank statement, electricity bill)

**For Registered Office**
- Electricity/water bill
- Rent agreement (if rented)
- NOC from property owner

All documents must be recent and submitted digitally.

**Conclusion**
A Private Limited Company Registration is the best choice for startups and growing businesses looking for credibility, limited liability, and easier fundraising. With a structured legal framework and high trust value, a Pvt Ltd company helps you scale your brand in India and globally. In 2025, the process is fast, fully online, and ideal for new entrepreneurs seeking long-term success.`,
  },

  "limited liability partnership llp": {
    title: "LLP Registration in India",
    description:
      "Register your Limited Liability Partnership for flexible business structure with limited liability protection.",
    whatsIncluded: [
      "LLP name reservation",
      "DIN and DSC preparation",
      "LLP agreement drafting",
      "Incorporation application",
      "LLPIN generation",
      "Post-registration compliance",
    ],
    details: `If you're planning to start a business in India with low compliance and limited liability, LLP Registration is one of the best options. A Limited Liability Partnership (LLP) combines the flexibility of a traditional partnership with the legal protection of a private limited company. Ideal for startups, professionals, consultants, and small businesses, an LLP provides a stable, scalable, and tax-efficient business structure.

**What is a Limited Liability Partnership (LLP)?**
A Limited Liability Partnership is a corporate business structure governed by the LLP Act, 2008. It offers limited liability to partners while allowing them to manage the business internally. Unlike a normal partnership, an LLP is a separate legal entity, meaning the business continues even if partners change.

**Benefits of LLP Registration**
Registering an LLP comes with several advantages:

1. **Limited Liability Protection**
Partners are not personally responsible for business debts. Their liability is limited to their capital contribution.

2. **Low Compliance & Maintenance Cost**
LLPs have fewer annual filings than private limited companies, making them ideal for small businesses.

3. **Separate Legal Identity**
An LLP can own assets, enter contracts, and operate independently from its partners.

4. **Flexible Management Structure**
Profit sharing, decision-making, and roles are defined through the LLP Agreement.

5. **No Minimum Capital Requirement**
You can start an LLP with any amount of capital—even ₹1.

6. **Tax Advantages**
LLPs do not pay dividend distribution tax (DDT), and taxation is simpler than companies.

**Documents Required for LLP Registration**
Below are the documents needed for partners and the registered office:

**For Partners**
- PAN card
- Aadhaar card
- Passport-size photo
- Address proof (bank statement, utility bill, etc.)

**For Registered Office**
- Rent agreement (if rented)
- Utility bill (electricity/water bill)
- NOC from the property owner

**Conclusion**
An LLP Registration is ideal for entrepreneurs seeking flexibility, limited liability, and fewer compliance requirements. Whether you're a startup founder, consultant, or small business owner, forming an LLP in 2025 provides legal protection and a scalable business structure. With low costs, tax efficiency, and an easy online registration process, LLP is one of the best choices for modern businesses in India.`,
  },

  "section 8 companyngo registration": {
    title: "Section 8 Company Registration in India",
    description:
      "Register your non-profit organization (NGO) for charitable, educational, or social welfare activities.",
    whatsIncluded: [
      "NGO name approval",
      "MOA and AOA drafting",
      "Section 8 license application",
      "Incorporation process",
      "12A and 80G registration assistance",
      "Post-registration guidance",
    ],
    details: `If you want to start a non-profit organization in India for charitable, educational, social, or philanthropic causes, registering a Section 8 Company is one of the best options. Governed by the Companies Act, 2013, a Section 8 Company offers legal recognition, credibility, and tax benefits for NGOs.

**What is a Section 8 Company?**
A Section 8 Company is a non-profit organization (NPO) established for charitable objectives such as social welfare, education, healthcare, environment protection, art, culture, and more. Unlike other companies, a Section 8 Company cannot distribute profits to its members; all income must be used for the organization's objectives.

It is the most credible form of NGO registration in India, preferred by donors, CSR partners, and government bodies.

**Benefits of Section 8 Company Registration**
Registering an NGO as a Section 8 Company offers multiple advantages:

1. **High Credibility**
Section 8 Companies are regulated by MCA, making them more trusted than societies or trusts.

2. **Limited Liability**
Members have limited liability, protecting them from personal financial risk.

3. **Tax Benefits**
NGOs can apply for 12A and 80G certification, enabling tax exemptions for both the organization and donors.

4. **Separate Legal Identity**
The NGO can own property, receive funds, enter agreements, and sue or be sued in its own name.

5. **Easy Funding & CSR Support**
Corporates prefer donating to Section 8 Companies for compliance and transparency.

6. **No Minimum Capital Requirement**
You can start a Section 8 Company with any amount of capital.

**Documents Required for Section 8 Company / NGO Registration**

**For Directors**
- PAN card
- Aadhaar card
- Passport-size photograph
- Address proof (bank statement/utility bill)

**For Registered Office**
- Electricity/water bill
- Rent agreement (if rented)
- NOC from property owner

**Other Required Documents**
- Proposed name of the NGO
- Objectives of the organization
- Digital Signature Certificate (DSC)

**Conclusion**
A Section 8 Company Registration is the best pathway for NGOs looking to build trust, raise donations, and operate legally in India. With tax benefits, high credibility, limited liability, and easy compliance, Section 8 NGOs are ideal for long-term social impact. In 2025, the process is fully online, making it easier than ever to start a non-profit organization.`,
  },

  "startup india registration": {
    title: "Startup India Registration",
    description:
      "Get DPIIT recognition for your startup to access tax benefits, funding, and government support schemes.",
    whatsIncluded: [
      "Eligibility assessment",
      "Document preparation",
      "DPIIT registration",
      "Startup India certificate",
      "Tax exemption guidance",
      "Funding scheme access",
    ],
    details: `India's startup ecosystem is one of the fastest growing in the world, and the Startup India Scheme, launched by the Government of India, plays a major role in supporting new entrepreneurs. If you are planning to launch a new venture, getting your business recognized under Startup India Registration can help you access tax benefits, funding opportunities, and government support.

**What is Startup India Registration?**
Startup India Registration is an initiative by the Department for Promotion of Industry and Internal Trade (DPIIT) that provides official recognition to eligible startups. Once registered, a startup can avail multiple benefits including tax exemptions, funding schemes, easier compliance, and access to government resources.

A DPIIT-recognized startup receives a Startup India Certificate, which enhances credibility and eligibility for government-led incentives.

**Benefits of Startup India Registration**
Registering under the Startup India Scheme offers numerous advantages:

1. **Tax Exemption for 3 Years**
Eligible startups can claim income tax exemption for 3 consecutive years under Section 80-IAC.

2. **Angel Tax Exemption**
DPIIT-recognized startups are exempt from Angel Tax under Section 56.

3. **Easy Fundraising**
Startups get access to government funds, venture capital, and credit guarantee schemes.

4. **Faster Patent & Trademark Filing**
Startups get up to 80% rebate on patent filing fees and fast-track processing.

5. **Self-Certification Compliance**
Startups can self-cert`,
  },
};
