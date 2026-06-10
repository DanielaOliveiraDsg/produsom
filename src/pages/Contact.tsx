// src/pages/Contact.tsx
import React, { useState } from "react";
import { Input, TextArea } from "@/components/ui/FormField";
import { SocialIcon } from "@/components/ui/Socials";
import ProdusomIcon from "@/assets/images/logos/produsom-LOGO-simbolo-original.png";
import { ModalSuccessMsg } from "@/components/ui/ModalSuccessMsg";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  // State to control the Success Modal visibility
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // Simulate API handling
    console.log("Dados enviados:", formData);

    setShowModal(true);

    setFormData({
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setShowModal(false), 5000);
  };

  return (
    <main className="min-h-screen pt-24 pb-12 px-6 bg-dark-prussian">
      <div className="max-w-3xl mx-auto">
        {/* Success Modal Overlay */}
        <ModalSuccessMsg
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={"Enviado!"}
          message={"Mensagem enviada com sucesso!"}
        />
        {/* Header Section as per Blueprint */}
        <header className="text-center  my-12">
          <h1 className="text-3xl font-bold text-light uppercase tracking-tight">
            Entre em Contato
          </h1>
          <p className="mt-3 text-medium-light">
            Solicite um orçamento para iluminação e sonorização.
          </p>
        </header>

        {/* Main Form Container[cite: 1, 3] */}
        <section className="bg-light p-8 rounded-xl shadow-da\ shadow-2xl backdrop-blur-sm">
          <img
            src={ProdusomIcon}
            alt="Produsom"
            className="w-auto h-18 lg:h-24 mx-auto mb-6"
          />
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Seu e-mail"
              id="email"
              type="email"
              placeholder="exemplo@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Assunto"
              id="subject"
              placeholder="Ex: Evento Corporativo / Casamento"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <TextArea
              label="Mensagem"
              id="message"
              rows={5}
              placeholder="Descreva as necessidades do seu evento..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            {/* Brand Button: Citrine on Prussian Blue */}
            <button
              type="submit"
              className="w-full py-4 bg-prussian text-light font-bold rounded-md hover:brightness-110 transition-all duration-200 uppercase tracking-widest"
            >
              Enviar Mensagem
            </button>
          </form>

          {/* Reusable Social Component */}

          <div className="flex space-x-14 justify-center pt-4">
            <SocialIcon
              href={
                "https://www.instagram.com/produsom_someluz?igsh=bmVtdGdwMTc4Y2Z2"
              }
              iconSrc={"src/assets/images/icons/icon-instagram-black.svg"}
              label={"Instagram"}
            />
            <SocialIcon
              href={"https://wa.me/5551999783245?text=Produsom"}
              iconSrc={"src/assets/images/icons/whatsapp.svg"}
              label={"WhatsApp"}
            />
          </div>
        </section>
      </div>
    </main>
  );
};
