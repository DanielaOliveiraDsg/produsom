// src/pages/PastEvents.tsx
import React, { useState } from "react";
import { pastEvents } from "../data/events";
import { EventFilter } from "../components/ui/EventFilter";
import type { FilterCategory } from "../components/ui/EventFilter";
import { EventCard } from "../components/ui/EventCard";

export const PastEvents: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("todos");

  const filteredEvents = activeFilter === "todos"
    ? pastEvents
    : pastEvents.filter((event) => event.category === activeFilter);

  return (
    <main className="min-h-screen pt-28 lg:pt-36 text-light">
      {/* Structural Header Treatment matching standard layouts */}
      <header className="container mx-auto px-6 py-12 text-center space-y-4">
        <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-[0.2em] text-light">
          Eventos Realizados
        </h1>
        <div className="w-24 h-1 bg-citrine mx-auto rounded-full" />
        <p className="text-medium-light max-w-xl mx-auto font-light lg:text-base pt-2">
          Explore uma seleção de grandes momentos estruturados por nossa equipe técnica. Inspirações reais com som, luz e precisão.
        </p>
      </header>

      {/* Render Component Filter Buttons */}
      <EventFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Portfolio Structural Content Block */}
      <section className="container mx-auto px-6 pb-24">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20 text-slate-400 font-light">
            Nenhum evento cadastrado nesta categoria por enquanto.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default PastEvents;