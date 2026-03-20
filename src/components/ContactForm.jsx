import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ nome: '', email: '', whatsapp: '', objetivo: 'Vender mais online' });
  const [status, setStatus] = useState(''); // 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const params = new URLSearchParams({
      'form-name': 'contato',
      nome: formData.nome,
      email: formData.email,
      whatsapp: formData.whatsapp,
      objetivo: formData.objetivo,
    });

    try {
      const response = await fetch('/', {
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

  return (
    <section className="py-24 relative" id="contato">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] -z-10"></div>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Inicie sua Trajetória</h2>
            <p className="text-gray-400">Preencha os dados abaixo e entraremos em contato para uma consultoria estratégica gratuita.</p>
          </div>
          {status === 'success' && (
            <div className="mb-6 p-4 bg-brand-primary/20 border border-brand-primary/50 rounded-xl text-brand-primary text-center">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center">
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
                <label className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                <input
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition disabled:opacity-50"
                  placeholder="Seu nome"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Corporativo</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition disabled:opacity-50"
                  placeholder="exemplo@empresa.com"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
              <input
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition disabled:opacity-50"
                placeholder="(00) 00000-0000"
                type="tel"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Objetivo Principal</label>
              <select
                name="objetivo"
                value={formData.objetivo}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition text-gray-400 disabled:opacity-50"
              >
                <option>Vender mais online</option>
                <option>Automatizar atendimento</option>
                <option>Melhorar posicionamento (SEO)</option>
                <option>Escalar anúncios (Tráfego)</option>
                <option>Outro</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-brand-primary hover:bg-brand-accent text-brand-dark font-extrabold rounded-xl transition-all transform hover:-translate-y-1 shadow-xl disabled:opacity-50 disabled:transform-none"
            >
              {status === 'loading' ? 'Enviando...' : 'Solicitar Consultoria Gratuita'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
