
import React from 'react';

interface InfinityLogoProps {
  className?: string;
}

const InfinityLogo: React.FC<InfinityLogoProps> = ({ className = "h-10 w-10" }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" className="animate-float">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AC0D" />
            <stop offset="50%" stopColor="#F5B041" />
            <stop offset="100%" stopColor="#D4AC0D" />
          </linearGradient>
        </defs>
        {/* Infinity symbol */}
        <path
          d="M86,50c0,9.94-8.06,18-18,18c-4.97,0-9.47-2.02-12.73-5.27C52.02,59.47,50,54.97,50,50
            s2.02-9.47,5.27-12.73C58.53,34.02,63.03,32,68,32C77.94,32,86,40.06,86,50z M14,50c0-9.94,8.06-18,18-18
            c4.97,0,9.47,2.02,12.73,5.27C47.98,40.53,50,45.03,50,50s-2.02,9.47-5.27,12.73C41.47,65.98,36.97,68,32,68
            C22.06,68,14,59.94,14,50z"
          fill="url(#goldGradient)"
          className="drop-shadow-[0_0_8px_rgba(245,176,65,0.8)]"
        />
        {/* Earth in background */}
        <circle cx="50" cy="50" r="25" fill="#141E33" opacity="0.7" />
        {/* Continents */}
        <path
          d="M40,35 C43,32 48,31 53,34 C58,37 60,45 58,50 C56,55 50,57 45,54 C40,51 37,38 40,35 Z
            M60,45 C62,47 64,52 63,55 C62,58 58,60 55,58 C52,56 54,52 55,50 C56,48 58,43 60,45 Z"
          fill="#1E3A8A"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default InfinityLogo;
