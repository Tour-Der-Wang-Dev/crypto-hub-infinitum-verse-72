
import { Freelancer, Job } from '@/types/marketplace';

export const freelancers: Freelancer[] = [
  {
    name: "Alex Johnson",
    title: "Blockchain Developer",
    rating: 4.9,
    projects: 45,
    skills: ["Solidity", "Smart Contracts", "DeFi", "Web3.js"],
    rate: "0.015",
    currency: "BTC",
    avatar: "A",
    availability: "Available now"
  },
  {
    name: "Sarah Williams",
    title: "UI/UX Designer",
    rating: 4.8,
    projects: 38,
    skills: ["UI Design", "UX Research", "Figma", "NFT Design"],
    rate: "0.25",
    currency: "ETH",
    avatar: "S",
    availability: "Available in 1 week"
  },
  {
    name: "Michael Chen",
    title: "Smart Contract Auditor",
    rating: 5.0,
    projects: 27,
    skills: ["Smart Contract Audit", "Security Analysis", "Solidity", "Rust"],
    rate: "0.02",
    currency: "BTC",
    avatar: "M"
  },
  {
    name: "Priya Sharma",
    title: "Crypto Content Writer",
    rating: 4.7,
    projects: 53,
    skills: ["Technical Writing", "Blog Posts", "White Papers", "Research"],
    rate: "0.1",
    currency: "ETH",
    avatar: "P"
  },
  {
    name: "David Nguyen",
    title: "Blockchain Architect",
    rating: 4.9,
    projects: 32,
    skills: ["System Design", "Ethereum", "Polkadot", "Layer 2"],
    rate: "0.03",
    currency: "BTC",
    avatar: "D"
  },
  {
    name: "Emma Wilson",
    title: "NFT Artist",
    rating: 4.8,
    projects: 64,
    skills: ["Digital Art", "3D Modeling", "Animation", "Creative Design"],
    rate: "0.35",
    currency: "ETH",
    avatar: "E",
    availability: "Limited availability"
  }
];

export const jobs: Job[] = [
  {
    title: "Smart Contract Development for DeFi Platform",
    category: "Development",
    budget: "0.5",
    currency: "BTC",
    postedBy: "DeFiProject",
    description: "We're looking for an experienced Solidity developer to build a set of smart contracts for our yield farming platform with staking capabilities and governance tokens.",
    skills: ["Solidity", "DeFi", "Yield Farming", "Smart Contracts"],
    postedDate: "2 days ago",
    proposals: 8,
    deadline: "30 days"
  },
  {
    title: "NFT Collection Design - 10K Unique Items",
    category: "Design",
    budget: "3",
    currency: "ETH",
    postedBy: "CryptoCollectibles",
    description: "Need a talented artist to design a collection of 10,000 unique NFTs with various traits and rarity levels. Experience with generative art is a plus.",
    skills: ["NFT Design", "Digital Art", "Generative Art", "Traits Design"],
    postedDate: "1 week ago",
    proposals: 15
  },
  {
    title: "Technical White Paper for Layer 2 Solution",
    category: "Writing",
    budget: "0.2",
    currency: "BTC",
    postedBy: "ScaleTech",
    description: "Looking for a technical writer to create a comprehensive white paper for our new Layer 2 scaling solution. Strong understanding of blockchain technology required.",
    skills: ["Technical Writing", "White Paper", "Blockchain", "Layer 2"],
    postedDate: "3 days ago",
    proposals: 6,
    deadline: "14 days"
  },
  {
    title: "Community Manager for Token Launch",
    category: "Marketing",
    budget: "0.8",
    currency: "ETH",
    postedBy: "NewToken",
    description: "Seeking an experienced community manager to handle our Discord, Telegram, and social media channels before, during, and after our token launch.",
    skills: ["Community Management", "Discord", "Telegram", "Token Launch"],
    postedDate: "5 days ago",
    proposals: 12
  },
  {
    title: "Crypto Wallet App UI Development",
    category: "Development",
    budget: "1.5",
    currency: "ETH",
    postedBy: "WalletCo",
    description: "We need a React Native developer to build a beautiful and intuitive UI for our crypto wallet application. The backend is already built.",
    skills: ["React Native", "UI Development", "Mobile App", "Crypto Wallet"],
    postedDate: "1 day ago",
    proposals: 3
  }
];
