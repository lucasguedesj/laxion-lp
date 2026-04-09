import Logo from './Logo';

export default function Nav() {
  return (
    <nav className="animate-nav-in fixed w-full z-50 glass-nav border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <Logo />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-6 lg:gap-8">
              <a className="text-white/70 hover:text-white transition px-2 py-2 text-sm font-medium" href="#servicos">Serviços</a>
              <a className="text-white/70 hover:text-white transition px-2 py-2 text-sm font-medium" href="#saas">Criação SaaS</a>
              <a className="text-white/70 hover:text-white transition px-2 py-2 text-sm font-medium" href="#ia-whatsapp">WhatsApp IA</a>
              <a className="text-white/70 hover:text-white transition px-2 py-2 text-sm font-medium" href="#depoimentos">Resultados</a>
              <a className="btn-primary px-6 py-2.5 text-sm inline-flex items-center justify-center" href="#contato">Acelerar Meu Negócio</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
