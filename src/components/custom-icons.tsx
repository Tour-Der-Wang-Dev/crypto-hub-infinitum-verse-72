
import React, { forwardRef } from 'react';
import { LucideIcon, LucideProps } from 'lucide-react';

export const Marketplace: LucideIcon = forwardRef<SVGSVGElement, LucideProps>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M3 5h12v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Z" />
      <path d="M6 9v9" />
      <path d="M18 9v9" />
      <path d="M4 5h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    </svg>
  );
});

export const Freelance: LucideIcon = forwardRef<SVGSVGElement, LucideProps>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="8" height="8" x="8" y="2" rx="2" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M10 18v-1a2 2 0 1 1 4 0v1" />
      <path d="M2 12h20" />
    </svg>
  );
});

export const Travel: LucideIcon = forwardRef<SVGSVGElement, LucideProps>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 17h1m16 0h1M5.6 11h12.8l-.4-4H6l-.4 4Z" />
      <path d="M6 17h12" />
      <path d="M12 17v-6" />
      <path d="M6 11v6" />
      <path d="M18 11v6" />
      <path d="M5.5 11 6 7M18.5 11l-.5-4" />
    </svg>
  );
});

// Add a proper display name for all icons
Marketplace.displayName = 'Marketplace';
Freelance.displayName = 'Freelance';
Travel.displayName = 'Travel';

// Export Map icon
export const Map: LucideIcon = forwardRef<SVGSVGElement, LucideProps>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
});
Map.displayName = 'Map';
