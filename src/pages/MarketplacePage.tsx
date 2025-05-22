
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { Bitcoin, DollarSign } from 'lucide-react';
import ProductCard from '@/components/marketplace/ProductCard';
import { products } from '@/data/marketplace-data';

const categories = ['All Categories', 'Software', 'Hardware', 'Digital Art', 'Education', 'Services'];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Popular'];

const MarketplacePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Newest');

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        product.seller.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Crypto Marketplace</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Buy and sell products with cryptocurrency. Connect with vendors worldwide and trade securely using Bitcoin, Ethereum, and more.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-infi-dark-blue/50 backdrop-blur-md p-6 rounded-lg border border-infi-gold/20 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-grow">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[180px] bg-infi-dark-blue/80 border border-infi-gold/20">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-infi-dark-blue border border-infi-gold/20">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px] bg-infi-dark-blue/80 border border-infi-gold/20">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-infi-dark-blue border border-infi-gold/20">
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="border-infi-gold/30 hover:bg-infi-gold/10">
              <Bitcoin size={14} className="mr-1 text-infi-gold" />
              Bitcoin
            </Button>
            <Button variant="outline" size="sm" className="border-infi-gold/30 hover:bg-infi-gold/10">
              <DollarSign size={14} className="mr-1 text-infi-gold" />
              USDT
            </Button>
            <Button variant="outline" size="sm" className="border-infi-gold/30 hover:bg-infi-gold/10">
              Free Shipping
            </Button>
            <Button variant="outline" size="sm" className="border-infi-gold/30 hover:bg-infi-gold/10">
              Top Rated
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-300">Showing {filteredProducts.length} results</p>
          <div className="flex items-center gap-2 text-sm">
            <span>View:</span>
            <Button variant="outline" size="sm" className="border-infi-gold/30 hover:bg-infi-gold/10 h-8 w-8 p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </Button>
            <Button variant="outline" size="sm" className="border-infi-gold/30 hover:bg-infi-gold/10 h-8 w-8 p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="21" x2="3" y1="12" y2="12" />
                <line x1="21" x2="3" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink className="border border-infi-gold/20 hover:bg-infi-gold/10">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="border border-infi-gold/20 bg-infi-gold/20 hover:bg-infi-gold/30" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="border border-infi-gold/20 hover:bg-infi-gold/10">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="border border-infi-gold/20 hover:bg-infi-gold/10">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="border border-infi-gold/20 hover:bg-infi-gold/10">Next</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Layout>
  );
};

export default MarketplacePage;
