
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { Map, Marketplace, Freelance, Travel } from '@/components/custom-icons';
import { Link } from 'react-router-dom';
import InfinityLogo from '@/components/InfinityLogo';
import { useAuth } from '@/contexts/AuthContext';
import { AuthModal } from '@/components/auth/AuthModal';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleAuthClick = () => {
    if (user) {
      // Dropdown will handle this case
    } else {
      setAuthModalOpen(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-infi-dark/90 backdrop-blur-md border-b border-infi-gold/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <InfinityLogo className="h-8 w-8" />
          <span className="text-xl font-bold text-gradient">InfiWorld</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/map" className="px-3 py-2 rounded-md text-sm flex items-center gap-1.5 hover:bg-infi-blue/30 transition-colors">
            <Map size={16} /> Map
          </Link>
          <Link to="/marketplace" className="px-3 py-2 rounded-md text-sm flex items-center gap-1.5 hover:bg-infi-blue/30 transition-colors">
            <Marketplace size={16} /> Marketplace
          </Link>
          <Link to="/freelance" className="px-3 py-2 rounded-md text-sm flex items-center gap-1.5 hover:bg-infi-blue/30 transition-colors">
            <Freelance size={16} /> Freelance
          </Link>
          <Link to="/travel" className="px-3 py-2 rounded-md text-sm flex items-center gap-1.5 hover:bg-infi-blue/30 transition-colors">
            <Travel size={16} /> Travel
          </Link>
        </div>

        {/* Connect Wallet / Auth Button */}
        {!user ? (
          <Button 
            className="gold-gradient animate-pulse-gold hidden md:flex"
            onClick={handleAuthClick}
          >
            Connect Wallet
          </Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-4 flex items-center gap-2 border-infi-gold/40">
                <User size={16} />
                <span className="truncate max-w-[100px]">
                  {user.email?.split('@')[0] || 'Account'}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/wallet">Wallet</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/verification">Verification</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signOut}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-infi-blue/30 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-infi-dark-blue/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/map"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Map size={18} /> Map
            </Link>
            <Link
              to="/marketplace"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Marketplace size={18} /> Marketplace
            </Link>
            <Link
              to="/freelance"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Freelance size={18} /> Freelance
            </Link>
            <Link
              to="/travel"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Travel size={18} /> Travel
            </Link>
            <div className="pt-2">
              {!user ? (
                <Button 
                  className="gold-gradient animate-pulse-gold w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthModalOpen(true);
                  }}
                >
                  Connect Wallet
                </Button>
              ) : (
                <div className="space-y-2">
                  <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-infi-gold/50">
                      Profile
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full border-infi-gold/50"
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Auth Modal */}
      <AuthModal 
        open={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
