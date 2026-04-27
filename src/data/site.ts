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
import new1 from "@/assets/products/new_1.svg";
import new2 from "@/assets/products/new_2.svg";
import new3 from "@/assets/products/new_3.svg";
import new4 from "@/assets/products/new_4.svg";
import new5 from "@/assets/products/new_5.svg";

import editorial1 from "@/assets/editorial/editorial_glasses_1.jpg";
import editorial2 from "@/assets/editorial/editorial_glasses_2.jpg";
import editorial3 from "@/assets/editorial/editorial_glasses_3.jpg";
import editorial4 from "@/assets/editorial/editorial_glasses_4.jpg";
import editorial5 from "@/assets/editorial/editorial_glasses_5.jpg";

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
  img: string;
  description: string;
  visualScale?: number; // Zoom individual para normalizar o tamanho visual
};

export const products: Product[] = [
  { id: "1", name: "Armação de Grau Luxury", brand: "Coleção Premium", category: "grau", style: "classico", img: gucciGg0061s, description: "Elegância italiana para um olhar marcante e sofisticado.", visualScale: 1.3 },
  { id: "2", name: "Armação de Grau Modern", brand: "Exclusivo", category: "grau", style: "minimalista", img: prada17ws, description: "Design contemporâneo com leveza e conforto incomparáveis.", visualScale: 1.2 },
  { id: "3", name: "Armação de Grau Kids Style", brand: "Lançamento", category: "grau", style: "infantil", img: celine40026i, description: "Para os pequenos cheios de estilo e personalidade.", visualScale: 1.4 },
  { id: "4", name: "Armação de Grau Vintage", brand: "Coleção Premium", category: "grau", style: "vintage", img: oliver5036, description: "Charme retrô com acabamento artesanal de altíssima qualidade.", visualScale: 1.2 },
  { id: "5", name: "Armação de Grau Adventure", brand: "Destaque", category: "grau", style: "infantil", img: valentino4081, description: "Conforto e resistência para acompanhar todas as aventuras!", visualScale: 1.4 },
  { id: "6", name: "Armação de Grau Executive", brand: "Coleção Premium", category: "grau", style: "classico", img: zegna5239, description: "O equilíbrio perfeito entre sobriedade e luxo masculino.", visualScale: 1.3 },
  { id: "7", name: "Armação de Grau Especial", brand: "Exclusivo", category: "grau", style: "vintage", img: productA, description: "Edição limitada com design exclusivo para quem busca o único.", visualScale: 1.2 },
  { id: "8", name: "Armação de Grau Junior", brand: "Lançamento", category: "grau", style: "infantil", img: productB, description: "Segurança e ergonomia pensada no bem-estar das crianças.", visualScale: 1.4 },
  { id: "9", name: "Armação de Grau Edition", brand: "Coleção Premium", category: "grau", style: "vintage", img: oliver5036_2, description: "Uma peça de colecionador que redefine o estilo clássico.", visualScale: 1.2 },
  { id: "10", name: "Lançamento Noir", brand: "New Collection", category: "grau", style: "moderno", img: new1, description: "Elegância em preto fosco para um visual contemporâneo.", visualScale: 1.7 },
  { id: "11", name: "Destaque Gold", brand: "New Collection", category: "grau", style: "luxo", img: new2, description: "Detalhes dourados que elevam qualquer look.", visualScale: 1.5 },
  { id: "12", name: "Minimal Silver", brand: "New Collection", category: "grau", style: "minimalista", img: new3, description: "Simplicidade e sofisticação em metal prateado.", visualScale: 1.5 },
  { id: "13", name: "Vintage Tortoise", brand: "New Collection", category: "grau", style: "vintage", img: new4, description: "O clássico tartaruga revisitado com design moderno.", visualScale: 1.4 },
  { id: "14", name: "Arctic Clear", brand: "New Collection", category: "grau", style: "minimalista", img: new5, description: "Transparência total para quem busca leveza absoluta.", visualScale: 1.5 },
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

export const editorialProducts: Product[] = [
  { id: "e1", name: "Transparente Cristal", brand: "Cápsula", category: "grau", style: "minimalista", img: editorial1, description: "Design arrojado com transparência elegante para um visual clean." },
  { id: "e2", name: "Clássica Onyx", brand: "Cápsula", category: "grau", style: "classico", img: editorial2, description: "Clássico com toque moderno, hastes refinadas e linhas atemporais." },
  { id: "e3", name: "Nude Essence", brand: "Cápsula", category: "grau", style: "vintage", img: editorial3, description: "Leveza e sutileza em tons pastel para o dia a dia." },
  { id: "e4", name: "Fio de Nylon Pro", brand: "Cápsula", category: "grau", style: "minimalista", img: editorial4, description: "Discrição e profissionalismo com design fio de nylon." },
  { id: "e5", name: "Square Bold", brand: "Cápsula", category: "grau", style: "classico", img: editorial5, description: "Presença marcante com contornos definidos e cor intensa." },
];

export const newArrivals: Product[] = [
  { id: "n1", name: "Lançamento Noir", brand: "New Collection", category: "grau", style: "moderno", img: new1, description: "Elegância em preto fosco para um visual contemporâneo.", visualScale: 1.7 },
  { id: "n2", name: "Destaque Gold", brand: "New Collection", category: "grau", style: "luxo", img: new2, description: "Detalhes dourados que elevam qualquer look.", visualScale: 1.5 },
  { id: "n3", name: "Minimal Silver", brand: "New Collection", category: "grau", style: "minimalista", img: new3, description: "Simplicidade e sofisticação em metal prateado.", visualScale: 1.5 },
  { id: "n4", name: "Vintage Tortoise", brand: "New Collection", category: "grau", style: "vintage", img: new4, description: "O clássico tartaruga revisitado com design moderno.", visualScale: 1.4 },
  { id: "n5", name: "Arctic Clear", brand: "New Collection", category: "grau", style: "minimalista", img: new5, description: "Transparência total para quem busca leveza absoluta.", visualScale: 1.5 },
];
