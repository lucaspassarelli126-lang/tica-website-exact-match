
## Site Ótica Anna Santana — Réplica Visual + Funcionalidades

Vou criar uma réplica fiel do site da Ótica Anna Santana, extraindo cores, textos e imagens do arquivo enviado, e adicionar as funcionalidades solicitadas.

### Páginas
1. **Home** — Hero com destaque, apresentação da ótica, serviços em destaque, marcas parceiras, depoimentos, CTA de agendamento
2. **Sobre** — História da ótica, missão, equipe
3. **Serviços** — Lista detalhada (exame de vista, ajustes, lentes especiais, etc.)
4. **Catálogo de Óculos** — Galeria com filtros por categoria (solar/grau) e marca
5. **Marcas Parceiras** — Página dedicada com logos e descrições (Ray-Ban, Oakley, etc.)
6. **Blog / Dicas de Saúde Ocular** — Lista de artigos educativos
7. **Localização** — Endereço + Google Maps embutido + horários
8. **Contato** — Formulário funcional + WhatsApp + telefone

### Funcionalidades
- **Agendamento de exame de vista** — formulário com nome, telefone, data e horário preferido, salvo no banco (Lovable Cloud)
- **Formulário de contato funcional** — envia mensagem via edge function (email ou salva no banco para gestão)
- **Catálogo navegável** — filtros por marca/tipo, cards de produtos com imagem, marca e descrição
- **WhatsApp flutuante** — botão fixo para contato direto

### Design
- Réplica fiel: extrair paleta de cores, tipografia e estilo visual do site original (analisarei o ZIP para pegar cores exatas, logo, imagens e textos)
- Layout responsivo (mobile-first)
- Header fixo com navegação + footer institucional com horários, endereço e redes sociais

### Backend (Lovable Cloud)
- Tabela `agendamentos` (nome, telefone, email, data_preferida, observacoes)
- Tabela `mensagens_contato` (nome, email, telefone, mensagem)
- Validação com Zod em todos os formulários

### Etapas de implementação
1. Extrair assets (imagens, logo, cores, textos) do ZIP enviado
2. Configurar design system (cores, fontes) no `index.css` e `tailwind.config.ts`
3. Criar layout base (Header, Footer, WhatsApp flutuante) e roteamento
4. Construir Home com todas as seções
5. Criar páginas Sobre, Serviços, Marcas, Blog, Localização
6. Construir catálogo de óculos com filtros
7. Ativar Lovable Cloud e criar tabelas de agendamento e contato
8. Implementar formulários funcionais com validação Zod
