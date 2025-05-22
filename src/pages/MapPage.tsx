
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const MapPage = () => {
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
              <input
                type="text"
                placeholder="Search locations..."
                className="w-full px-4 py-3 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          <Button className="gold-gradient">
            Apply Filters
          </Button>
        </div>

        {/* Map Placeholder */}
        <div className="relative w-full h-[500px] bg-infi-dark-blue/50 rounded-lg flex items-center justify-center border border-infi-gold/20">
          <div className="text-center p-8">
            <div className="text-infi-gold text-6xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
            <p className="text-gray-400 max-w-md">
              This would be an interactive map displaying crypto-friendly businesses. Clicking on the markers would show more information.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">5 Locations Found</h2>
          <div className="space-y-4">
            {/* Sample location cards */}
            {[
              { name: "Crypto Cafe", location: "New York, USA", rating: 4.8, cryptos: ["Bitcoin", "Ethereum"] },
              { name: "Digital Goods Store", location: "London, UK", rating: 4.5, cryptos: ["Bitcoin", "Litecoin", "Solana"] },
              { name: "Blockchain Hotel", location: "Tokyo, Japan", rating: 4.7, cryptos: ["Bitcoin", "Ethereum", "Cardano"] },
              { name: "Crypto Tech Hub", location: "Singapore", rating: 4.6, cryptos: ["Bitcoin", "Ethereum", "USDT"] },
              { name: "NFT Gallery", location: "Paris, France", rating: 4.9, cryptos: ["Ethereum", "Solana"] }
            ].map((location, index) => (
              <div key={index} className="card-glass p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{location.name}</h3>
                    <p className="text-sm text-gray-400">{location.location}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {location.cryptos.map((crypto, i) => (
                        <span key={i} className="text-xs bg-infi-dark px-2 py-1 rounded-full border border-infi-gold/30 text-infi-gold-light">
                          {crypto}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{location.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
