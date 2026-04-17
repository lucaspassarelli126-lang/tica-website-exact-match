import { useMemo, useState } from "react";
import { products, brands } from "@/data/site";
import { Button } from "@/components/ui/button";

const Catalogo = () => {
  const [brand, setBrand] = useState<string>("todas");
  const [category, setCategory] = useState<"todos" | "solar" | "grau">("todos");

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (brand === "todas" || p.brand === brand) &&
          (category === "todos" || p.category === category),
      ),
    [brand, category],
  );

  return (
    <>
      <section className="bg-soft py-16">
        <div className="container-luxe text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Vitrine</p>
          <h1 className="text-5xl md:text-6xl font-serif">Catálogo de óculos</h1>
        </div>
      </section>

      <section className="container-luxe py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-10 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {(["todos", "solar", "grau"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 text-sm uppercase tracking-wider border transition-colors ${
                  category === c ? "bg-luxury text-primary-foreground border-luxury" : "border-border hover:border-accent"
                }`}
              >
                {c === "todos" ? "Todos" : c === "solar" ? "Solar" : "Grau"}
              </button>
            ))}
          </div>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="px-4 py-2 text-sm border border-border bg-background uppercase tracking-wider focus:outline-none focus:border-accent"
          >
            <option value="todas">Todas as marcas</option>
            {brands.map((b) => (
              <option key={b.slug} value={b.name}>{b.name}</option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="group">
              <div className="aspect-square bg-soft overflow-hidden p-6 flex items-center justify-center">
                <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.brand}</p>
                <h3 className="text-lg font-medium mt-1">{p.name}</h3>
                <p className="text-accent font-medium mt-1">
                  R$ {p.price.toLocaleString("pt-BR")}
                </p>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-20">Nenhum produto encontrado.</p>
          )}
        </div>

        <div className="text-center mt-14">
          <Button variant="outline" size="lg">Carregar mais</Button>
        </div>
      </section>
    </>
  );
};

export default Catalogo;
