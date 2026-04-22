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
    title: "Personal shopper óptico",
    desc: "Consultoria personalizada para encontrar o modelo ideal para o seu rosto e estilo.",
    icon: "User",
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
    slug: "protecao-uv",
    title: "Por que proteção UV nos óculos é essencial",
    excerpt: "Entenda como os raios UV afetam a saúde dos olhos e a importância de lentes com proteção certificada.",
    date: "02 Abr 2026",
    category: "Saúde ocular",
  },
  {
    slug: "luz-azul-telas",
    title: "Luz azul e telas: como proteger sua visão",
    excerpt: "Passamos cada vez mais tempo em frente a telas. Veja como reduzir a fadiga visual no dia a dia.",
    date: "25 Mar 2026",
    category: "Saúde ocular",
  },
  {
    slug: "tendencias-2026",
    title: "Tendências de óculos para 2026",
    excerpt: "As principais marcas internacionais apostam em modelos atemporais com toques retrô. Confira.",
    date: "15 Mar 2026",
    category: "Tendências",
  },
];
