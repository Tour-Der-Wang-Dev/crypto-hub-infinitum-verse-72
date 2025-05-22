
import { Button } from '@/components/ui/button';

const HotelsTab = () => {
  return (
    <div className="card-glass p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Find Crypto-Friendly Hotels</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-gray-400 text-sm mb-1">Destination</label>
          <input
            type="text"
            placeholder="City or hotel name"
            className="w-full px-4 py-2 rounded-md bg-infi-dark border border-infi-gold/20 focus:border-infi-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">Check-in</label>
          <input
            type="date"
            className="w-full px-4 py-2 rounded-md bg-infi-dark border border-infi-gold/20 focus:border-infi-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">Guests</label>
          <select className="w-full px-4 py-2 rounded-md bg-infi-dark border border-infi-gold/20 focus:border-infi-gold focus:outline-none">
            <option>Number of guests</option>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4+ Guests</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">Crypto Payment</label>
          <select className="w-full px-4 py-2 rounded-md bg-infi-dark border border-infi-gold/20 focus:border-infi-gold focus:outline-none">
            <option>Select currency</option>
            <option>Bitcoin (BTC)</option>
            <option>Ethereum (ETH)</option>
            <option>USDT</option>
            <option>Any Crypto</option>
          </select>
        </div>
      </div>
      <Button className="w-full gold-gradient">Search Hotels</Button>
    </div>
  );
};

export default HotelsTab;
