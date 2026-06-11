// src/components/ui/ServiceSection.tsx
import React from "react";
import type { Service } from "../../data/services";
import { ImageCarousel } from "./ImageCarousel";

interface ServiceSectionProps {
  service: Service;
  reverse?: boolean;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  service,
  reverse,
}) => {
  return (
    <section
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 py-12 px-6 md:px-15 lg:px-30`}
    >
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-md group h-125 md:h-160">
          {service.gallery ? (
            <ImageCarousel images={service.gallery} />
          ) : (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover shrink-0"
            />
          )}

          <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-200" />
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-5">
        <h2 className="text-3xl lg:text-5xl font-bold text-light uppercase tracking-wider">
          {service.title}
        </h2>
        <p className="text-medium-light lg:text-2xl leading-relaxed">
          {service.description_pt}
        </p>
      </div>
    </section>
  );
};
