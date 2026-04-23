import { MapPin, Phone, MessageCircle, Clock, CheckCircle2, History, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Sobre = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-soft py-12 border-b border-zinc-100">
        <div className="container-luxe text-center max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.3em] text-accent font-black mb-2"
          >
            Nossa História e Compromisso
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif mb-4 leading-tight"
          >
            Óticas Theo Tavares
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Sua parceira de confiança na saúde visual há 7 anos! Com unidades em Sumaré e Paulínia, oferecemos qualidade, profissionalismo e atendimento excepcional.
          </motion.p>
        </div>
      </section>

      {/* History & Vision */}
      <section className="container-luxe py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif mb-4 flex items-center gap-3">
              <History className="text-accent h-6 w-6" />
              Nossa História
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A Óticas Theo Tavares nasceu da paixão em cuidar da visão das pessoas. Durante 7 anos, construímos relacionamentos sólidos através de um atendimento personalizado e produtos de excelente qualidade.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nossa trajetória é marcada pelo compromisso com a inovação e a satisfação de quem nos escolhe. Cada cliente que entra em nossas lojas é tratado com respeito.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-50 p-8 rounded-xl border border-zinc-100"
          >
            <h2 className="text-2xl font-serif mb-4 flex items-center gap-3">
              <Target className="text-accent h-6 w-6" />
              Nossa Visão
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "Ser a óptica de referência em Sumaré e Paulínia, conhecida pela qualidade dos produtos, excelência no atendimento e compromisso genuíno com a saúde visual."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="bg-accent text-white py-12">
        <div className="container-luxe">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif mb-3">Nossos Serviços</h2>
            <div className="w-16 h-1 bg-white/30 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Armações a Preço Único - R$ 99,90",
              "Venda de Óculos de Grau",
              "Óculos de Sol com Proteção",
              "Lentes de Contato de Alta Qualidade",
              "Atendimento Especializado",
              "Consultoria de Estilo e Visagismo"
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-white/10 p-4 rounded-lg border border-white/20"
              >
                <CheckCircle2 className="h-5 w-5 text-white shrink-0" />
                <span className="font-bold tracking-wide uppercase text-[10px]">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-luxe py-16">
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-black mb-2">Diferenciais</p>
          <h2 className="text-3xl font-serif">Por que nos escolher?</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "7 Anos", desc: "Experiência e credibilidade.", icon: History },
            { title: "Preço Único", desc: "Armações por R$ 99,90.", icon: Users },
            { title: "Personalizado", desc: "Atendimento focado em você.", icon: Users },
            { title: "2 Unidades", desc: "Sumaré e Paulínia.", icon: MapPin },
            { title: "Horários", desc: "Conveniência para você.", icon: Clock },
          ].map((item, i) => (
            <div key={i} className="group text-center">
              <item.icon className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-sm font-bold uppercase tracking-tight mb-2">{item.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations & Contact */}
      <section className="bg-soft py-12 border-t border-zinc-100">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Locations */}
            <div className="grid gap-4">
              <h2 className="text-2xl font-serif mb-2">Nossas Lojas</h2>
              
              <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-zinc-100">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-tight mb-1">Sumaré</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Avenida Emílio Bosco, 551 - Matão, Sumaré, SP
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-zinc-100">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-tight mb-1">Paulínia</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Avenida Brasília, 1035 - Vila Bressani, Paulínia, SP
                  </p>
                </div>
              </div>
            </div>

            {/* Hours & Contact */}
            <div className="bg-accent text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-serif mb-6">Atendimento</h2>
              
              <div className="grid gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-white/70">
                    <Clock className="h-4 w-4" />
                    <h4 className="uppercase tracking-[0.2em] text-[9px] font-black">Horários</h4>
                  </div>
                  <ul className="space-y-2 text-xs text-white/80">
                    <li className="flex justify-between border-b border-white/10 pb-1">
                      <span>Seg a Sex</span>
                      <span className="text-white font-bold">09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-1">
                      <span>Sábado</span>
                      <span className="text-white font-bold">09:00 - 13:00</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a 
                    href="https://wa.me/5519971528684" 
                    target="_blank" 
                    className="flex-1 flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all border border-white/20"
                  >
                    <svg viewBox="0 0 24 24" fill="#25D366" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span className="text-xs font-bold text-white">(19) 97152-8684</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-12 uppercase tracking-widest text-[10px] font-black shadow-xl"
              onClick={() => window.open('https://wa.me/5519971528684', '_blank')}
            >
              AGENDAR VISITA
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
