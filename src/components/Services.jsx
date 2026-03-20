const services = [
  {
    icon: <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
    title: "Criação de Sites",
    desc: "Sites otimizados com IA para carregamento ultra-rápido e máxima conversão de leads.",
    items: ["UX/UI Design Premium", "SEO Ready", "Mobile First"],
    example: {
      metrics: [
        { label: "Tempo de carregamento", value: "< 2s", highlight: true },
        { label: "Conversão", value: "+40%", highlight: true },
        { label: "Core Web Vitals", value: "100%", highlight: false },
      ],
    },
  },
  {
    icon: <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
    title: "E-commerce",
    desc: "Plataformas de alta conversão focadas em escalar suas vendas online com segurança.",
    items: ["Checkout Otimizado", "Gestão de Inventário", "Integrações de Pagamento"],
    example: {
      metrics: [
        { label: "Taxa de checkout", value: "+35%", highlight: true },
        { label: "Ticket médio", value: "+18%", highlight: true },
        { label: "Abandono de carrinho", value: "-22%", highlight: true },
      ],
    },
  },
  {
    icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
    title: "Tráfego Pago",
    desc: "Gestão de anúncios baseada em dados (Meta Ads, Google Ads, TikTok) para ROI máximo.",
    items: ["Segmentação Avançada", "Testes A/B Constantes", "Escala Inteligente"],
    example: {
      metrics: [
        { label: "ROAS médio", value: "3.2x", highlight: true },
        { label: "CPL reduzido", value: "-45%", highlight: true },
        { label: "Alcance mensal", value: "2.5M", highlight: false },
      ],
    },
  },
  {
    icon: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
    title: "SEO Estratégico",
    desc: "Domine a primeira página do Google e receba tráfego orgânico qualificado diariamente.",
    items: ["Auditoria Técnica", "Link Building", "Marketing de Conteúdo"],
    example: {
      metrics: [
        { label: "Palavras no top 10", value: "+120", highlight: true },
        { label: "Tráfego orgânico", value: "+280%", highlight: true },
        { label: "Autoridade de domínio", value: "+40 pts", highlight: false },
      ],
    },
  },
];

function ServiceCard({ service }) {
  return (
    <div className="group p-8 bg-brand-dark border border-white/5 rounded-3xl hover:bg-white/5 hover:border-brand-primary/20 transition duration-300 flex flex-col">
      <div className="mb-6 text-brand-primary">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">{service.icon}</svg>
      </div>
      <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
      <p className="text-gray-400 mb-4 flex-1">{service.desc}</p>
      <ul className="text-sm text-gray-500 space-y-2 mb-6">
        {service.items.map((item, j) => (
          <li key={j} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/60"></span>
            {item}
          </li>
        ))}
      </ul>
      {/* Exemplo demonstrativo */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Exemplo de resultados</p>
        <div className="flex flex-wrap gap-3">
          {service.example.metrics.map((m, k) => (
            <div key={k} className={`px-4 py-2 rounded-xl ${m.highlight ? 'bg-brand-primary/10 border border-brand-primary/30' : 'bg-white/5'}`}>
              <span className="text-xs text-gray-500 block">{m.label}</span>
              <span className={`font-bold ${m.highlight ? 'text-brand-primary' : 'text-gray-300'}`}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-24 bg-white/[0.01]" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossas <span className="text-brand-primary">Soluções</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Estratégias completas para todas as etapas da jornada do cliente. Veja exemplos de resultados que entregamos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
          {/* WhatsApp IA - Destaque */}
          <div className="md:col-span-2 p-8 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/10 border border-brand-primary/30 rounded-3xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-brand-primary text-brand-dark text-[10px] font-bold uppercase rounded mb-4">Mais Procurado</div>
                <h4 className="text-3xl font-bold mb-3">Automação de WhatsApp com IA</h4>
                <p className="text-gray-300 mb-6">Chatbots inteligentes que entendem o contexto e atendem 24/7, transformando conversas em vendas sem intervenção humana constante.</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="px-4 py-2 rounded-xl bg-brand-primary/10 border border-brand-primary/30">
                    <span className="text-xs text-gray-500 block">Tempo de resposta</span>
                    <span className="font-bold text-brand-primary">Instantâneo</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-brand-primary/10 border border-brand-primary/30">
                    <span className="text-xs text-gray-500 block">Leads qualificados</span>
                    <span className="font-bold text-brand-primary">+65%</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-brand-primary/10 border border-brand-primary/30">
                    <span className="text-xs text-gray-500 block">Custo de atendimento</span>
                    <span className="font-bold text-brand-primary">-60%</span>
                  </div>
                </div>
                <a className="inline-flex items-center text-brand-primary font-bold hover:underline" href="#contato">
                  Solicitar Demonstração
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </a>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-brand-primary/20 rounded-full animate-ping opacity-25"></div>
                  <div className="relative z-10 w-full h-full bg-brand-dark border border-brand-primary/50 rounded-3xl flex items-center justify-center glow-effect">
                    <svg className="w-20 h-20 text-brand-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
