import gucci from "@/assets/brands/gucci.png";
import prada from "@/assets/brands/prada.png";
import oliver from "@/assets/brands/oliver.png";
import zegna from "@/assets/brands/zegna.png";
import celine from "@/assets/brands/celine.jpg";
import valentino from "@/assets/brands/valentino.jpg";

import classico from "@/assets/categories/classico.png";
import infantil from "@/assets/categories/infantil.png";
import vintage from "@/assets/categories/vintage.png";
import minimalista from "@/assets/categories/minimalista.png";
import criancas from "@/assets/categories/criancas.png";

import gucciGg0061s from "@/assets/products/gucci.png";
import prada17ws from "@/assets/products/prada.png";
import celine40026i from "@/assets/products/celine.png";
import oliver5036 from "@/assets/products/oliver.png";
import oliver5036_2 from "@/assets/products/oliver-2.png";
import valentino4081 from "@/assets/products/valentino.png";
import zegna5239 from "@/assets/products/zegna.png";
import productA from "@/assets/products/a.png";
import productB from "@/assets/products/b.png";

export const brands = [
  { name: "Gucci", img: gucci, slug: "gucci", desc: "Sofisticação italiana com personalidade marcante." },
  { name: "Prada", img: prada, slug: "prada", desc: "Design contemporâneo e elegância atemporal." },
  { name: "Céline", img: celine, slug: "celine", desc: "Minimalismo francês refinado." },
  { name: "Oliver Peoples", img: oliver, slug: "oliver-peoples", desc: "Artesanato e estilo californiano." },
  { name: "Valentino", img: valentino, slug: "valentino", desc: "Romantismo e ousadia em cada peça." },
  { name: "Zegna", img: zegna, slug: "zegna", desc: "Tradição de luxo masculina italiana." },
];

export const categories = [
  { name: "Clássico", icon: "Glasses", slug: "classico" },
  { name: "Minimalista", icon: "Square", slug: "minimalista" },
  { name: "Vintage", icon: "History", slug: "vintage" },
  { name: "Infantil", icon: "Smile", slug: "infantil" },
  { name: "Crianças", icon: "Baby", slug: "criancas" },
];

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "solar" | "grau";
  style: string;
  price: number;
  img: string;
};

export const products: Product[] = [
  { id: "1", name: "GG0061S", brand: "Gucci", category: "solar", style: "classico", price: 2890, img: gucciGg0061s },
  { id: "2", name: "PR 17WS", brand: "Prada", category: "solar", style: "minimalista", price: 2390, img: prada17ws },
  { id: "3", name: "CL40026I", brand: "Céline", category: "grau", style: "minimalista", price: 3290, img: celine40026i },
  { id: "4", name: "OV5036", brand: "Oliver Peoples", category: "grau", style: "vintage", price: 2790, img: oliver5036 },
  { id: "5", name: "VA4081", brand: "Valentino", category: "solar", style: "classico", price: 2590, img: valentino4081 },
  { id: "6", name: "EZ5239", brand: "Zegna", category: "grau", style: "classico", price: 2190, img: zegna5239 },
  { id: "7", name: "Modelo Alpha", brand: "Exclusivo", category: "solar", style: "vintage", price: 3190, img: productA },
  { id: "8", name: "Modelo Beta", brand: "Exclusivo", category: "grau", style: "minimalista", price: 2690, img: productB },
  { id: "9", name: "OV5036 Especial", brand: "Oliver Peoples", category: "grau", style: "vintage", price: 2890, img: oliver5036_2 },
];

