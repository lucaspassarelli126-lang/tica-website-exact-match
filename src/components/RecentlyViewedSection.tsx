import { Clock, Star } from "lucide-react";
import { products, Product } from "@/data/site";
import { useEffect, useState } from "react";

// Simulates recently viewed — in production this would come from localStorage
const recentlyViewed = products.slice(0, 4);

const ratings: Record<string, { stars: number; count: number }> = {
  "1": { stars: 4.8, count: 134 },
  "2": { stars: 4.6, count: 98 },
  "3": { stars: 4.9, count: 211 },
  "4": { stars: 4.7, count: 76 },
};

interface RecentlyViewedProps {
  onProductClick: (product: Product) => void;
}

export function RecentlyViewedSection({ onProductClick }: RecentlyViewedProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-14 border-t border-zinc-100">
      <div className="container-luxe">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-accent" />
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-800">
              Vistos Recentemente
            </h2>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] uppercase tracking-widest text-accent hover:underline underline-offset-4 font-bold"
          >
            Ver catálogo completo →
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recentlyViewed.map((product, i) => {
            const rating = ratings[product.id] ?? { stars: 4.5, count: 80 };
            return (
              <div
                key={product.id}
                onClick={() => onProductClick(product)}
                className={`group flex flex-col items-center text-center cursor-pointer transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <div className="w-full aspect-square bg-[#FDFDFD] rounded-xl overflow-hidden mb-4 relative border border-zinc-100 group-hover:border-accent/30 transition-all duration-500 group-hover:shadow-xl">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-zinc-500 text-[8px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-sm border border-zinc-100">
                      {product.brand}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-accent text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Ver detalhes
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] text-accent font-black uppercase tracking-[0.1em]">{product.brand}</span>
                  <h3 className="text-[13px] font-medium text-zinc-900 tracking-tight leading-tight">{product.name}</h3>
                  <p className="text-[9px] text-zinc-400 line-clamp-1 mb-1 px-2">{product.description}</p>
                  
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-2.5 h-2.5 ${
                          star <= Math.round(rating.stars)
                            ? "text-accent fill-accent"
                            : "text-zinc-200 fill-zinc-200"
                        }`}
                      />
                    ))}
                    <span className="text-[8px] text-zinc-400 font-bold ml-1">{rating.stars}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

