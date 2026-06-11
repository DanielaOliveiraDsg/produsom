// src/pages/Services.tsx
import React from 'react';
import { services } from '../data/services';
import { Button } from '@/components/ui/Button';
import { ServiceSection } from '@/components/ui/ServiceSection';

export const Services: React.FC = () => {
  return (
    <main className="bg-dark-prussian min-h-screen pt-28 lg:pt-36"> {/* pt-20 to clear fixed header */}
      <header className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-[0.2em] text-light mb-4">Nossos Serviços</h1>
        <div className="w-24 h-1 bg-citrine mx-auto mt-2 rounded-full" />
      </header>

      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          reverse={index % 2 !== 0}
        />
      ))}

      <section className="py-20 text-center bg-prussian-blue">
        <h3 className="text-2xl text-slate-50 mb-6">Pronto para elevar o nível do seu evento?</h3>
        <Button to='/contato'>
          Entre em contato
        </Button>
      </section>
    </main>
  );
};

