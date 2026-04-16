import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "5511999999999";
  const msg = encodeURIComponent("Olá! Vim pelo site da Ótica Anna Santana.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
