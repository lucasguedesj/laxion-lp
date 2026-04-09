const features = [
  { title: "Arquitetura Escalável", desc: "Desenvolvimento em cloud com infraestrutura preparada para crescer junto com seu negócio." },
  { title: "Multi-tenant ou White-label", desc: "Soluções para atender milhares de clientes ou licenciar sua plataforma para terceiros." },
  { title: "Integração com APIs", desc: "Conecte seu SaaS a ferramentas de pagamento, analytics, CRM e automações." },
];

export default function SaaS() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface-nested" id="saas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <div className="bg-surface-elevated rounded-2xl overflow-hidden card-soft-shadow relative z-10 max-w-lg mx-auto">
            <div className="bg-surface-container px-6 py-4 flex items-center gap-2">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-outline-variant/40"></span>
                <span className="w-3 h-3 rounded-full bg-outline-variant/40"></span>
                <span className="w-3 h-3 rounded-full bg-outline-variant/40"></span>
              </div>
              <span className="text-[0.6875rem] font-medium text-on-surface-variant ml-2">dashboard.seudominio.com</span>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-on-background">Visão geral</h4>
                <span className="text-xs font-semibold text-primary-container">Métricas em tempo real</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Usuários ativos', 'MRR', 'Churn'].map((label, i) => (
                  <div key={i} className="bg-surface-container rounded-xl p-4">
                    <p className="text-[10px] font-medium text-on-surface-variant uppercase mb-1">{label}</p>
                    <p className="text-lg font-bold text-primary-container">--</p>
                  </div>
                ))}
              </div>
              <div className="h-20 bg-surface-container rounded-xl gap-1 flex flex-col justify-center overflow-hidden">
                <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary-container to-primary" />
                </div>
                <p className="text-[10px] text-on-surface-variant px-1 pt-2">Progresso meta trimestral</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-primary-container/5 blur-[100px] -z-10 scale-75 pointer-events-none" />
        </div>
        <div className="flex-1 space-y-6 order-1 lg:order-2">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight tracking-[-0.02em] text-on-background">
            Desenvolvemos seu <br />
            <span className="text-gradient">Software como Serviço</span>
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Da ideia ao lançamento: criamos plataformas SaaS completas, com assinaturas, painel admin, dashboards e integrações prontas para escalar.
          </p>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-secondary-container/50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" /></svg>
                </div>
                <p className="text-on-background/90"><strong className="text-on-background font-semibold">{f.title}:</strong> <span className="text-on-surface-variant">{f.desc}</span></p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="px-4 py-2.5 rounded-xl bg-secondary-container text-on-secondary-container">
              <span className="text-[0.6875rem] font-medium block opacity-90">Stack moderna</span>
              <span className="font-bold">React • Node • Cloud</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-secondary-container text-on-secondary-container">
              <span className="text-[0.6875rem] font-medium block opacity-90">Modelo de negócio</span>
              <span className="font-bold">Mensal • Anual • Freemium</span>
            </div>
          </div>
          <a href="#contato" className="inline-flex items-center font-semibold text-primary hover:text-primary-container transition">
            Orçar meu SaaS
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
