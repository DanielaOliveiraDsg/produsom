import { Link, useLocation } from "react-router-dom";
import type React from "react";
import simbol from "@/assets/images/logos/produsom-LOGO-simbolo-amarelo-branco.png"
import { SocialIcon } from "../ui/Socials";
import { MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-y-2 text-medium-light group cursor-default">
              <MapPin size={20} className="mr-2 text-medium-light shrink-0" />
              <span className="text-sm leading-relaxed tracking-wide">
                Rua Arthur Bauer, 302
                <br />
                Rolante - RS
              </span>
            </div>
          </div>

          <div className="flex justify-center order-first md:order-0">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={simbol}
                alt="Produsom"
                className="h-16 lg:h-20 w-auto"
              />
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6">
              <SocialIcon href={"https://www.instagram.com/produsom_someluz?igsh=bmVtdGdwMTc4Y2Z2"} iconSrc={"src/assets/images/icons/icon-instagram.svg"} label={"Instagram"} />
              <SocialIcon href={"https://wa.me/5551999783245?text=Produsom"} iconSrc={"src/assets/images/icons/icon-whatsapp.svg"} label={"WhatsApp"} />
              {/* <a
                href="https://www.instagram.com/produsom_someluz?igsh=bmVtdGdwMTc4Y2Z2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light transition-transform duration-300 hover:scale-110"
              >
                <img
                src="src/assets/images/icons/icon-instagram.svg"
                alt="Instagram"
                className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/5551999783245?text=Produsom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light transition-transform duration-300 hover:scale-110"
              >
                <MessageCircle size={24} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-light0">
            &copy; {currentYear} Produsom. Todos os direitos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-light0">
            Design & Dev by Daniela Oliveira
          </p>
        </div>
      </div>
    </footer>
  );
};
