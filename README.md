
# InfiWorld - Crypto Payment Platform

![InfiWorld Logo](https://infiworld.com/logo.png)

InfiWorld is the ultimate platform integrating cryptocurrency payments into marketplace, freelance services, and travel reservations.

## 🚀 Features

- **Marketplace Integration** - Buy and sell products using cryptocurrency
- **Freelance Services** - Hire freelancers and get paid in crypto
- **Travel Booking** - Book flights, hotels, and experiences with crypto payments
- **Secure Wallet** - Manage your cryptocurrency assets in one place
- **User Profiles** - Verified accounts with robust profile management

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **UI Components**: Tailwind CSS, shadcn/ui
- **State Management**: React Context API, TanStack Query
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Performance**: Web Vitals tracking
- **SEO**: React Helmet

## 📋 Prerequisites

- Node.js (v18.x or higher)
- npm or yarn package manager
- Supabase account for backend services

## 🔧 Setup & Installation

```typescript
// Clone the repository
git clone https://github.com/your-username/infiworld.git

// Navigate to project directory
cd infiworld

// Install dependencies
npm install
// or with yarn
yarn install

// Create a .env file based on .env.example
cp .env.example .env

// Add your Supabase credentials to .env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

// Start development server
npm run dev
// or with yarn
yarn dev
```

## 🏗️ Build for Production

```typescript
// Build the project
npm run build
// or with yarn
yarn build

// Preview the production build
npm run preview
// or with yarn
yarn preview
```

## 📝 Environment Variables

```typescript
// Required environment variables
interface EnvironmentVariables {
  VITE_SUPABASE_URL: string;       // Your Supabase project URL
  VITE_SUPABASE_ANON_KEY: string;  // Your Supabase anonymous key
}
```

## 📖 Documentation

Additional documentation:

- [File Structure](./docs/filesExplainer.md)
- [Scripts Reference](./docs/scripts.md)
- [System Architecture](./docs/architecture.md)
- [API Reference](./docs/api.md)

## 🤝 Contributing

We welcome contributions to InfiWorld!

```typescript
interface ContributionGuidelines {
  fork: () => void;                 // Fork the repository
  createBranch: (name: string) => void; // Create a feature branch
  commitChanges: (message: string) => void; // Commit your changes
  pushToFork: () => void;           // Push to your fork
  createPullRequest: () => void;    // Submit a pull request
}
```

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some amazing feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/your-username/infiworld](https://github.com/your-username/infiworld)
