import Logo from './Logo';

export default function Nav() {
  return (
    <nav className="fixed w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <Logo className="h-12 w-auto" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a className="text-gray-300 hover:text-brand-primary transition px-3 py-2 text-sm font-medium" href="#servicos">Serviços</a>
              <a className="text-gray-300 hover:text-brand-primary transition px-3 py-2 text-sm font-medium" href="#saas">Criação SaaS</a>
              <a className="text-gray-300 hover:text-brand-primary transition px-3 py-2 text-sm font-medium" href="#ia-whatsapp">WhatsApp IA</a>
              <a className="text-gray-300 hover:text-brand-primary transition px-3 py-2 text-sm font-medium" href="#depoimentos">Resultados</a>
              <a className="bg-brand-primary text-brand-dark hover:bg-brand-accent transition px-6 py-2 rounded-full text-sm font-bold" href="#contato">Acelerar Meu Negócio</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
