import { useEffect, useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().max(20).optional().or(z.literal("")),
  assunto: z.string().trim().max(150).optional().or(z.literal("")),
  mensagem: z.string().trim().min(5, "Mensagem muito curta").max(1000),
});

const agendamentoSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255).optional().or(z.literal("")),
  data_preferida: z.string().min(1, "Selecione uma data"),
  horario_preferido: z.string().min(1, "Selecione um horário"),
  observacoes: z.string().trim().max(500).optional().or(z.literal("")),
});

const horarios = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const Contato = () => {
  const { toast } = useToast();
  const [loadingC, setLoadingC] = useState(false);
  const [loadingA, setLoadingA] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#agendamento") {
      document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Verifique os campos", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoadingC(true);
    const { error } = await supabase.from("mensagens_contato").insert({
      nome: parsed.data.nome,
      email: parsed.data.email,
      telefone: parsed.data.telefone || null,
      assunto: parsed.data.assunto || null,
      mensagem: parsed.data.mensagem,
    });
    setLoadingC(false);
    if (error) {
      toast({ title: "Erro ao enviar", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Mensagem enviada!", description: "Em breve entraremos em contato." });
    form.reset();
  };

  const handleSchedule = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = agendamentoSchema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Verifique os campos", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoadingA(true);
    const { error } = await supabase.from("agendamentos").insert({
      nome: parsed.data.nome,
      telefone: parsed.data.telefone,
      email: parsed.data.email || null,
      data_preferida: parsed.data.data_preferida,
      horario_preferido: parsed.data.horario_preferido,
      observacoes: parsed.data.observacoes || null,
    });
    setLoadingA(false);
    if (error) {
      toast({ title: "Erro ao agendar", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Agendamento solicitado!", description: "Confirmaremos por telefone em breve." });
    form.reset();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="bg-soft py-20">
        <div className="container-luxe text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Fale conosco</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Estamos à disposição</h1>
          <p className="text-lg text-muted-foreground">Envie uma mensagem ou agende seu exame de vista.</p>
        </div>
      </section>

      <section className="container-luxe py-16 grid lg:grid-cols-2 gap-12">
        {/* Contact */}
        <div>
          <h2 className="text-3xl font-serif mb-6">Mensagem de contato</h2>
          <form onSubmit={handleContact} className="space-y-4">
            <div>
              <Label htmlFor="c-nome">Nome *</Label>
              <Input id="c-nome" name="nome" required maxLength={100} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="c-email">E-mail *</Label>
                <Input id="c-email" name="email" type="email" required maxLength={255} />
              </div>
              <div>
                <Label htmlFor="c-tel">Telefone</Label>
                <Input id="c-tel" name="telefone" maxLength={20} />
              </div>
            </div>
            <div>
              <Label htmlFor="c-assunto">Assunto</Label>
              <Input id="c-assunto" name="assunto" maxLength={150} />
            </div>
            <div>
              <Label htmlFor="c-msg">Mensagem *</Label>
              <Textarea id="c-msg" name="mensagem" required maxLength={1000} rows={5} />
            </div>
            <Button type="submit" disabled={loadingC} size="lg" className="w-full">
              {loadingC ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </form>
        </div>

        {/* Agendamento */}
        <div id="agendamento" className="scroll-mt-24">
          <h2 className="text-3xl font-serif mb-6">Agendar exame de vista</h2>
          <form onSubmit={handleSchedule} className="space-y-4">
            <div>
              <Label htmlFor="a-nome">Nome completo *</Label>
              <Input id="a-nome" name="nome" required maxLength={100} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="a-tel">Telefone *</Label>
                <Input id="a-tel" name="telefone" required maxLength={20} placeholder="(11) 99999-9999" />
              </div>
              <div>
                <Label htmlFor="a-email">E-mail</Label>
                <Input id="a-email" name="email" type="email" maxLength={255} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="a-data">Data preferida *</Label>
                <Input id="a-data" name="data_preferida" type="date" required min={today} />
              </div>
              <div>
                <Label htmlFor="a-hora">Horário *</Label>
                <select
                  id="a-hora"
                  name="horario_preferido"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>Selecione</option>
                  {horarios.map((h) => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="a-obs">Observações</Label>
              <Textarea id="a-obs" name="observacoes" maxLength={500} rows={3} />
            </div>
            <Button type="submit" disabled={loadingA} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {loadingA ? "Enviando..." : "Solicitar agendamento"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contato;
