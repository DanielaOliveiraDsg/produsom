// src/components/ui/SocialIcon.tsx
import React from 'react';

/**
 * PROPS INTERFACES
 * Keeping these clear helps with TypeScript autocomplete
 */
export interface SocialIconProps {
  href: string;
  iconSrc: string;
  label: string;
  showLabel?: boolean;
}

export interface SocialConnectProps {
  title?: string;
  className?: string; // Allows for layout flexibility
}

/**
 * ATOMIC COMPONENT: SocialIcon
 * Handles the specific hover states and transitions from Style Guide[cite: 1]
 */
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

/**
 * COMPOSITE COMPONENT: SocialConnect
 * Handles the grouping logic for the Contact page
 */
export const SocialConnect: React.FC<SocialConnectProps> = ({
  title = "Siga nossas redes",
  className = ""
}) => {
  // Centralized data: if links change, you update once
  const socialLinks = [
    { label: 'WhatsApp', href: '#', icon: 'src/assets/images/icons/whatsapp.svg' },
    { label: 'Instagram', href: '#', icon: 'src/assets/images/icons/icon-instagram-black.svg' },
  ];

  return (
    <div className={`mt-12 pt-8 border-t border-medium-light text-center ${className}`}>
      <p className="text-medium text-xs uppercase tracking-widest mb-6">{title}</p>
      <div className="flex justify-center gap-10">
        {socialLinks.map((link) => (
          <SocialIcon
            key={link.label}
            href={link.href}
            iconSrc={link.icon}
            label={link.label}
          />
        ))}
      </div>
    </div>
  );
};