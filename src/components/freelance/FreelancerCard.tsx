
import { Freelancer } from '@/types/marketplace';
import { Button } from '@/components/ui/button';

interface FreelancerCardProps {
  freelancer: Freelancer;
}

const FreelancerCard = ({ freelancer }: FreelancerCardProps) => {
  return (
    <div className="card-glass p-6 rounded-lg">
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-infi-blue rounded-full flex items-center justify-center text-xl font-bold">
          {freelancer.avatar || freelancer.name.charAt(0)}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">{freelancer.name}</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{freelancer.rating}</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{freelancer.title}</p>
          <p className="text-xs text-gray-500 mt-1">{freelancer.projects} projects</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm font-semibold mb-2">Skills:</div>
        <div className="flex flex-wrap gap-2">
          {freelancer.skills.map((skill, i) => (
            <span key={i} className="text-xs bg-infi-dark px-2 py-1 rounded-full border border-infi-gold/30 text-infi-gold-light">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <span className="text-infi-gold font-bold">{freelancer.rate}</span>
          <span className="text-gray-400 text-sm">/hour</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-infi-gold/50 text-infi-gold-light hover:bg-infi-gold/10 text-sm">
            Contact
          </Button>
          <Button className="gold-gradient text-sm">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerCard;
