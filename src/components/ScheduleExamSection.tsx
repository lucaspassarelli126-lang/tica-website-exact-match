import { useState } from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ScheduleExamSection() {
  const [formData, setFormData] = useState({
    name: "",
    period: ""
  });

  const periods = ["Manhã", "Tarde"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setFormData({ ...formData, [e.target.id]: value });
  };

  const handlePeriodSelect = (period: string) => {
    setFormData({ ...formData, period });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, period } = formData;
    
    if (!period) {
      alert("Por favor, selecione um período.");
      return;
    }

    const message = `Olá, meu nome é ${name}. Gostaria de agendar um exame de vista. Prefiro o período da ${period}.`;
    const numero = "5519971528684"; // número da ótica
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-white font-sans py-16 md:py-32 lg:py-48" id="agendamento">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center mb-10 px-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[11px] md:text-[13px] tracking-[2px] text-[#999] mb-6 block uppercase font-semibold font-sans"
            >
              Atendimento Premium
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[36px] md:text-[56px] font-bold mb-6 leading-[1.1] text-zinc-900 font-sans tracking-tight max-w-4xl"
            >
              Experiência visual de alto nível.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#666] max-w-[500px] text-base md:text-xl leading-relaxed mx-auto font-sans"
            >
              Agende seu exame com especialistas e receba atendimento personalizado em um ambiente exclusivo.
            </motion.p>
          </div>
        }
      >
        <div className="h-full w-full bg-white p-6 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full flex flex-col gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2">Agendar exame</h3>
              <p className="text-sm text-zinc-500">Selecione o melhor horário para você.</p>
            </div>

            <div className="flex gap-2.5">
              {periods.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePeriodSelect(p)}
                  className={`flex-1 py-3.5 rounded-[14px] border transition-all duration-300 font-medium text-sm md:text-base ${
                    formData.period === p 
                      ? "bg-accent text-white border-accent" 
                      : "bg-white border-[#e5e5e5] text-zinc-600 hover:bg-accent hover:text-white hover:border-accent"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo" 
                className="p-4 rounded-[14px] border border-[#e5e5e5] outline-none w-full bg-[#fcfcfc] text-zinc-900 focus:border-black transition-colors"
              />

              <button 
                type="submit" 
                className="mt-2 p-[18px] rounded-[16px] border-none bg-accent text-white text-[15px] font-medium cursor-pointer transition-all duration-300 hover:bg-accent/90 w-full shadow-xl shadow-accent/10 active:scale-[0.98]"
              >
                Continuar no WhatsApp
              </button>
              
              <p className="text-[11px] text-zinc-400 text-center mt-2">
                Ao clicar em continuar, você será redirecionado para o nosso WhatsApp oficial.
              </p>
            </form>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
