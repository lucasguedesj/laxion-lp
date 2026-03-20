const testimonials = [
  {
    quote: "A implementação do chatbot com IA da Laxion mudou o jogo pra gente. Atendemos 24h e as vendas no final de semana explodiram.",
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
    <section className="py-24 bg-white/[0.02]" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">O que dizem nossos clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-brand-dark/50 border border-white/10 rounded-2xl">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-gray-400 italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-primary/30 rounded-full flex items-center justify-center font-bold">{t.initials}</div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
