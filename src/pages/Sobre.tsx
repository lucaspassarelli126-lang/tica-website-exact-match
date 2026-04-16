const Sobre = () => {
  return (
    <>
      <section className="bg-soft py-20">
        <div className="container-luxe text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Nossa história</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Sobre a Ótica Anna Santana</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Há mais de duas décadas levando excelência, curadoria de luxo e atendimento personalizado para amantes da boa óptica.
          </p>
        </div>
      </section>

      <section className="container-luxe py-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-serif mb-4">Excelência e curadoria</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Ótica Anna Santana nasceu da paixão pelo design e pela busca incansável por peças únicas. Trabalhamos com as marcas mais
            desejadas do mundo — Gucci, Prada, Céline, Oliver Peoples, Valentino, Zegna, Miu Miu, Pucci e muitas outras — sempre garantindo
            a procedência e a originalidade de cada modelo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nossa equipe é formada por profissionais apaixonados que tratam cada cliente como único, oferecendo consultoria personalizada,
            ajustes precisos e o cuidado de quem entende que óculos é mais do que um acessório: é a sua identidade.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-serif mb-4">Missão e valores</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li><strong className="text-foreground">Autenticidade:</strong> 100% das peças são originais, com nota fiscal e garantia oficial.</li>
            <li><strong className="text-foreground">Curadoria:</strong> Selecionamos os melhores modelos de cada coleção internacional.</li>
            <li><strong className="text-foreground">Atendimento:</strong> Consultoria personalizada do começo ao fim da experiência.</li>
            <li><strong className="text-foreground">Cuidado pós-venda:</strong> Manutenção, ajustes e limpeza sempre disponíveis.</li>
          </ul>
        </div>
      </section>

      <section className="bg-luxury text-primary-foreground py-16">
        <div className="container-luxe grid md:grid-cols-3 gap-10 text-center">
          {[
            { n: "20+", l: "anos de experiência" },
            { n: "50+", l: "marcas internacionais" },
            { n: "10mil+", l: "clientes atendidos" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-5xl md:text-6xl font-serif text-accent mb-2">{s.n}</p>
              <p className="uppercase tracking-widest text-sm text-primary-foreground/70">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Sobre;
