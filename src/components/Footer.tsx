"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

function Footer() {
  // Footer link data adapted from original
  const institutionalLinks = [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Agendar Consulta", href: "/contato#agendamento", pulse: true },
  ];

  // Contact info data adapted from original
  const contactInfo = [
    {
      icon: <Phone size={18} className="text-[#B38B59]" />,
      text: "(19) 97152-8684",
      href: "https://wa.me/5519971528684",
    },
    {
      icon: <MapPin size={18} className="text-[#B38B59]" />,
      text: "Sumaré: Av. Emílio Bosco, 551 - Matão",
    },
    {
      icon: <MapPin size={18} className="text-[#B38B59]" />,
      text: "Paulínia: Av. Brasília, 1035 - Vila Bressani",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/oticastheotavares/" },
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
  ];

  return (
    <footer className="bg-zinc-950/90 relative h-fit rounded-t-[3rem] overflow-hidden mt-12">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12 text-zinc-300">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col leading-none">
              <span className="text-[#B38B59] text-2xl font-black tracking-widest uppercase">
                ÓTICAS
              </span>
              <span className="text-white text-2xl font-black tracking-widest uppercase">
                THEO TAVARES
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-zinc-500 font-medium mt-1">
                Excelência Visual há 7 anos
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Sua parceira de confiança na saúde visual. Qualidade, profissionalismo e atendimento excepcional em Sumaré e Paulínia.
            </p>
          </div>

          {/* Footer link sections */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 uppercase tracking-widest text-sm">
              Institucional
            </h4>
            <ul className="space-y-3">
              {institutionalLinks.map((link) => (
                <li key={link.label} className="relative w-fit">
                  <Link
                    to={link.href}
                    className="hover:text-[#B38B59] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                  {link.pulse && (
                    <span className="absolute top-0 -right-4 w-1.5 h-1.5 rounded-full bg-[#B38B59] animate-pulse"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-6 uppercase tracking-widest text-sm">
              Onde Estamos & Contato
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-1 shrink-0">{item.icon}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B38B59] transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-zinc-400 transition-colors text-sm leading-relaxed">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-zinc-800 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-zinc-500 uppercase tracking-widest font-medium">
          {/* Social icons */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-[#B38B59] transition-colors text-zinc-400"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} ÓTICAS THEO TAVARES. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="THEO" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default Footer;
