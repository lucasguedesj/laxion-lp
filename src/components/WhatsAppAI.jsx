const features = [
  { title: "Escalabilidade Infinita", desc: "Atenda 10 ou 10.000 pessoas simultaneamente com a mesma qualidade." },
  { title: "Processamento de Linguagem Natural", desc: "Respostas humanas que entendem gírias e intenções reais." },
  { title: "Integração com CRM", desc: "Todos os dados salvos automaticamente no seu funil de vendas." },
];

export default function WhatsAppAI() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface" id="ia-whatsapp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight tracking-[-0.02em] text-on-background">
            Potencialize suas vendas com <br />
            <span className="text-gradient">Automação de WhatsApp & IA</span>
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Chega de perder leads por demora no atendimento. Nossa IA não apenas responde, ela qualifica, apresenta o produto e encaminha para o fechamento.
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
        </div>
        <div className="flex-1 relative">
          <div className="bg-surface-elevated rounded-[2rem] p-6 card-soft-shadow relative z-10 animate-float max-w-sm mx-auto">
            <div className="space-y-4">
              <div className="bg-surface-container p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm text-on-background">Olá! Como posso te ajudar hoje com a automação de vendas?</div>
              <div className="bg-secondary-container/60 p-3 rounded-2xl rounded-tr-none ml-auto max-w-[80%] text-sm text-right text-on-background">Quero saber mais sobre o chatbot com IA.</div>
              <div className="bg-surface-container p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm text-on-background">Claro! Nossa IA pode reduzir seus custos de atendimento em até 60%. Gostaria de agendar uma demo?</div>
              <div className="btn-primary p-3 rounded-2xl rounded-tr-none ml-auto max-w-[80%] text-sm font-semibold text-center">Agendar agora</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-primary-container/10 blur-[100px] -z-10 scale-75 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
