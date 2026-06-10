import { Link } from "react-router-dom";
import React from "react";

interface ServiceCardProps {
  title: string;
  image: string;
  link: string;
  overlayClass?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  image,
  link,
  overlayClass = "bg-dark-prussian/35",
}) => {
  return (
    <Link
      to={link}
      className="group relative block w-full aspect-3/4 min-h-100 overflow-hidden rounded-md"
    >
      {/* bg image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* overlay */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-300 ${overlayClass} group-hover:opacity-0`}
      ></div>

      {/* content */}
      <div className="absolute inset-0 z-20 flex items-end p-6 md:p-8 split:justify-center">
        <h3 className="text-3xl lg:text-[34px] font-light uppercase tracking-[o.2em] text-light transition-colors duration-300 group-hover:text-citrine">
          {title}
        </h3>
      </div>
    </Link>
  );
};
