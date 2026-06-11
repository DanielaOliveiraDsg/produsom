// src/data/events.ts
import Event1 from "@/assets/images/photos/via-sacra-25-1.jpeg";
import Event2 from "@/assets/images/photos/via-sacra-25-2.jpeg";
import Event3 from "@/assets/images/photos/via-sacra-25-3.jpeg";
import Event4 from "@/assets/images/photos/via-sacra-25-4.jpeg";
import Event5 from "@/assets/images/photos/via-sacra-25-5.jpeg";
import Event6 from "@/assets/images/photos/via-sacra-25-6.jpeg";
import Event7 from "@/assets/images/photos/via-sacra-25-7.jpeg";
import Event8 from "@/assets/images/photos/via-sacra-25-8.jpeg";
import Event9 from "@/assets/images/photos/via-sacra-25-9.jpeg";

import Event10 from "@/assets/images/photos/saga-garibaldi-2024-1.jpeg";
import Event11 from "@/assets/images/photos/saga-garibaldi-2024-2.jpeg";
import Event12 from "@/assets/images/photos/saga-garibaldi-2024-3.jpeg";
import Event13 from "@/assets/images/photos/saga-garibaldi-2024-4.jpeg";
import Event17 from "@/assets/images/photos/saga-garibaldi-2024-5.jpeg";


import Event14 from "@/assets/images/photos/enart-2024-1.jpeg";
import Event15 from "@/assets/images/photos/enart-2024-2.jpeg";
import Event16 from "@/assets/images/photos/enart-2024-3.jpeg";

import Event20 from "@/assets/images/photos/festa3.jpeg";
import Event21 from "@/assets/images/photos/festa4.jpeg";
import Event22 from "@/assets/images/photos/festa5.jpeg";
import Event23 from "@/assets/images/photos/festa6.jpeg";
import Event24 from "@/assets/images/photos/festa7.jpeg";
import Event25 from "@/assets/images/photos/festa8.jpeg";
import Event26 from "@/assets/images/photos/festa9.jpeg";

import Event27 from "@/assets/images/photos/festivale-1.jpeg";
import Event28 from "@/assets/images/photos/festivale-2.jpeg";
import Event29 from "@/assets/images/photos/festivale-3.jpeg";

export interface PastEvent {
  id: string;
  title: string;
  location: string;
  category: "eventos" | "teatro" | "festa";
  image: string;
  gallery?: string[];
}

export const pastEvents: PastEvent[] = [
  {
    id: "1",
    title: "Via Sacra 2025",
    location: "Osório - RS",
    category: "eventos",
    image: Event1,
    gallery: [Event1, Event2,Event3, Event4, Event5, Event6, Event7,Event8, Event9]
  },
  {
    id: "2",
    title: "Saga de Garibaldi 2024",
    location: "Capivari - RS",
    category: "eventos",
    image: Event10,
    gallery: [Event10, Event11, Event12, Event13, Event17]
  },
  {
    id: "3",
    title: "Festas - Casamentos, Formaturas, Aniversários",
    location: "Região Sul",
    category: "festa",
    image: Event26,
    gallery: [Event22, Event20, Event21,  Event23, Event24, Event25, Event26]
  },
  {
    id: "4",
    title: "Enart 2024",
    location: "Capão da Canoa - RS",
    category: "eventos",
    image: Event14,
    gallery: [Event14, Event15, Event16]
  },
  {
    id: "5",
    title: "XXXI Festivale",
    location: "Rolante - RS",
    category: "teatro",
    image: Event27,
    gallery: [Event27, Event28, Event29]
  },

];