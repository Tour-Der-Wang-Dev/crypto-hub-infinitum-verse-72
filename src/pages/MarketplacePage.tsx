
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const MarketplacePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Crypto Marketplace</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Buy and sell products with cryptocurrency. Connect with vendors worldwide.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
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
            Browse Categories
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Cards */}
          {[
            {
              title: "Blockchain Security Suite",
              category: "Software",
              price: "0.05 BTC",
              seller: "CryptoTech"
            },
            {
              title: "Limited Edition NFT Artwork",
              category: "Digital Art",
              price: "1.2 ETH",
              seller: "NFTCreator"
            },
            {
              title: "Crypto Hardware Wallet",
              category: "Hardware",
              price: "0.01 BTC",
              seller: "SecureWallet"
            },
            {
              title: "Blockchain Development Course",
              category: "Education",
              price: "0.5 ETH",
              seller: "CryptoAcademy"
            },
            {
              title: "Custom Mining Rig",
              category: "Hardware",
              price: "0.25 BTC",
              seller: "MiningExperts"
            },
            {
              title: "DeFi Strategy Guide",
              category: "Education",
              price: "0.03 ETH",
              seller: "DeFiGuru"
            }
          ].map((product, index) => (
            <div key={index} className="card-glass overflow-hidden rounded-lg flex flex-col">
              <div className="h-48 bg-infi-dark-blue/70 flex items-center justify-center">
                <span className="text-4xl">🖼️</span>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs bg-infi-dark border border-infi-gold/30 rounded-md text-infi-gold-light">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                <p className="text-sm text-gray-400 mb-2">Seller: {product.seller}</p>
                <div className="mt-auto">
                  <p className="text-infi-gold font-bold mb-3">{product.price}</p>
                  <Button className="w-full gold-gradient text-xs">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MarketplacePage;
