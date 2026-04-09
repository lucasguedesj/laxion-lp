const features = [
  { title: "Escalabilidade Infinita", desc: "Atenda 10 ou 10.000 pessoas simultaneamente com a mesma qualidade." },
  { title: "Processamento de Linguagem Natural", desc: "Respostas humanas que entendem gírias e intenções reais." },
  { title: "Integração com CRM", desc: "Todos os dados salvos automaticamente no seu funil de vendas." },
];

export default function WhatsAppAI() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent" id="ia-whatsapp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight tracking-[-0.02em] text-white">
            Potencialize suas vendas com <br />
            <span className="text-gradient">Automação de WhatsApp & IA</span>
          </h2>
          <p className="text-lg text-white/72 leading-relaxed">
            Chega de perder leads por demora no atendimento. Nossa IA não apenas responde, ela qualifica, apresenta o produto e encaminha para o fechamento.
          </p>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-primary-container/30 border border-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#d4a5ff]" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" /></svg>
                </div>
                <p className="text-white/88"><strong className="text-white font-semibold">{f.title}:</strong> <span className="text-white/70">{f.desc}</span></p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="dark-glass-card p-6 card-soft-shadow relative z-10 animate-float max-w-sm mx-auto">
            <div className="space-y-4">
              <div className="bg-black/25 p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm text-white/88 border border-white/8">Olá! Como posso te ajudar hoje com a automação de vendas?</div>
              <div className="bg-primary-container/25 p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%] text-sm text-right text-white border border-[#8a05be]/30">Quero saber mais sobre o chatbot com IA.</div>
              <div className="bg-black/25 p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm text-white/88 border border-white/8">Claro! Nossa IA pode reduzir seus custos de atendimento em até 60%. Gostaria de agendar uma demo?</div>
              <div className="btn-primary p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%] text-sm font-semibold text-center">Agendar agora</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-primary-container/15 blur-[100px] -z-10 scale-75 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
