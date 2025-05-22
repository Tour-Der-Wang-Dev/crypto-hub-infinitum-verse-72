
# Project Files Structure

This document provides an overview of all files in the project with their descriptions and dependency levels.

- 🟢 - Few dependencies (0-3 imports)
- 🟡 - Moderate dependencies (4-7 imports)
- 🔴 - Many dependencies (8+ imports)

## Root Files

- `vite.config.ts` 🟡 - Vite configuration with build options and plugins
- `tailwind.config.ts` 🟢 - Tailwind CSS configuration with theme customization
- `README.md` 🟢 - Project overview and setup instructions
- `main.tsx` 🟢 - Application entry point that renders the React app

## Source Structure

### Core

- `src/App.tsx` 🔴 - Main application component with route definitions
- `src/main.tsx` 🟢 - Entry point that renders the App component
- `src/index.css` 🟢 - Global CSS styles

### Components

#### UI Components (src/components/ui)
- `button.tsx` 🟢 - Reusable button component with variants
- `card.tsx` 🟢 - Card component with header, content and footer
- `toast.tsx` 🟡 - Toast notification component
- `input.tsx` 🟢 - Input field component
- `avatar.tsx` 🟢 - User avatar component with image and fallback
- `tabs.tsx` 🟢 - Tabbed interface component
- `badge.tsx` 🟢 - Badge component for status indicators
- `progress.tsx` 🟢 - Progress bar component
- `textarea.tsx` 🟢 - Multi-line text input component
- `checkbox.tsx` 🟢 - Checkbox input component
- `switch.tsx` 🟢 - Toggle switch component
- `tooltip.tsx` 🟡 - Contextual tooltip component
- `popover.tsx` 🟡 - Popover component for dialogs
- `toggle.tsx` 🟢 - Toggle button component
- `radio-group.tsx` 🟢 - Radio button group component
- `alert.tsx` 🟢 - Alert message component
- `scroll-area.tsx` 🟢 - Scrollable content area component
- `resizable.tsx` 🟡 - Resizable panel component
- `toggle-group.tsx` 🟡 - Group of toggle buttons component
- `breadcrumb.tsx` 🟡 - Breadcrumb navigation component
- `pagination.tsx` 🟡 - Pagination controls component
- `calendar.tsx` 🟡 - Date calendar component
- `aspect-ratio.tsx` 🟢 - Component to maintain aspect ratio
- `collapsible.tsx` 🟢 - Expandable/collapsible section component
- `use-toast.ts` 🟢 - Hook for managing toast notifications

#### Feature Components

- `src/components/FeatureSection.tsx` 🟡 - Feature showcase section
- `src/components/Footer.tsx` 🟢 - Site footer component
- `src/components/Hero.tsx` 🟡 - Hero banner/landing component
- `src/components/InfinityLogo.tsx` 🟢 - Logo component for InfiWorld
- `src/components/Layout.tsx` 🟡 - Main layout wrapper component
- `src/components/Navbar.tsx` 🟡 - Navigation bar component

#### SEO Components

- `src/components/SEO/SeoHelmet.tsx` 🟡 - SEO component using react-helmet

#### Auth Components

- `src/components/auth/AuthModal.tsx` 🔴 - Authentication modal with login/signup

#### Domain-Specific Components

**Marketplace**
- `src/components/marketplace/ProductCard.tsx` 🟡 - Product display card component

**Freelance**
- `src/components/freelance/FreelancerCard.tsx` 🟡 - Freelancer profile card
- `src/components/freelance/JobCard.tsx` 🟡 - Job listing card component

**Travel**
- `src/components/travel/ExperiencesTab.tsx` 🟡 - Travel experiences tab content
- `src/components/travel/FeaturedDestinations.tsx` 🟡 - Featured travel destinations
- `src/components/travel/FlightsTab.tsx` 🟡 - Flight search tab content
- `src/components/travel/HotelsTab.tsx` 🟡 - Hotel search tab content
- `src/components/travel/JobsTab.tsx` 🟡 - Travel jobs tab content
- `src/components/travel/JobSearch.tsx` 🟡 - Job search interface component

### Pages

- `src/pages/Index.tsx` 🟡 - Landing/home page
- `src/pages/NotFound.tsx` 🟢 - 404 error page
- `src/pages/MapPage.tsx` 🟡 - Map view page
- `src/pages/MarketplacePage.tsx` 🟡 - Marketplace listing page
- `src/pages/FreelancePage.tsx` 🟡 - Freelance services page
- `src/pages/TravelPage.tsx` 🟡 - Travel services page
- `src/pages/VerificationPage.tsx` 🟡 - Account verification page
- `src/pages/ProfilePage.tsx` 🟡 - User profile page
- `src/pages/WalletPage.tsx` 🟡 - Crypto wallet page

### Hooks

- `src/hooks/use-profile.ts` 🔴 - Hook for managing user profile data
- `src/hooks/use-toast.ts` 🟢 - Toast notification management hook
- `src/hooks/use-mobile.tsx` 🟢 - Hook for responsive design detection

### Contexts

- `src/contexts/AuthContext.tsx` 🔴 - Authentication state context provider

### Utilities

- `src/utils/webVitalsReporter.ts` 🟢 - Web vitals performance tracking
- `src/lib/utils.ts` 🟢 - General utility functions
- `src/lib/supabase.ts` 🟢 - Supabase client configuration

### Types

- `src/types/supabase.ts` 🟢 - TypeScript types for Supabase data
- `src/types/marketplace.ts` 🟢 - TypeScript types for marketplace features
- `src/vite-env.d.ts` 🟢 - Vite environment type declarations

### Data

- `src/data/marketplace-data.ts` 🟢 - Mock data for marketplace
- `src/data/freelance-data.ts` 🟢 - Mock data for freelance services
- `src/data/travel-data.ts` 🟢 - Mock data for travel services
