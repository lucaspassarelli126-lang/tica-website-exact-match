import { Link } from "react-router-dom";
import { Clock, Star } from "lucide-react";
import { products } from "@/data/site";
import { useEffect, useState } from "react";

// Simulates recently viewed — in production this would come from localStorage
const recentlyViewed = products.slice(0, 4);

const ratings: Record<string, { stars: number; count: number }> = {
  "1": { stars: 4.8, count: 134 },
  "2": { stars: 4.6, count: 98 },
  "3": { stars: 4.9, count: 211 },
  "4": { stars: 4.7, count: 76 },
};

export function RecentlyViewedSection() {
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
          <Link
            to="/catalogo"
            className="text-[10px] uppercase tracking-widest text-accent hover:underline underline-offset-4 font-bold"
          >
            Ver catálogo completo →
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recentlyViewed.map((product, i) => {
            const rating = ratings[product.id] ?? { stars: 4.5, count: 80 };
            return (
              <Link
                key={product.id}
                to="/catalogo"
                className={`group flex flex-col items-center text-center transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <div className="w-full aspect-square bg-zinc-50 rounded-xl overflow-hidden mb-3 relative border border-zinc-100 group-hover:border-accent/30 transition-colors duration-300">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* "Continuar Vendo" pill on hover */}
                  <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-accent text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      Ver produto
                    </span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3 h-3 ${
                        star <= Math.round(rating.stars)
                          ? "text-amber-400 fill-amber-400"
                          : "text-zinc-200 fill-zinc-200"
                      }`}
                    />
                  ))}
                  <span className="text-[9px] text-zinc-400 ml-1">({rating.count})</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
