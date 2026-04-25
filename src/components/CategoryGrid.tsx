import { Link } from "react-router-dom";
import completo from "@/assets/banners/promo-completo.png";
import kids from "@/assets/banners/promo-kids.png";
import games from "@/assets/banners/promo-games.png";
import clipon from "@/assets/banners/promo-clipon.png";

const categoryBanners = [
  {
    title: "Óculos Completo",
    image: completo,
    slug: "classico",
    delay: 0.1
  },
  {
    title: "Linha Kids",
    image: kids,
    slug: "infantil",
    delay: 0.2
  },
  {
    title: "Óculos para Games",
    image: games,
    slug: "minimalista",
    delay: 0.3
  },
  {
    title: "Óculos Clip-on",
    image: clipon,
    slug: "vintage",
    delay: 0.4
  }
];

export function CategoryGrid() {
  return (
    <section className="w-full py-4 md:py-8 bg-background">
      <div className="container-luxe">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
            Encontre seu Óculos Completo ideal
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categoryBanners.map((category) => (
            <Link 
              key={category.title}
              to={`/catalogo?style=${category.slug}`}
              className="block aspect-[4/5] overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
