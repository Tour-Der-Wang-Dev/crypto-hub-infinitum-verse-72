
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plane, Calendar, Users, Briefcase } from 'lucide-react';

const FlightsTab = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [cryptoCurrency, setCryptoCurrency] = useState('');

  // Available cryptocurrencies for payment
  const cryptoOptions = [
    { value: '', label: 'Select cryptocurrency' },
    { value: 'BTC', label: 'Bitcoin (BTC)' },
    { value: 'ETH', label: 'Ethereum (ETH)' },
    { value: 'USDT', label: 'Tether (USDT)' },
    { value: 'SOL', label: 'Solana (SOL)' },
    { value: 'BNB', label: 'Binance Coin (BNB)' }
  ];

  // Example destinations with images
  const popularDestinations = [
    {
      id: 'dest1',
      city: 'Singapore',
      country: 'Singapore',
      price: '0.03 BTC',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&q=75&fit=crop&w=600'
    },
    {
      id: 'dest2',
      city: 'Dubai',
      country: 'UAE',
      price: '0.04 BTC',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&q=75&fit=crop&w=600'
    },
    {
      id: 'dest3',
      city: 'Miami',
      country: 'USA',
      price: '0.025 BTC',
      image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&q=75&fit=crop&w=600'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Flight search logic would go here
    console.log('Searching flights from', fromLocation, 'to', toLocation);
  };

  return (
    <section className="card-glass p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Search Crypto-Friendly Flights</h2>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <label htmlFor="from" className="block text-gray-400 text-sm mb-1">From</label>
            <Plane className="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              id="from"
              type="text"
              placeholder="Departure city or airport"
              className="w-full pl-10 px-4 py-2 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              aria-required="true"
            />
          </div>
          <div className="relative">
            <label htmlFor="to" className="block text-gray-400 text-sm mb-1">To</label>
            <Plane className="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400 rotate-90" size={16} />
            <input
              id="to"
              type="text"
              placeholder="Destination city or airport"
              className="w-full pl-10 px-4 py-2 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              aria-required="true"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="relative">
            <label htmlFor="depart" className="block text-gray-400 text-sm mb-1">Depart</label>
            <Calendar className="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              id="depart"
              type="date"
              className="w-full pl-10 px-4 py-2 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="return" className="block text-gray-400 text-sm mb-1">Return</label>
            <Calendar className="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              id="return"
              type="date"
              className="w-full pl-10 px-4 py-2 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="passengers" className="block text-gray-400 text-sm mb-1">Passengers</label>
            <Users className="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400" size={16} />
            <select
              id="passengers"
              className="w-full pl-10 px-4 py-2 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none appearance-none"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            >
              {Array.from({ length: 9 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <label htmlFor="crypto" className="block text-gray-400 text-sm mb-1">Pay with</label>
            <Briefcase className="absolute left-3 top-[60%] transform -translate-y-1/2 text-gray-400" size={16} />
            <select
              id="crypto"
              className="w-full pl-10 px-4 py-2 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none appearance-none"
              value={cryptoCurrency}
              onChange={(e) => setCryptoCurrency(e.target.value)}
            >
              {cryptoOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button type="submit" className="w-full gold-gradient">
          Search Flights
        </Button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Popular Crypto Destinations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularDestinations.map(destination => (
            <article key={destination.id} className="card-glass overflow-hidden rounded-lg">
              <div className="h-40 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold">{destination.city}</h4>
                <p className="text-sm text-gray-400">{destination.country}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-infi-gold font-bold">From {destination.price}</p>
                  <Button size="sm" className="gold-gradient text-xs py-1 px-3">
                    View Flights
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightsTab;
