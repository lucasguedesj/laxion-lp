const features = [
  { title: "Arquitetura Escalável", desc: "Desenvolvimento em cloud com infraestrutura preparada para crescer junto com seu negócio." },
  { title: "Multi-tenant ou White-label", desc: "Soluções para atender milhares de clientes ou licenciar sua plataforma para terceiros." },
  { title: "Integração com APIs", desc: "Conecte seu SaaS a ferramentas de pagamento, analytics, CRM e automações." },
];

export default function SaaS() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.01]" id="saas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <div className="bg-brand-dark border-4 border-white/10 rounded-2xl overflow-hidden shadow-2xl relative z-10 max-w-lg mx-auto">
            <div className="bg-white/5 px-6 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs text-gray-500 ml-2">dashboard.seudominio.com</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white">Visão Geral</h4>
                <span className="text-xs text-brand-primary">Métricas em tempo real</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Usuários ativos', 'MRR', 'Churn'].map((label, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase mb-1">{label}</p>
                    <p className="text-lg font-bold text-brand-primary">--</p>
                  </div>
                ))}
              </div>
              <div className="h-20 bg-white/5 rounded-xl flex items-center justify-center border border-white/5">
                <p className="text-xs text-gray-600">Gráficos e dashboards personalizados</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-brand-secondary/20 blur-[100px] -z-10 scale-75"></div>
        </div>
        <div className="flex-1 space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Desenvolvemos seu <br />
            <span className="text-gradient">Software como Serviço</span>
          </h2>
          <p className="text-lg text-gray-400">
            Da ideia ao lançamento: criamos plataformas SaaS completas, com assinaturas, painel admin, dashboards e integrações prontas para escalar.
          </p>
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" /></svg>
                </div>
                <p className="text-gray-300"><strong className="text-white">{f.title}:</strong> {f.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="px-4 py-2 rounded-xl bg-brand-secondary/10 border border-brand-secondary/30">
              <span className="text-xs text-gray-500 block">Stack moderna</span>
              <span className="font-bold text-brand-secondary">React • Node • Cloud</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-brand-secondary/10 border border-brand-secondary/30">
              <span className="text-xs text-gray-500 block">Modelo de negócio</span>
              <span className="font-bold text-brand-secondary">Mensal • Anual • Freemium</span>
            </div>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center text-brand-secondary font-bold hover:text-brand-primary transition"
          >
            Orçar meu SaaS
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
