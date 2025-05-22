
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  location: string;
  price: string;
  duration: string;
  rating: number;
  image: string;
  cryptoAccepted: string[];
}

const ExperiencesTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample experiences data
  const experiences: Experience[] = [
    {
      id: 'exp1',
      title: 'Blockchain Island Tour',
      location: 'Malta',
      price: '0.015 ETH',
      duration: '3 hours',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1565965735567-3c8cdb4100f8?auto=format&q=75&fit=crop&w=600',
      cryptoAccepted: ['ETH', 'BTC', 'SOL']
    },
    {
      id: 'exp2',
      title: 'Crypto Conference Pass',
      location: 'Singapore',
      price: '0.03 BTC',
      duration: '2 days',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&q=75&fit=crop&w=600',
      cryptoAccepted: ['BTC', 'ETH']
    },
    {
      id: 'exp3',
      title: 'Web3 Workshop',
      location: 'Bali',
      price: '0.5 SOL',
      duration: '4 hours',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&q=75&fit=crop&w=600',
      cryptoAccepted: ['SOL', 'ETH']
    }
  ];

  // Filter experiences based on search query
  const filteredExperiences = experiences.filter(exp => 
    exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="card-glass p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Find Amazing Crypto-Powered Experiences</h2>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search experiences by name or location..."
          className="w-full pl-10 px-4 py-3 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search experiences"
        />
      </div>

      {/* Experiences Grid */}
      {filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredExperiences.map((experience) => (
            <article key={experience.id} className="card-glass overflow-hidden rounded-lg flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={`${experience.title} in ${experience.location}`} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex-grow">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">{experience.title}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400" aria-hidden="true">★</span>
                    <span className="ml-1 text-sm">{experience.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-2">{experience.location}</p>
                <p className="text-xs text-gray-500 mb-3">Duration: {experience.duration}</p>
                
                <div className="flex mb-3 gap-1">
                  {experience.cryptoAccepted.map((crypto, i) => (
                    <span key={i} className="text-xs bg-infi-dark px-2 py-0.5 rounded-full border border-infi-gold/30 text-infi-gold-light">
                      {crypto}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <p className="text-infi-gold font-bold mb-3">{experience.price}</p>
                  <Button className="w-full gold-gradient text-xs">
                    Book Experience
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-400">No experiences found matching your criteria.</p>
        </div>
      )}
    </section>
  );
};

export default ExperiencesTab;
