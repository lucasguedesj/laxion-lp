const testimonials = [
  {
    quote: "A implementação do chatbot com IA da Hazze mudou o jogo pra gente. Atendemos 24h e as vendas no final de semana explodiram.",
    name: "Ricardo Costa",
    role: "CEO, E-shop Brasil",
    initials: "RC",
  },
  {
    quote: "Melhor investimento em tráfego que já fizemos. Eles olham os dados de verdade e não ficam apenas 'queimando' orçamento.",
    name: "Mariana Lima",
    role: "Diretora de Marketing, TechStart",
    initials: "ML",
  },
  {
    quote: "O novo site é impecável. A velocidade de carregamento ajudou muito no nosso posicionamento orgânico. Recomendo demais!",
    name: "André Silva",
    role: "Fundador, Logística Avançada",
    initials: "AS",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent relative" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-[2rem] font-bold text-white">O que dizem nossos clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="dark-glass-card p-8 card-soft-shadow animate-card" style={{ animationDelay: `${i * 0.25}s` }}>
              <div className="flex text-amber-400 mb-5 text-sm gap-0.5">
                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-white/75 italic mb-8 leading-relaxed text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-primary-container/35 text-white border border-white/15 rounded-full flex items-center justify-center font-bold text-sm">{t.initials}</div>
                <div>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
