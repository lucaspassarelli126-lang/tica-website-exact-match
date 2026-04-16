import { brands } from "@/data/site";

const Marcas = () => {
  return (
    <>
      <section className="bg-soft py-20">
        <div className="container-luxe text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Maisons</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Nossas marcas parceiras</h1>
          <p className="text-lg text-muted-foreground">
            Trabalhamos com as principais grifes internacionais, com garantia de originalidade e procedência.
          </p>
        </div>
      </section>

      <section className="container-luxe py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((b) => (
            <div key={b.slug} className="border border-border p-8 text-center hover:border-accent transition-colors">
              <div className="h-32 flex items-center justify-center mb-6">
                <img src={b.img} alt={b.name} className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-serif mb-2">{b.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Marcas;
