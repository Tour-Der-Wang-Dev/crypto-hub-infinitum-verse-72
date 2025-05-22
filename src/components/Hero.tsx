
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfinityLogo from './InfinityLogo';

const Hero = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState({
    cryptoUsers: 0,
    transactions: 0,
    merchants: 0,
    volume: 0,
  });

  useEffect(() => {
    // Animate the counter numbers
    const interval = setInterval(() => {
      setCount(prev => ({
        cryptoUsers: prev.cryptoUsers < 50 ? prev.cryptoUsers + 1 : 50,
        transactions: prev.transactions < 10000 ? prev.transactions + 250 : 10000,
        merchants: prev.merchants < 2500 ? prev.merchants + 62 : 2500,
        volume: prev.volume < 1.2 ? prev.volume + 0.03 : 1.2,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-10 flex flex-col">
      {/* Hero section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-5">
        <div className="mb-6">
          <InfinityLogo className="h-20 w-20 mx-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The Future of <br />
          <span className="text-gradient">Crypto Payments</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          InfiWorld connects cryptocurrency with real-world services in one seamless ecosystem. From marketplace to travel, experience the limitless possibilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate('/map')} size="lg" className="gold-gradient animate-pulse-gold">
            Explore Map
          </Button>
          <Button onClick={() => navigate('/marketplace')} variant="outline" size="lg" className="border-infi-gold text-infi-gold hover:bg-infi-gold/10 transition">
            View All Services
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
        <div className="text-center">
          <div className="text-3xl font-bold text-infi-gold-light mb-1">{count.cryptoUsers}+</div>
          <div className="text-gray-400 text-sm">Crypto Merchants</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-infi-gold-light mb-1">{count.transactions.toLocaleString()}+</div>
          <div className="text-gray-400 text-sm">Transactions</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-infi-gold-light mb-1">{count.merchants.toLocaleString()}+</div>
          <div className="text-gray-400 text-sm">Partners</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-infi-gold-light mb-1">${count.volume.toFixed(1)}M</div>
          <div className="text-gray-400 text-sm">Daily Transactions</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
