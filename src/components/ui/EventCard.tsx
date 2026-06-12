// src/components/ui/EventCard.tsx
import React, { useState } from "react";
import type { PastEvent } from "../../data/events";
import { Lightbox } from "./Lightbox";

interface EventCardProps {
  event: PastEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);


  const galleryPhotos =
    event.gallery && event.gallery.length > 0 ? event.gallery : [event.image];

  return (
    <>
      {/* Clickable Grid Card */}
      <div
        onClick={() => setIsLightboxOpen(true)}
        className="group relative h-80 w-full overflow-hidden rounded-md bg-slate-950 shadow-xl border border-slate-900 cursor-pointer"
      >
        {/* Event Cover Photo */}
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        />

        {/* Dark Shadow Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 lg:group-hover:opacity-95 transition-opacity duration-200 z-10" />

        {/* Textos Informativos */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 transform lg:translate-y-4  lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-200 ease-out">
          <span className="text-xs font-semibold text-citrine uppercase tracking-widest mb-1.5">
            {event.category}
          </span>
          <h3 className="text-xl font-medium text-slate-50 uppercase tracking-wide leading-snug">
            {event.title}
          </h3>
          <p className="text-sm text-slate-400 font-light tracking-wide mt-1">
            {event.location}
          </p>
        </div>
      </div>
      {/* Renderização condicional do Lightbox limpa e declarativa */}
      {isLightboxOpen && (
        <Lightbox
          images={galleryPhotos}
          initialIndex={0}
          onClose={() => setIsLightboxOpen(false)}
          title={event.title}
        />
      )}
    </>
  );
};