export const services = [
  {
    title: "Exame de vista",
    desc: "Avaliação oftalmológica completa com profissionais especializados e equipamentos de última geração.",
    icon: "Eye",
  },
  {
    title: "Lentes de luxo",
    desc: "Lentes de alta tecnologia com tratamentos antirreflexo, anti-risco e proteção UV.",
    icon: "Sparkles",
  },
  {
    title: "Ajustes e regulagens",
    desc: "Ajuste personalizado da armação para o conforto perfeito durante todo o dia.",
    icon: "Wrench",
  },
  {
    title: "Manutenção preventiva",
    desc: "Limpeza ultrassônica gratuita e revisão de parafusos sempre que necessário.",
    icon: "Shield",
  },
  {
    title: "Lentes de contato",
    desc: "Adaptação e venda de lentes de contato gelatinosas, gás permeáveis e especiais.",
    icon: "Circle",
  },
];

export const blogPosts = [
  {
    slug: "como-escolher-armacao",
    title: "Como escolher a armação ideal para o seu rosto",
    excerpt: "Descubra qual formato de armação valoriza cada tipo de rosto e como combinar com seu estilo pessoal.",
    date: "10 Abr 2026",
    category: "Dicas de estilo",
  },
  {
    slug: "importancia-exame-anual",
    title: "A Importância do Exame Oftalmológico Anual",
    excerpt: "Muitas doenças oculares são silenciosas. Descubra por que a consulta de rotina é o pilar da prevenção, mesmo para quem não usa óculos.",
    date: "15 Mai 2024",
    category: "Saúde Ocular",
    image: "/blog/exame.png",
    url: "https://www.oticasdiniz.com.br/blog/saude-visual/importancia-do-exame-oftalmologico/"
  },
  {
    slug: "fadiga-digital-telas",
    title: "Fadiga Digital: Como Proteger seus Olhos das Telas",
    excerpt: "O uso excessivo de smartphones e computadores pode causar cansaço e secura ocular. Aprenda a regra 20-20-20 e minimize os impactos.",
    date: "10 Mai 2024",
    category: "Saúde Ocular",
    image: "/blog/telas.png",
    url: "https://www.lenscope.com.br/blog/fadiga-ocular-digital/"
  },
  {
    slug: "tendencias-armacoes-2024",
    title: "Tendências de Armações: O que está em alta em 2024",
    excerpt: "Dos modelos geométricos aos clássicos retangulares, veja quais armações estão dominando as vitrines de luxo este ano.",
    date: "05 Mai 2024",
    category: "Tendências",
    image: "/blog/tendencias.png",
    url: "https://www.oticadagente.com.br/blog/tendencias-de-oculos-para-2024/"
  },
  {
    slug: "protecao-uv-indispensavel",
    title: "Proteção UV: Mais que Estilo, uma Necessidade",
    excerpt: "Lentes de sol sem proteção podem ser mais perigosas do que não usar óculos. Entenda os riscos dos raios UVA e UVB para sua visão.",
    date: "28 Abr 2024",
    category: "Saúde Ocular",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
    url: "https://www.vizibelli.com.br/blog/protecao-uv-nos-oculos-de-sol/"
  },
  {
    slug: "alimentacao-e-visao",
    title: "Alimentação: Nutrientes que Fortalecem sua Visão",
    excerpt: "Ômega-3, Luteína e Vitamina A. Saiba quais alimentos incluir na sua dieta para prevenir a degeneração macular e catarata.",
    date: "20 Abr 2024",
    category: "Dicas",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    url: "https://www.oticaloryfreitas.com/blog/alimentacao-e-saude-ocular/"
  },
  {
    slug: "higienizacao-lentes",
    title: "Como Limpar seus Óculos da Maneira Correta",
    excerpt: "Esfregar na camiseta? Nunca! Aprenda o passo a passo para higienizar suas lentes sem riscar e prolongar a vida útil da sua armação.",
    date: "12 Abr 2024",
    category: "Cuidados",
    image: "https://images.unsplash.com/photo-1509100104048-6373f71cd466?auto=format&fit=crop&q=80&w=800",
    url: "https://www.oticasdiniz.com.br/blog/cuidados-com-oculos/como-limpar-oculos/"
  },
];
