const values = [
  {
    icon: (
      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    ),
    title: "Foco em Resultados",
    desc: "Não entregamos apenas métricas de vaidade, focamos no que realmente importa: o ROI do seu negócio.",
  },
  {
    icon: (
      <>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </>
    ),
    title: "Transparência Total",
    desc: "Processos claros e dashboards em tempo real para que você acompanhe cada centavo investido.",
  },
  {
    icon: (
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    ),
    title: "Inovação com IA",
    desc: "Implementamos as tecnologias mais recentes de IA para otimizar conversões e automatizar processos.",
  },
];

export default function Values() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition group">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/20 transition">
                <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">{v.icon}</svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-gray-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
