import { Circle, Eye, Shield, Sparkles, User, Wrench } from "lucide-react";
import { services } from "@/data/site";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = { Eye, Sparkles, Wrench, Shield, User, Circle };

const Servicos = () => {
  return (
    <>
      <section className="bg-soft py-20">
        <div className="container-luxe text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">O que oferecemos</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Nossos serviços</h1>
          <p className="text-lg text-muted-foreground">
            Cuidado completo da consulta inicial à manutenção pós-venda.
          </p>
        </div>
      </section>

      <section className="container-luxe py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, idx) => {
            const Icon = iconMap[s.icon] ?? Circle;
            return (
              <motion.div 
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col p-10 bg-white border border-zinc-100 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5"
              >
                {/* Number Badge */}
                <div className="absolute top-8 right-8 text-4xl font-serif text-zinc-50 font-black group-hover:text-accent/10 transition-colors duration-500">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-zinc-50 flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors duration-500">
                    <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-2xl font-serif mb-4 tracking-tight">{s.title}</h3>
                  <div className="w-8 h-[2px] bg-accent mb-6 transform origin-left group-hover:w-16 transition-all duration-500" />
                  
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium opacity-80">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contato#agendamento">Agendar atendimento</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Servicos;
