import { Clock, MapPin, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Localizacao = () => {
  return (
    <>
      <section className="bg-soft py-20 border-b border-zinc-100">
        <div className="container-luxe text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Onde nos encontrar</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Nossas Unidades</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Localizações estratégicas em Sumaré e Paulínia para melhor atendê-lo.
          </p>
        </div>
      </section>

      <section className="container-luxe py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Unit 1: Sumaré */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-10 bg-white border border-zinc-100 hover:border-accent/30 transition-all duration-500 shadow-xl shadow-zinc-200/20"
          >
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <MapPin className="h-7 w-7 text-accent" />
                </div>
                <h2 className="text-3xl font-serif mb-2">Unidade Sumaré</h2>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-black">Bairro Matão</p>
              </div>

              <div className="space-y-6 flex-1">
                <div className="flex gap-4 items-start">
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="font-bold text-foreground">Endereço:</p>
                    <p>Avenida Emílio Bosco, 551</p>
                    <p>Sumaré, SP</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="font-bold text-foreground">Horário:</p>
                    <p>Seg a Sex: 09:00 - 18:00</p>
                    <p>Sáb: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/5519971528684" 
                target="_blank" 
                className="mt-10 flex items-center justify-center gap-3 bg-zinc-950 text-white py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-accent transition-all"
              >
                <svg viewBox="0 0 24 24" fill="#25D366" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                FALAR COM SUMARÉ
              </a>
            </div>
          </motion.div>

          {/* Unit 2: Paulínia */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-10 bg-white border border-zinc-100 hover:border-accent/30 transition-all duration-500 shadow-xl shadow-zinc-200/20"
          >
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <MapPin className="h-7 w-7 text-accent" />
                </div>
                <h2 className="text-3xl font-serif mb-2">Unidade Paulínia</h2>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-black">Vila Bressani</p>
              </div>

              <div className="space-y-6 flex-1">
                <div className="flex gap-4 items-start">
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="font-bold text-foreground">Endereço:</p>
                    <p>Avenida Brasília, 1035</p>
                    <p>Paulínia, SP</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="font-bold text-foreground">Horário:</p>
                    <p>Seg a Sex: 09:00 - 18:00</p>
                    <p>Sáb: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/5519971528684" 
                target="_blank" 
                className="mt-10 flex items-center justify-center gap-3 bg-zinc-950 text-white py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-accent transition-all"
              >
                <svg viewBox="0 0 24 24" fill="#25D366" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                FALAR COM PAULÍNIA
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Central Contact Section */}
      <section className="bg-white text-zinc-900 py-20 border-t border-zinc-100">
        <div className="container-luxe text-center">
          <h2 className="text-4xl font-serif mb-8 italic">Alguma dúvida?</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            Estamos prontos para atender você em qualquer uma de nossas unidades. 
            Entre em contato pelo nosso WhatsApp centralizado.
          </p>
          <a 
            href="https://wa.me/5519971528684" 
            target="_blank" 
            className="inline-flex items-center gap-4 bg-accent hover:bg-accent/90 text-white px-12 py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all shadow-2xl shadow-accent/20"
          >
            <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            (19) 97152-8684
          </a>
        </div>
      </section>

    </>
  );
};

export default Localizacao;
