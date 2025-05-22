
import { Job } from '@/types/marketplace';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="card-glass p-6 rounded-lg">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <span className="text-infi-gold font-bold">{job.budget} {job.currency}</span>
      </div>
      
      <div className="mt-2 flex items-center text-sm text-gray-400">
        <Clock className="h-4 w-4 mr-1" />
        <span>Posted {job.postedDate}</span>
        {job.deadline && (
          <span className="ml-4 flex items-center">
            <Calendar className="h-4 w-4 mr-1" /> 
            Due {job.deadline}
          </span>
        )}
      </div>

      <p className="mt-3 text-gray-300 text-sm line-clamp-2">{job.description}</p>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, i) => (
            <span key={i} className="text-xs bg-infi-dark px-2 py-1 rounded-full border border-infi-gold/30 text-infi-gold-light">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-400">
          <span>By: {job.postedBy}</span>
          {job.proposals !== undefined && (
            <span className="ml-3">{job.proposals} proposals</span>
          )}
        </div>
        <Button className="gold-gradient text-sm">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
