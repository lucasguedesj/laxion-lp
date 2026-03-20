export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Projetamos sua curva de <span className="text-gradient">crescimento com IA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            A Laxion utiliza inteligência de dados, automação de WhatsApp e estratégias de alta performance para tracionar negócios de forma escalável e inteligente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="px-8 py-4 bg-brand-primary hover:bg-brand-accent text-brand-dark font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-brand-primary/20" href="#contato">
              Acelerar Meu Negócio
            </a>
            <a className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-bold rounded-xl transition-all" href="#servicos">
              Conhecer Soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
