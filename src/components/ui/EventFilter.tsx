// src/components/ui/EventFilter.tsx
import React from "react";

export type FilterCategory = "todos" | "eventos" | "teatro" | "festa";

interface EventFilterProps {
  activeFilter: FilterCategory;
  onFilterChange: (category: FilterCategory) => void;
}

export const EventFilter: React.FC<EventFilterProps> = ({ activeFilter, onFilterChange }) => {
  const filterButtons: { label: string; value: FilterCategory }[] = [
    { label: "Todos", value: "todos" },
    { label: "Eventos", value: "eventos" },
    { label: "Festas", value: "festa" },
    { label: "Teatro", value: "teatro" },
  ];

  return (
    <div className="container mx-auto px-6 flex flex-wrap justify-center gap-3 mb-12">
      {filterButtons.map((btn) => (
        <button
          key={btn.value}
          onClick={() => onFilterChange(btn.value)}
          className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold border cursor-pointer transition-all duration-200 ${
            activeFilter === btn.value
              ? "bg-citrine border-citrine text-slate-950 shadow-md scale-105"
              : "border-slate-800 text-slate-400 hover:text-slate-50 hover:border-citrine"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};