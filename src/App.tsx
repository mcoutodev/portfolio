import { FC } from 'react';
import Hero from './components/hero';
import { Drawer, Navbar, Footer } from './components/layouts';

const App: FC = () => {
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
