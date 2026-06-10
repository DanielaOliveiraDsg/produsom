import { services } from "@/data/services";
import type React from "react";
import { ServiceCard } from "../ui/ServiceCard";

export const ServicesGallery: React.FC = () => {
  return (
    <section className="bg-dark-prussian py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.3em] text-light">
            Nossos <span className="font-semibold">Serviços</span>
          </h2>
          <button className="px-8 py-3 border border-light text-light uppercase tracking-widest text-xs font-bold hover:bg-light hover:text-dark-prussian transition-all duration-300 rounded-md">
            Ver Todos
          </button>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 split:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
