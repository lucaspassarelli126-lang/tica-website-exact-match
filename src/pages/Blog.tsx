import { blogPosts } from "@/data/site";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <>
      <section className="bg-soft py-20">
        <div className="container-luxe text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Insights</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Blog & Saúde Ocular</h1>
          <p className="text-lg text-muted-foreground">
            Dicas, tendências e cuidados para manter sua visão e seu estilo sempre em dia.
          </p>
        </div>
      </section>

      <section className="container-luxe py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-soft mb-5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-luxury/10 to-accent/10" />
              </div>
              <p className="text-xs uppercase tracking-widest text-accent mb-2">
                {post.category} • {post.date}
              </p>
              <h2 className="text-2xl font-serif mb-3 group-hover:text-accent transition-colors">{post.title}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm uppercase tracking-wider border-b border-foreground/30 pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
                Ler artigo <ArrowRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
