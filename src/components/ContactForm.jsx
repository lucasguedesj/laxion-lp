import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ nome: '', email: '', whatsapp: '', objetivo: 'Vender mais online' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const params = new URLSearchParams({
      'form-name': 'contato',
      'bot-field': '',
      nome: formData.nome,
      email: formData.email,
      whatsapp: formData.whatsapp,
      objetivo: formData.objetivo,
    });

    try {
      const response = await fetch('/form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', email: '', whatsapp: '', objetivo: 'Vender mais online' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputBase =
    'w-full bg-black/25 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/45 outline-none transition disabled:opacity-50 focus:bg-black/35 focus:border-[#8a05be]/50 focus:ring-1 focus:ring-[#8a05be]/30';

  return (
    <section className="py-24 relative bg-transparent" id="contato">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dark-glass-card p-8 md:p-12 card-soft-shadow animate-card relative z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary-container/15 rounded-full blur-[80px] -z-10 pointer-events-none" />
          <div className="text-center mb-10">
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold mb-4 tracking-[-0.02em] text-white">Inicie sua trajetória</h2>
            <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
              Preencha os dados abaixo e entraremos em contato para uma consultoria estratégica gratuita.
            </p>
          </div>
          {status === 'success' && (
            <div className="mb-6 p-4 rounded-lg bg-primary-container/25 border border-[#8a05be]/40 text-white text-center text-sm font-medium">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 rounded-lg bg-red-950/80 border border-red-500/40 text-red-100 text-center text-sm">
              Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="bot-field">Não preencha</label>
              <input id="bot-field" name="bot-field" type="text" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[0.75rem] font-semibold text-white/70 mb-2">Nome completo</label>
                <input
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className={inputBase}
                  placeholder="Seu nome"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[0.75rem] font-semibold text-white/70 mb-2">Email corporativo</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className={inputBase}
                  placeholder="exemplo@empresa.com"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block text-[0.75rem] font-semibold text-white/70 mb-2">WhatsApp</label>
              <input
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className={inputBase}
                placeholder="(00) 00000-0000"
                type="tel"
              />
            </div>
            <div>
              <label className="block text-[0.75rem] font-semibold text-white/70 mb-2">Objetivo principal</label>
              <select
                name="objetivo"
                value={formData.objetivo}
                onChange={handleChange}
                disabled={status === 'loading'}
                className={`${inputBase} cursor-pointer`}
              >
                <option className="bg-[#1a0a22]">Vender mais online</option>
                <option className="bg-[#1a0a22]">Automatizar atendimento</option>
                <option className="bg-[#1a0a22]">Melhorar posicionamento (SEO)</option>
                <option className="bg-[#1a0a22]">Escalar anúncios (Tráfego)</option>
                <option className="bg-[#1a0a22]">Outro</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 btn-primary font-bold text-base disabled:opacity-50 disabled:transform-none"
            >
              {status === 'loading' ? 'Enviando...' : 'Solicitar consultoria gratuita'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
