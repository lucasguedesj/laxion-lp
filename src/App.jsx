import Nav from './components/Nav';
import Hero from './components/Hero';
import Values from './components/Values';
import Services from './components/Services';
import SaaS from './components/SaaS';
import WhatsAppAI from './components/WhatsAppAI';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-metallic-shell overflow-x-hidden scroll-smooth min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Values />
        <Services />
        <SaaS />
        <WhatsAppAI />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
