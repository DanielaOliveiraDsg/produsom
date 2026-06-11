// src/components/ui/SocialIcon.tsx
import React from 'react';


export interface SocialIconProps {
  href: string;
  iconSrc: string;
  label: string;
  showLabel?: boolean;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  iconSrc,
  label,
  showLabel = true
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center group"
    aria-label={label}
  >
    <div className="p-3 rounded-full transition-transform duration-300 group-hover:scale-110 ease-in-out">
      <img
        src={iconSrc}
        alt=""
        className="w-7 h-7 opacity-50 group-hover:opacity-70 transition-all duration-200"
      />
    </div>
    {showLabel && (
      <span className="mt-1 text-[10px] font-bold text-black opacity-50 group-hover:opacity-70 uppercase tracking-widest transition-all duration-200">
        {label}
      </span>
    )}
  </a>
);
