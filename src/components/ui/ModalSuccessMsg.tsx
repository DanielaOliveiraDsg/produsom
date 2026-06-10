// src/components/ui/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const ModalSuccessMsg: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-dark-prussian/80 backdrop-blur-md transition-all duration-800">
      <div
        className="bg-light p-8 rounded-xl shadow-[0_0_15px_white] max-w-sm w-full text-center animate-in fade-in zoom-in duration-1200"
        role="dialog"
        aria-modal="true"
      >
        <div className="w-16 h-16 bg-green-700/15 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-green-700 text-3xl font-bold">✓</span>
        </div>

        <h2 className="text-dark-prussian text-xl font-bold mb-2 uppercase tracking-tight">
          {title}
        </h2>

        <p className="text-slate-600 mb-6">
          {message}
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 bg-dark-prussian text-light font-bold rounded-md hover:bg-prussian active:scale-[0.98] transition-all duration-200 uppercase tracking-widest text-sm"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};