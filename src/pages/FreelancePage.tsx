
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FreelancerCard from '@/components/freelance/FreelancerCard';
import JobCard from '@/components/freelance/JobCard';
import { Freelancer, Job } from '@/types/marketplace';
import { freelancers, jobs } from '@/data/freelance-data';
import { Search } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

type TabType = 'freelancers' | 'jobs';

const FreelancePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('freelancers');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');

  const categories = ['Development', 'Design', 'Marketing', 'Writing', 'All Categories'];

  const filteredFreelancers = freelancers.filter(freelancer => 
    freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    freelancer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesCategory = selectedCategory === 'All Categories' || job.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Freelance Services</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Find talented freelancers or offer your services with secure cryptocurrency payments.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row mb-8 gap-4">
          <div className="flex space-x-2">
            <Button
              className={activeTab === 'freelancers' ? 'gold-gradient' : 'border-infi-gold/30 text-infi-gold-light hover:bg-infi-gold/10'}
              variant={activeTab === 'freelancers' ? 'default' : 'outline'}
              onClick={() => setActiveTab('freelancers')}
            >
              Freelancers
            </Button>
            <Button
              className={activeTab === 'jobs' ? 'gold-gradient' : 'border-infi-gold/30 text-infi-gold-light hover:bg-infi-gold/10'}
              variant={activeTab === 'jobs' ? 'default' : 'outline'}
              onClick={() => setActiveTab('jobs')}
            >
              Find Jobs
            </Button>
          </div>
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder={activeTab === 'freelancers' ? "Find Freelancers..." : "Find Jobs..."}
              className="w-full pl-10 px-4 py-3 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <Button 
              key={category}
              variant="outline" 
              className={`border-infi-gold/30 text-infi-gold-light hover:bg-infi-gold/10 ${
                selectedCategory === category ? 'bg-infi-gold/10 border-infi-gold/50' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'freelancers' ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredFreelancers.map((freelancer, index) => (
                <FreelancerCard key={index} freelancer={freelancer} />
              ))}
            </div>
            
            {filteredFreelancers.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-400">No freelancers found matching your search criteria.</p>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-400">No jobs found matching your search criteria.</p>
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        {((activeTab === 'freelancers' && filteredFreelancers.length > 0) || 
          (activeTab === 'jobs' && filteredJobs.length > 0)) && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationLink className="border-infi-gold/30 text-infi-gold-light hover:bg-infi-gold/10">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="border-infi-gold/30 text-infi-gold-light hover:bg-infi-gold/10">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="border-infi-gold/30 text-infi-gold-light hover:bg-infi-gold/10">
                  3
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </Layout>
  );
};

export default FreelancePage;
