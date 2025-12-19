'use client'
import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search,} from 'lucide-react';
import { categories, insight } from '@/lib/content';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');


  const filteredInsights = insight.filter(insight => {
    const matchesCategory = selectedCategory === 'all' || insight.category === selectedCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredInsights = insight.filter(i => i.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A2240] via-[#0A2240] to-[#00A8E8] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Expert tips, compliance updates, and business growth strategies to help you succeed
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white  w-5 h-5" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E8]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#F8FBFD] sticky top-0 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#00A8E8] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      {selectedCategory === 'all' && searchQuery === '' && (
        <section className="py-16 bg-gradient-to-b from-white to-[#F8FBFD]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0A2240] mb-10 text-center">
              Featured Insights
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredInsights.map((insight) => (
                <div
                  key={insight.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-96 cursor-pointer bg-cover bg-center"
                  style={{ backgroundImage: `url(${insight.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  <div className="relative h-full flex flex-col justify-end p-8 text-white">
                    <div className="inline-block px-3 py-1 bg-[#00A8E8] rounded-full text-sm font-semibold mb-4 w-fit">
                      {categories.find(c => c.id === insight.category)?.name}
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-3 line-clamp-2 group-hover:text-[#00A8E8] transition-colors">
                      {insight.title}
                    </h3>
                    
                    <p className="text-base mb-4 line-clamp-2 text-gray-200">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm opacity-90">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {insight.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {insight.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <button className="mt-4 flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                      Read More <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Insights Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0A2240] mb-10 text-center">
            {selectedCategory === 'all' ? 'All Insights' : `${categories.find(c => c.id === selectedCategory)?.name} Insights`}
          </h2>
          
          {filteredInsights.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No insights found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredInsights.map((insight) => (
                <div
                  key={insight.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-[#00A8E8]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur rounded-full text-sm font-semibold text-[#00A8E8]">
                        {categories.find(c => c.id === insight.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A2240] mb-3 line-clamp-2 group-hover:text-[#00A8E8] transition-colors">
                      {insight.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {insight.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {insight.readTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-600">{insight.author}</span>
                      <button className="flex items-center gap-2 text-[#00A8E8] font-semibold group-hover:gap-3 transition-all">
                        Read <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A8E8] to-[#0095D1] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Subscribe to our newsletter and receive expert tips, compliance updates, and growth strategies directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#00A8E8] hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-sm text-gray-200 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8FBFD]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0A2240] mb-6">
              Need Expert Guidance?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team of experts is ready to help you navigate compliance, grow your business, and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-all duration-300">
                Get Free Consultation
              </button> */}
              <button className="border-2 border-[#00A8E8] text-[#00A8E8] hover:bg-[#00A8E8] hover:text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300">
                <a href="/services">Explore Services</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}