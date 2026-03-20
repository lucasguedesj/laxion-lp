const features = [
  { title: "Escalabilidade Infinita", desc: "Atenda 10 ou 10.000 pessoas simultaneamente com a mesma qualidade." },
  { title: "Processamento de Linguagem Natural", desc: "Respostas humanas que entendem gírias e intenções reais." },
  { title: "Integração com CRM", desc: "Todos os dados salvos automaticamente no seu funil de vendas." },
];

export default function WhatsAppAI() {
  return (
    <section className="py-24 relative overflow-hidden" id="ia-whatsapp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Potencialize suas vendas com <br />
            <span className="text-gradient">Automação de WhatsApp & IA</span>
          </h2>
          <p className="text-lg text-gray-400">
            Chega de perder leads por demora no atendimento. Nossa IA não apenas responde, ela qualifica, apresenta o produto e encaminha para o fechamento.
          </p>
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" /></svg>
                </div>
                <p className="text-gray-300"><strong className="text-white">{f.title}:</strong> {f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="bg-brand-dark border-4 border-white/10 rounded-[3rem] p-6 shadow-2xl relative z-10 animate-float max-w-sm mx-auto">
            <div className="space-y-4">
              <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">Olá! Como posso te ajudar hoje com a automação de vendas?</div>
              <div className="bg-brand-primary/20 p-3 rounded-2xl rounded-tr-none ml-auto max-w-[80%] text-sm text-right">Quero saber mais sobre o chatbot com IA.</div>
              <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">Claro! Nossa IA pode reduzir seus custos de atendimento em até 60%. Gostaria de agendar uma demo?</div>
              <div className="bg-brand-primary p-3 rounded-2xl rounded-tr-none ml-auto max-w-[80%] text-sm text-brand-dark font-bold text-center">Agendar Agora</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-brand-primary/30 blur-[100px] -z-10 scale-75"></div>
        </div>
      </div>
    </section>
  );
}
