import React from 'react';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Drawer>
        <Navbar />
        <Hero />
        <Footer />
      </Drawer>
    </>
  );
};

export default App;
