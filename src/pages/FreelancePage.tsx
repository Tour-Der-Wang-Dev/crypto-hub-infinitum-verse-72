
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const FreelancePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Freelance Services</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Find talented freelancers or offer your services with secure cryptocurrency payments.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mb-8 gap-4">
          <Button className="gold-gradient">
            Freelancers
          </Button>
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Find Jobs..."
              className="w-full px-4 py-3 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="outline" className="border-infi-gold/30 text-infi-gold-light hover:bg-infi-gold/10">
            Development
          </Button>
          <Button variant="outline" className="border-infi-gold/30 text-infi-gold-light hover:bg-infi-gold/10">
            Design
          </Button>
          <Button variant="outline" className="border-infi-gold/30 text-infi-gold-light hover:bg-infi-gold/10">
            Marketing
          </Button>
          <Button variant="outline" className="border-infi-gold/30 text-infi-gold-light hover:bg-infi-gold/10">
            All Categories
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Freelancer Cards */}
          {[
            {
              name: "Alex Johnson",
              title: "Blockchain Developer",
              rating: 4.9,
              projects: 45,
              skills: ["Solidity", "Smart Contracts", "DeFi", "Web3.js"],
              rate: "0.015 BTC",
              avatar: "A"
            },
            {
              name: "Sarah Williams",
              title: "UI/UX Designer",
              rating: 4.8,
              projects: 38,
              skills: ["UI Design", "UX Research", "Figma", "NFT Design"],
              rate: "0.25 ETH",
              avatar: "S"
            },
            {
              name: "Michael Chen",
              title: "Smart Contract Auditor",
              rating: 5.0,
              projects: 27,
              skills: ["Smart Contract Audit", "Security Analysis", "Solidity", "Rust"],
              rate: "0.02 BTC",
              avatar: "M"
            },
            {
              name: "Priya Sharma",
              title: "Crypto Content Writer",
              rating: 4.7,
              projects: 53,
              skills: ["Technical Writing", "Blog Posts", "White Papers", "Research"],
              rate: "0.1 ETH",
              avatar: "P"
            }
          ].map((freelancer, index) => (
            <div key={index} className="card-glass p-6 rounded-lg">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-infi-blue rounded-full flex items-center justify-center text-xl font-bold">
                  {freelancer.avatar}
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
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FreelancePage;
