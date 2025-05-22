
import { Button } from '@/components/ui/button';

interface Hotel {
  name: string;
  location: string;
  price: string;
  rating: number;
  cryptos: string[];
}

const FeaturedDestinations = () => {
  const hotels: Hotel[] = [
    {
      name: "Crypto Island Resort",
      location: "Maldives",
      price: "0.08 BTC",
      rating: 4.9,
      cryptos: ["BTC", "ETH", "SOL"]
    },
    {
      name: "Blockchain City Hotel",
      location: "Singapore",
      price: "0.05 BTC",
      rating: 4.7,
      cryptos: ["BTC", "ETH", "USDC"]
    },
    {
      name: "Digital Nomad Villa",
      location: "Bali, Indonesia",
      price: "0.03 BTC",
      rating: 4.8,
      cryptos: ["BTC", "ETH", "ADA"]
    },
    {
      name: "Web3 Retreat Center",
      location: "Costa Rica",
      price: "0.06 BTC",
      rating: 4.6,
      cryptos: ["BTC", "ETH", "DOT"]
    }
  ];

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Featured Crypto-Friendly Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="card-glass overflow-hidden rounded-lg flex flex-col">
            <div className="h-40 bg-infi-dark-blue/70 flex items-center justify-center">
              <span className="text-4xl">🏨</span>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{hotel.name}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm">{hotel.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2">{hotel.location}</p>
              <div className="flex mb-2 gap-1">
                {hotel.cryptos.map((crypto, i) => (
                  <span key={i} className="text-xs bg-infi-dark px-2 py-0.5 rounded-full border border-infi-gold/30 text-infi-gold-light">
                    {crypto}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <p className="text-infi-gold font-bold mb-3">{hotel.price} <span className="text-gray-400 text-xs">/night</span></p>
                <Button className="w-full gold-gradient text-xs">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedDestinations;
