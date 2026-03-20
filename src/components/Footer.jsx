import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo className="h-10 w-auto mb-6" />
            <p className="text-gray-500 max-w-sm mb-6">
              Transformando o futuro de negócios através de inteligência artificial aplicada ao marketing e vendas.
            </p>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2023 Laxion Inteligência Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
