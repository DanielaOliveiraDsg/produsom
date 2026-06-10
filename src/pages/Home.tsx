// src/pages/Home.tsx
import React from 'react';
import TeatroBg from '@/assets/images/photos/teatro1.jpg';
import { Hero } from '@/components/sections/Hero';
import { ServicesGallery } from '@/components/sections/ServicesGallery';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero
        title={<>Luz . Som <br /> <span className="font-medium text-citrine">Experiência</span></>}
        subtitle="Soluções completas de iluminação e sonorização profissional para transformar o seu evento em um momento inesquecível."
        backgroundImage={TeatroBg}
        ctaText="Orçamento Online"
        ctaLink="/contato"
        overlayClass='bg-dark-prussian/65'
      />
      <ServicesGallery />
    </main>
  );
};

