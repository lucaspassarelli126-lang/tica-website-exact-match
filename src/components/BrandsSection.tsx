import { motion } from "framer-motion";

const brands = [
  { name: "Ray-Ban", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Ray-Ban_logo.svg" },
  { name: "Oakley", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Oakley_logo.svg" },
  { name: "Prada", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg" },
  { name: "Vogue", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Vogue_Eyewear_Logo.svg" },
  { name: "Gucci", logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/1200px-Gucci_Logo.svg.png" },
  { name: "Armani", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Giorgio_Armani_logo.svg" },
];

export function BrandsSection() {
  return (
    <section className="py-12 bg-zinc-50 border-y border-zinc-100">
      <div className="container-luxe">
        <div className="flex flex-col items-center mb-8">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">
            Excelência em cada detalhe
          </span>
          <h2 className="text-xl font-serif text-zinc-800">Marcas que acompanham seu estilo</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-6 md:h-8 w-auto object-contain hover:scale-110 transition-transform" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
