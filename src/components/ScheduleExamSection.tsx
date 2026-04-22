import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Phone, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function ScheduleExamSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, date, time, message } = formData;
    
    const text = `Olá! Gostaria de agendar um exame de vista.
*Nome:* ${name}
*Telefone:* ${phone}
*Data de preferência:* ${date}
*Horário:* ${time}
${message ? `*Observação:* ${message}` : ""}`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "5511999999999"; // Placeholder number
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950/50" id="agendamento">
      <div className="container-luxe max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Atendimento Clínico</p>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Agende seu Exame de Vista</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Cuide da sua saúde visual com nossa equipe de especialistas. Oferecemos tecnologia de ponta para um diagnóstico preciso.
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Equipe Especializada</h4>
                  <p className="text-sm text-muted-foreground">Profissionais altamente capacitados.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Equipamentos Modernos</h4>
                  <p className="text-sm text-muted-foreground">Tecnologia avançada para exames.</p>
                </div>
              </div>
            </div>


          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-border/50"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-serif mb-2">Formulário de Agendamento</h3>
              <p className="text-sm text-muted-foreground">Preencha os dados e confirme pelo WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="group flex items-center bg-zinc-50 dark:bg-zinc-950 border border-border/60 rounded-xl px-4 py-3 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
                <User className="w-5 h-5 text-muted-foreground mr-3" />
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome completo" 
                  className="bg-transparent w-full text-foreground placeholder:text-muted-foreground/70 outline-none" 
                />
              </div>

              <div className="group flex items-center bg-zinc-50 dark:bg-zinc-950 border border-border/60 rounded-xl px-4 py-3 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
                <Phone className="w-5 h-5 text-muted-foreground mr-3" />
                <input 
                  type="tel" 
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp / Celular" 
                  className="bg-transparent w-full text-foreground placeholder:text-muted-foreground/70 outline-none" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="group flex items-center bg-zinc-50 dark:bg-zinc-950 border border-border/60 rounded-xl px-4 py-3 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
                  <Calendar className="w-5 h-5 text-muted-foreground mr-3" />
                  <input 
                    type="date" 
                    id="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-transparent w-full text-foreground outline-none [color-scheme:light] dark:[color-scheme:dark]" 
                  />
                </div>
                <div className="group flex items-center bg-zinc-50 dark:bg-zinc-950 border border-border/60 rounded-xl px-4 py-3 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
                  <Clock className="w-5 h-5 text-muted-foreground mr-3" />
                  <select 
                    id="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="bg-transparent w-full text-foreground outline-none"
                  >
                    <option value="" disabled className="text-muted-foreground">Horário</option>
                    <option value="Manhã (09:00 - 12:00)">Manhã</option>
                    <option value="Tarde (13:00 - 18:00)">Tarde</option>
                  </select>
                </div>
              </div>

              <div className="group flex bg-zinc-50 dark:bg-zinc-950 border border-border/60 rounded-xl px-4 py-3 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
                <MessageSquare className="w-5 h-5 text-muted-foreground mr-3 mt-1" />
                <textarea 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tem alguma dúvida ou observação? (Opcional)" 
                  rows={3}
                  className="bg-transparent w-full text-foreground placeholder:text-muted-foreground/70 outline-none resize-none" 
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-[#25D366] hover:bg-[#1ebd5c] text-white mt-2 flex items-center gap-2 group h-14 rounded-xl text-base"
              >
                Solicitar Agendamento
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
