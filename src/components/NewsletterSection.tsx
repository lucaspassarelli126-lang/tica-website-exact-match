import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setName("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-accent">
      <div className="container-luxe max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            Exclusividade
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight"
          >
            Fique por dentro das novidades!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg max-w-xl mx-auto"
          >
            Cadastre-se e receba ofertas exclusivas, lançamentos e promoções diretamente no seu e-mail.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full space-y-2">
              <label htmlFor="newsletter-name" className="text-[10px] font-bold uppercase tracking-widest text-white/50 ml-1">Nome</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  id="newsletter-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 focus:bg-white/20 outline-none transition-all font-medium text-sm text-white placeholder:text-white/30"
                />
              </div>
            </div>
            <div className="flex-1 w-full space-y-2">
              <label htmlFor="newsletter-email" className="text-[10px] font-bold uppercase tracking-widest text-white/50 ml-1">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@email.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 focus:bg-white/20 outline-none transition-all font-medium text-sm text-white placeholder:text-white/30"
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={status !== "idle"}
              className="w-full md:w-auto h-[54px] px-10 rounded-2xl bg-white hover:bg-white/90 text-accent font-bold transition-all flex items-center justify-center gap-2 group"
            >
              {status === "loading" ? (
                <span className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
              ) : status === "success" ? (
                "Inscrito!"
              ) : (
                <>
                  Inscrever-se
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-green-600 mt-4 font-medium"
            >
              Obrigado por se inscrever! Você receberá nossas novidades em breve.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
