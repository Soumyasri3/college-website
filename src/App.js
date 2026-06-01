import React from 'react';
import Navbar from './components/NavBar/Navbar';
import College from './components/College/College';
import Programs from './components/Programs/Programs';
import Main from './components/Main/Main';
import About from './components/About/About';
import Tastimonials from './components/Tastimonials/Tastimonials'; // keep as you created it
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <div id="Main">
        <College />
        <Main subTitle="all programs" title="fuel your ambition" />
      </div>

      <div id="Programs">
        <Programs />
      </div>

      <div id="Campus">
        {/* Use your actual Campus component here if you have one */}
        <Main subTitle="Explore Campus" title="Our Campus" />
      </div>

      <div id="About">
        <About />
      </div>

      <div id="Tastimonials">
        <Main subTitle="TESTIMONIALS" title="Hear From Our Students" />
        <Tastimonials />
      </div>

      <div id="contact">
        <Main subTitle="Contact Us" title="Reach Out" />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
