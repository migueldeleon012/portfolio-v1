import { useEffect } from 'react';
import Aos from 'aos';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './assets/css/style.css';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 200 });
  }, []);

  return (
    <div className="App">
      <Navbar data-aos="fade-up" />
      <Header data-aos="fade-up" />
      <section className="section about-skills" data-aos="fade-up">
        <About />
        <Skills />
      </section>
      <Resume />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
