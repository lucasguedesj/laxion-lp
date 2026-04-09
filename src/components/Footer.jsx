import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-transparent pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo className="block mb-6 h-9 sm:h-10 w-auto" />
            <p className="text-white/65 max-w-sm mb-6 text-sm leading-relaxed">
              Transformando o futuro de negócios através de inteligência artificial aplicada ao marketing e vendas.
            </p>
          </div>
        </div>
        <div className="pt-10">
          <p className="text-white/55 text-sm text-center">© {new Date().getFullYear()} Hazze Inteligência Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
