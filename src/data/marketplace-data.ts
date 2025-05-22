
import { Product } from "@/types/marketplace";

export const products: Product[] = [
  {
    title: "Blockchain Security Suite",
    category: "Software",
    price: "0.05 BTC",
    originalPrice: "0.08 BTC",
    seller: "CryptoTech",
    description: "Enterprise-grade security solution for blockchain applications with advanced threat detection.",
    emoji: "🔒",
    rating: 4.8,
    reviews: 120,
    acceptedCurrencies: ["BTC", "ETH"],
    inStock: true
  },
  {
    title: "Limited Edition NFT Artwork",
    category: "Digital Art",
    price: "1.2 ETH",
    seller: "NFTCreator",
    description: "One-of-a-kind digital artwork certified on the blockchain. Only 10 prints available.",
    emoji: "🎨",
    rating: 5,
    reviews: 32,
    featuredBadge: "Limited",
    acceptedCurrencies: ["ETH"],
    inStock: true
  },
  {
    title: "Crypto Hardware Wallet",
    category: "Hardware",
    price: "0.01 BTC",
    seller: "SecureWallet",
    description: "Military-grade encryption hardware wallet supporting over 1,500 cryptocurrencies.",
    emoji: "💼",
    rating: 4.7,
    reviews: 589,
    acceptedCurrencies: ["BTC", "ETH", "USDT"],
    inStock: true
  },
  {
    title: "Blockchain Development Course",
    category: "Education",
    price: "0.5 ETH",
    originalPrice: "0.75 ETH",
    seller: "CryptoAcademy",
    description: "Comprehensive course teaching blockchain development fundamentals with practical projects.",
    emoji: "📚",
    rating: 4.5,
    reviews: 245,
    featuredBadge: "Bestseller",
    acceptedCurrencies: ["ETH", "USDT"],
    inStock: true
  },
  {
    title: "Custom Mining Rig",
    category: "Hardware",
    price: "0.25 BTC",
    seller: "MiningExperts",
    description: "High performance, energy-efficient mining rig custom built for optimal hash rates.",
    emoji: "⛏️",
    rating: 4.3,
    reviews: 88,
    acceptedCurrencies: ["BTC"],
    inStock: true
  },
  {
    title: "DeFi Strategy Guide",
    category: "Education",
    price: "0.03 ETH",
    seller: "DeFiGuru",
    description: "Master yield farming, liquidity pools, and advanced DeFi strategies with this comprehensive guide.",
    emoji: "📊",
    rating: 4.6,
    reviews: 172,
    acceptedCurrencies: ["ETH", "USDT"],
    inStock: true
  },
  {
    title: "Crypto Trading Bot",
    category: "Software",
    price: "0.08 BTC",
    seller: "AlgoTrader",
    description: "Automated cryptocurrency trading bot with customizable strategies and real-time analytics.",
    emoji: "🤖",
    rating: 4.2,
    reviews: 213,
    acceptedCurrencies: ["BTC", "ETH"],
    inStock: true
  },
  {
    title: "Virtual Reality NFT Gallery",
    category: "Digital Art",
    price: "2.5 ETH",
    seller: "VRGallery",
    description: "Immersive virtual reality gallery to showcase your NFT collection with customizable environments.",
    emoji: "👓",
    rating: 4.9,
    reviews: 56,
    featuredBadge: "New",
    acceptedCurrencies: ["ETH"],
    inStock: true
  },
  {
    title: "Smart Contract Audit Service",
    category: "Services",
    price: "0.15 BTC",
    seller: "SmartAudit",
    description: "Professional security audit for your smart contracts with detailed vulnerability reports.",
    emoji: "📝",
    rating: 5,
    reviews: 47,
    acceptedCurrencies: ["BTC", "ETH"],
    inStock: true
  }
];
