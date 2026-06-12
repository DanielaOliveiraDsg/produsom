// src/components/ui/Lightbox.tsx
import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  title?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  initialIndex,
  onClose,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (images.length > 1) {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);

  }, [images.length, onClose, handleNext, handlePrev]);

  return (
    <div
      className="fixed inset-0 z-50 bg-dark-prussian flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >

      <button
        className="absolute top-6 right-6 text-slate-50 hover:text-citrine p-2 cursor-pointer z-50 transition-colors"
        onClick={onClose}
        aria-label="Fechar galeria"
      >
        <X size={32} />
      </button>


      <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center select-none">
        <img
          src={images[currentIndex]}
          alt={title ? `${title} - Foto ${currentIndex + 1}` : `Foto ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {title && (
          <div className="absolute -top-8 left-0 text-slate-400 text-sm font-light tracking-wide hidden sm:block">
            {title}
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900 text-light p-3 rounded-full cursor-pointer transition-all hover:scale-105"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900 text-light p-3 rounded-full cursor-pointer transition-all hover:scale-105"
            >
              <ChevronRight size={28} />
            </button>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-400 text-xs font-light tracking-widest">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};