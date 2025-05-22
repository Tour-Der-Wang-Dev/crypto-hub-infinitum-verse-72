
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Filter, Star } from 'lucide-react';
import { Map as MapIcon } from '@/components/custom-icons';

// Cryptocurrency icons and their colors
const cryptoIcons = {
  "Bitcoin": { icon: "₿", color: "text-orange-500" },
  "Ethereum": { icon: "Ξ", color: "text-purple-500" },
  "Litecoin": { icon: "Ł", color: "text-blue-400" },
  "Solana": { icon: "◎", color: "text-green-500" },
  "USDT": { icon: "₮", color: "text-green-600" },
  "Cardano": { icon: "₳", color: "text-blue-500" }
};

type LocationType = {
  id: number;
  name: string;
  location: string;
  rating: number;
  cryptos: string[];
  type: 'restaurant' | 'shop' | 'hotel' | 'service';
  description: string;
  lat: number;
  lng: number;
};

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCryptos, setSelectedCryptos] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);
  
  // Sample location data (in a real app, this would come from an API)
  const locations: LocationType[] = [
    { 
      id: 1,
      name: "Crypto Cafe", 
      location: "New York, USA", 
      rating: 4.8, 
      cryptos: ["Bitcoin", "Ethereum"],
      type: "restaurant",
      description: "A cozy cafe where you can enjoy coffee and pastries while paying with your favorite cryptocurrency.",
      lat: 40.7128,
      lng: -74.006
    },
    { 
      id: 2,
      name: "Digital Goods Store", 
      location: "London, UK", 
      rating: 4.5, 
      cryptos: ["Bitcoin", "Litecoin", "Solana"],
      type: "shop",
      description: "Purchase electronics and digital goods using various cryptocurrencies.",
      lat: 51.5074,
      lng: -0.1278
    },
    { 
      id: 3,
      name: "Blockchain Hotel", 
      location: "Tokyo, Japan", 
      rating: 4.7, 
      cryptos: ["Bitcoin", "Ethereum", "Cardano"],
      type: "hotel",
      description: "Luxury accommodations with all payments accepted in crypto.",
      lat: 35.6762,
      lng: 139.6503
    },
    { 
      id: 4,
      name: "Crypto Tech Hub", 
      location: "Singapore", 
      rating: 4.6, 
      cryptos: ["Bitcoin", "Ethereum", "USDT"],
      type: "service",
      description: "A workspace for crypto enthusiasts with tech support and networking opportunities.",
      lat: 1.3521,
      lng: 103.8198
    },
    { 
      id: 5,
      name: "NFT Gallery", 
      location: "Paris, France", 
      rating: 4.9, 
      cryptos: ["Ethereum", "Solana"],
      type: "shop",
      description: "Art gallery specializing in NFTs and digital art, with crypto payments accepted.",
      lat: 48.8566,
      lng: 2.3522
    }
  ];

  // Filter locations based on search term and selected filters
  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         location.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCryptos = selectedCryptos.length === 0 || 
                          selectedCryptos.some(crypto => location.cryptos.includes(crypto));
    
    const matchesTypes = selectedTypes.length === 0 || 
                        selectedTypes.includes(location.type);
    
    return matchesSearch && matchesCryptos && matchesTypes;
  });

  // Toggle crypto filter
  const toggleCryptoFilter = (crypto: string) => {
    setSelectedCryptos(prev => 
      prev.includes(crypto) 
        ? prev.filter(c => c !== crypto) 
        : [...prev, crypto]
    );
  };

  // Toggle type filter
  const toggleTypeFilter = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  // Show location details
  const showLocationDetails = (location: LocationType) => {
    setSelectedLocation(location);
    // In a real app, we would also center the map on this location
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Crypto Location Map</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore businesses and services that accept cryptocurrency payments worldwide.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search locations..."
                className="w-full px-4 py-3 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          <Button 
            className={`${filtersOpen ? 'bg-infi-gold text-black' : 'gold-gradient'} flex items-center gap-2`} 
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <Filter size={16} />
            {filtersOpen ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {filtersOpen && (
          <div className="mb-6 card-glass p-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-infi-gold">Cryptocurrency</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(cryptoIcons).map((crypto) => (
                    <Button
                      key={crypto}
                      variant={selectedCryptos.includes(crypto) ? "default" : "outline"}
                      className={`text-xs px-3 py-1 h-auto ${selectedCryptos.includes(crypto) ? 'bg-infi-gold text-black' : 'border-infi-gold/50 text-infi-gold-light'}`}
                      onClick={() => toggleCryptoFilter(crypto)}
                    >
                      <span className={`mr-1 ${(cryptoIcons as any)[crypto].color}`}>{(cryptoIcons as any)[crypto].icon}</span>
                      {crypto}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-infi-gold">Business Type</h3>
                <div className="flex flex-wrap gap-2">
                  {['restaurant', 'shop', 'hotel', 'service'].map((type) => (
                    <Button
                      key={type}
                      variant={selectedTypes.includes(type) ? "default" : "outline"}
                      className={`text-xs px-3 py-1 h-auto ${selectedTypes.includes(type) ? 'bg-infi-gold text-black' : 'border-infi-gold/50 text-infi-gold-light'}`}
                      onClick={() => toggleTypeFilter(type)}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Map view */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[500px] bg-infi-dark-blue/50 rounded-lg flex items-center justify-center border border-infi-gold/20">
              {selectedLocation ? (
                <div className="absolute top-4 right-4 z-10 card-glass p-4 w-72 animate-fade-in">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-infi-gold">{selectedLocation.name}</h3>
                    <button 
                      onClick={() => setSelectedLocation(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm mb-2 flex items-center gap-1">
                    <MapPin size={14} className="text-infi-gold-light" />
                    {selectedLocation.location}
                  </p>
                  <p className="text-sm mb-3">{selectedLocation.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {selectedLocation.cryptos.map(crypto => (
                      <span 
                        key={crypto} 
                        className={`text-xs ${(cryptoIcons as any)[crypto].color} bg-infi-dark px-2 py-0.5 rounded-full border border-infi-gold/30`}
                      >
                        {(cryptoIcons as any)[crypto].icon} {crypto}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm">{selectedLocation.rating}</span>
                    </span>
                    <Button className="text-xs h-8 gold-gradient">Get Directions</Button>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8">
                  <div className="text-infi-gold text-6xl mb-4"><MapIcon className="w-16 h-16 mx-auto" /></div>
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-gray-400 max-w-md">
                    This would be an interactive map displaying crypto-friendly businesses. Select a location from the list to see it on the map.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* List view */}
          <div className="lg:col-span-1">
            <div className="card-glass p-4 rounded-lg h-[500px] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
                <span>{filteredLocations.length} Locations Found</span>
                <span className="text-sm text-gray-400">Click to view details</span>
              </h2>
              <div className="space-y-3">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((location) => (
                    <Card 
                      key={location.id} 
                      className="cursor-pointer bg-infi-dark-blue/60 border border-infi-gold/20 hover:border-infi-gold/50 transition-all"
                      onClick={() => showLocationDetails(location)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{location.name}</h3>
                            <p className="text-sm text-gray-400 flex items-center gap-1">
                              <MapPin size={12} /> {location.location}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {location.cryptos.map((crypto) => (
                                <span 
                                  key={crypto} 
                                  className={`text-xs ${(cryptoIcons as any)[crypto].color} bg-infi-dark px-2 py-0.5 rounded-full border border-infi-gold/30`}
                                >
                                  {(cryptoIcons as any)[crypto].icon} {crypto}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1">{location.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    No locations found matching your criteria.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
