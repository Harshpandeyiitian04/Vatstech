'use client'
import { useNavigation } from '@/lib/functions';
import { Service, servicesData } from '@/lib/servicescontent';
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ServicesPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const { handleGetit ,handleContact } = useNavigation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Comprehensive business solutions designed to simplify your journey from startup to success.
            Fast, affordable, and reliable services tailored to your unique needs.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div
          id="intro"
          data-animate
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            Your Trusted Digital Partner
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            VatsTech brings together legal compliance, branding, technology, digital marketing,
            and skill development—all under one roof. Whether you're launching a startup or
            scaling an enterprise, we're with you every step of the way.
          </p>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {Object.entries(servicesData).map(([key, category], index) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === key;

            return (
              <div
                key={key}
                id={`category-${key}`}
                data-animate
                className={`bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden transition-all duration-700 ${visibleSections[`category-${key}`]
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleCategory(key)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{category.title}</h3>
                      <p className="text-gray-600 mt-1 text-sm sm:text-base">{category.description}</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  )}
                </button>
                <div
                  className={`transition-all duration-500 ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-4 sm:p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="border border-blue-100 rounded-lg p-3 sm:p-4 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
                        onClick={() => setSelectedService(service)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
                            {service.name}
                          </h4>
                          <span className="text-blue-600 font-bold text-base sm:text-lg whitespace-nowrap ml-2">
                            {typeof service.price === 'number' ? `₹${service.price}` : service.price}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3">{service.desc}</p>
                        <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-3 text-blue-600 text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          id="why-choose"
          data-animate
          className={`mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-white transition-all duration-1000 ${visibleSections['why-choose'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
            Why Choose VatsTech?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Fast & Reliable", desc: "Quick turnaround times without compromising quality" },
              { title: "Affordable Pricing", desc: "Transparent pricing designed for startups and SMEs" },
              { title: "Pan-India Service", desc: "Serving clients across all states with personalized care" },
              { title: "Expert Team", desc: "Experienced professionals dedicated to your success" },
              { title: "One-Stop Solution", desc: "All business services under one trusted platform" },
              { title: "Startup India Recognized", desc: "Official recognition ensuring credibility and trust" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3">
                <div className="bg-blue-500 rounded-full p-1 mt-0.5 sm:mt-1 flex-shrink-0">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-blue-100 text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="cta"
          data-animate
          className={`mt-8 sm:mt-12 md:mt-16 text-center transition-all duration-1000 ${visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
            Let's discuss how we can help your business thrive
          </p>
          <button
            onClick={handleContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-md sm:shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </div>
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-3 sm:p-4 z-50"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-md md:max-w-lg w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              {selectedService.name}
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              {selectedService.desc}
            </p>
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium text-sm sm:text-base">Starting Price:</span>
                <span className="text-xl sm:text-2xl font-bold text-blue-600">
                  {typeof selectedService.price === 'number' ? `₹${selectedService.price}` : selectedService.price}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => expandedCategory && handleGetit(expandedCategory, selectedService.name)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors"
              >
                Get Started
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}