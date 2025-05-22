
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobCard from '@/components/freelance/JobCard';
import { Input } from '@/components/ui/input';
import { Briefcase, Filter, Search } from 'lucide-react';
import { useState } from 'react';
import { travelJobs } from '@/data/travel-data';

const TravelPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredJobs = travelJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Array.from(new Set(travelJobs.map(job => job.category)))];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Travel Reservations</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Book flights, hotels, and experiences using cryptocurrency. Travel the world with blockchain.
          </p>
        </div>

        <Tabs defaultValue="hotels" className="mb-10">
          <TabsList className="grid w-full grid-cols-4 bg-infi-dark-blue/60">
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="flights">Flights</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hotels" className="mt-6">
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
          </TabsContent>
          
          <TabsContent value="flights" className="mt-6">
            <div className="card-glass p-6 rounded-lg">
              <p className="text-center py-8">Flight booking interface coming soon</p>
            </div>
          </TabsContent>
          
          <TabsContent value="experiences" className="mt-6">
            <div className="card-glass p-6 rounded-lg">
              <p className="text-center py-8">Experiences booking interface coming soon</p>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="mt-6">
            <div className="card-glass p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Find Crypto Travel Jobs</h2>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search job titles, skills, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-infi-dark border border-infi-gold/20 focus:border-infi-gold"
                  />
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <select 
                      className="w-full pl-10 pr-4 py-2 rounded-md bg-infi-dark border border-infi-gold/20 focus:border-infi-gold focus:outline-none"
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-gray-300">No jobs matching your search criteria</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <h2 className="text-xl font-bold mb-4">Featured Crypto-Friendly Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Hotel Cards */}
          {[
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
          ].map((hotel, index) => (
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
      </div>
    </Layout>
  );
};

export default TravelPage;
