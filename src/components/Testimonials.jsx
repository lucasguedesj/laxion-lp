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
    <section className="py-24 bg-surface-nested" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-[2rem] font-bold text-on-background">O que dizem nossos clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-surface-elevated rounded-2xl card-soft-shadow">
              <div className="flex text-amber-500 mb-5 text-sm gap-0.5">
                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center font-bold text-sm">{t.initials}</div>
                <div>
                  <p className="font-semibold text-sm text-on-background">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
