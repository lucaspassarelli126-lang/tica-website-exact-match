import { Circle, Eye, Shield, Sparkles, User, Wrench } from "lucide-react";
import { services } from "@/data/site";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Circle;
            return (
              <div key={s.title} className="border border-border p-8 hover:border-accent transition-colors">
                <Icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-2xl font-serif mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
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
