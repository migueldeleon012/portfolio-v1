import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './assets/sass/app.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <section className="section about-skills">
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
