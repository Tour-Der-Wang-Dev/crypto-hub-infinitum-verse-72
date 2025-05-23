
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initWebVitals } from "@/utils/webVitalsReporter";
import { AuthProvider } from "@/contexts/AuthContext";
import SeoHelmet from "./components/SEO/SeoHelmet";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MapPage from "./pages/MapPage";
import MarketplacePage from "./pages/MarketplacePage";
import FreelancePage from "./pages/FreelancePage";
import TravelPage from "./pages/TravelPage";
import VerificationPage from "./pages/VerificationPage";
import ProfilePage from "./pages/ProfilePage";
import WalletPage from "./pages/WalletPage";

const queryClient = new QueryClient();

// JSON-LD Schema for better SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "InfiWorld",
  "url": "https://infiworld.com",
  "logo": "https://infiworld.com/logo.png",
  "sameAs": [
    "https://twitter.com/infiworld",
    "https://facebook.com/infiworld",
    "https://linkedin.com/company/infiworld"
  ],
  "description": "The ultimate platform integrating cryptocurrency payments into marketplace, freelance services and travel reservations"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "InfiWorld Crypto Hub",
  "url": "https://infiworld.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://infiworld.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const App = () => {
  // Initialize web vitals tracking
  useEffect(() => {
    initWebVitals();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <SeoHelmet schemas={[organizationSchema, websiteSchema]} />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/freelance" element={<FreelancePage />} />
              <Route path="/travel" element={<TravelPage />} />
              <Route path="/verification" element={<VerificationPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/wallet" element={<WalletPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
