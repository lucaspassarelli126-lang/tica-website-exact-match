import { Clock, MapPin, Phone } from "lucide-react";

const Localizacao = () => {
  return (
    <>
      <section className="bg-soft py-20">
        <div className="container-luxe text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Visite-nos</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Nossa loja</h1>
          <p className="text-lg text-muted-foreground">Conheça pessoalmente nossa curadoria. Será um prazer recebê-lo(a).</p>
        </div>
      </section>

      <section className="container-luxe py-16 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-serif mb-1">Endereço</h3>
              <p className="text-muted-foreground">Rua das Óticas, 123 — Centro<br />São Paulo — SP, 01000-000</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-serif mb-1">Telefones</h3>
              <p className="text-muted-foreground">(11) 99999-9999 (WhatsApp)<br />(11) 3333-3333</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-serif mb-1">Horário de funcionamento</h3>
              <p className="text-muted-foreground">
                Segunda a Sexta: 9h às 19h<br />
                Sábado: 9h às 14h<br />
                Domingo: fechado
              </p>
            </div>
          </div>
        </div>

        <div className="aspect-square lg:aspect-auto lg:min-h-[450px] overflow-hidden border border-border">
          <iframe
            title="Localização da Ótica Anna Santana"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
};

export default Localizacao;
