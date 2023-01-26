import React from 'react';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
    <div className='App '>
      <Header />
     <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </main>
  )
}

export default App;
