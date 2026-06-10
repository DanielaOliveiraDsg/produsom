// src/pages/Services.tsx
import React from 'react';
import { services } from '../data/services';
import { Button } from '@/components/ui/Button';
import { ServiceSection } from '@/components/ui/ServiceSection';

export const Services: React.FC = () => {
  return (
    <main className="bg-dark-prussian min-h-screen pt-20"> {/* pt-20 to clear fixed header */}
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-50">Nossos Serviços</h1>
        <div className="w-20 h-1 bg-citrine mx-auto mt-4" /> 
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

