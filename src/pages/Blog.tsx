import { blogPosts } from "@/data/site";
import { ArrowRight, BookOpen, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <>
      <section className="bg-soft py-12 border-b border-zinc-100">
        <div className="container-luxe text-center max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-black mb-3">Insights Óticos</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Dicas do Especialista</h1>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            7 anos cuidando da sua visão. Compartilhamos aqui nosso conhecimento sobre saúde ocular, estilo e tecnologia em lentes.
          </p>
        </div>
      </section>

      <section className="container-luxe py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => post.url && window.open(post.url, '_blank')}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden relative rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={post.image || `https://source.unsplash.com/featured/?eyewear,optics,${post.slug}`} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 w-full h-full bg-zinc-200 flex items-center justify-center">
                   {post.category === "Tendências" ? <Sparkles className="h-12 w-12 text-zinc-300" /> : 
                    post.category === "Saúde Ocular" ? <ShieldCheck className="h-12 w-12 text-zinc-300" /> :
                    <BookOpen className="h-12 w-12 text-zinc-300" />}
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white border border-white/40 px-3 py-1 rounded-full">
                    Ler artigo completo
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">{post.category}</span>
                  <span className="w-4 h-px bg-zinc-300" />
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400">{post.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-serif mb-3 leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-auto border-t border-zinc-100">
                <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                  Explorar conteúdo <ArrowRight className="h-3 w-3 text-accent" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-white py-16">
        <div className="container-luxe text-center max-w-2xl">
          <h3 className="text-2xl font-serif mb-4 italic">Tem alguma dúvida específica?</h3>
          <p className="text-sm text-white/80 mb-8 leading-relaxed">
            Nossos especialistas estão prontos para tirar suas dúvidas sobre receitas, lentes e armações.
          </p>
          <a 
            href="https://wa.me/5519971528684" 
            target="_blank"
            className="inline-block bg-white text-accent px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-100 transition-colors shadow-xl"
          >
            Fale com um especialista
          </a>
        </div>
      </section>
    </>
  );
};

export default Blog;
