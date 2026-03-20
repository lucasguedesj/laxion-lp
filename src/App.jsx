import Nav from './components/Nav';
import Hero from './components/Hero';
import Values from './components/Values';
import Services from './components/Services';
import WhatsAppAI from './components/WhatsAppAI';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <Values />
        <Services />
        <WhatsAppAI />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
