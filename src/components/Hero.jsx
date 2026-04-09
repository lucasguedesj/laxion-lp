export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
      <div className="absolute top-20 left-[12%] w-72 h-72 rounded-full bg-gradient-to-br from-white/50 to-primary-container/15 blur-[100px] pointer-events-none animate-shimmer-soft" />
      <div className="absolute bottom-10 right-[8%] w-80 h-80 rounded-full bg-gradient-to-tl from-surface-elevated/80 to-primary/10 blur-[120px] pointer-events-none animate-shimmer-soft [animation-delay:1.2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,52rem)] h-64 rounded-full bg-gradient-to-r from-transparent via-white/35 to-transparent blur-3xl pointer-events-none metallic-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:ml-0 lg:mr-auto">
          <h1 className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] font-bold tracking-[-0.02em] leading-tight mb-6 text-on-background">
            Projetamos sua curva de <span className="text-gradient">crescimento com IA</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            A Hazze utiliza inteligência de dados, automação de WhatsApp e estratégias de alta performance para tracionar negócios de forma escalável e inteligente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a className="btn-primary px-8 py-4 text-center font-bold transition-transform hover:scale-[1.02]" href="#contato">
              Acelerar Meu Negócio
            </a>
            <a className="px-8 py-4 bg-surface-container rounded-2xl font-semibold text-primary hover:bg-surface-nested transition text-center" href="#servicos">
              Conhecer Soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
