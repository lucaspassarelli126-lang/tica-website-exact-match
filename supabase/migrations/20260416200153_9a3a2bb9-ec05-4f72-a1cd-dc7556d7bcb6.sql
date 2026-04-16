-- Tabela de agendamentos de exame de vista
CREATE TABLE public.agendamentos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
  email TEXT,
  data_preferida DATE NOT NULL,
  horario_preferido TEXT NOT NULL,
  observacoes TEXT,
  status TEXT NOT NULL DEFAULT 'pendente',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.agendamentos ENABLE ROW LEVEL SECURITY;

-- Qualquer visitante pode criar um agendamento (formulário público)
CREATE POLICY "Qualquer um pode criar agendamento"
ON public.agendamentos
FOR INSERT
WITH CHECK (true);

-- Ninguém pode ler publicamente (apenas via painel admin futuro)
-- Sem policy de SELECT = bloqueado por padrão com RLS ativo

-- Tabela de mensagens de contato
CREATE TABLE public.mensagens_contato (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  assunto TEXT,
  mensagem TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.mensagens_contato ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer um pode enviar mensagem"
ON public.mensagens_contato
FOR INSERT
WITH CHECK (true);