
import { useState } from 'react';
import { Briefcase } from 'lucide-react';
import JobCard from '@/components/freelance/JobCard';
import JobSearch from './JobSearch';
import { Job } from '@/types/marketplace';

interface JobsTabProps {
  jobs: Job[];
}

const JobsTab = ({ jobs }: JobsTabProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Array.from(new Set(jobs.map(job => job.category)))];

  return (
    <div className="card-glass p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Find Crypto Travel Jobs</h2>
      <JobSearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={categories}
      />
      
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
  );
};

export default JobsTab;
