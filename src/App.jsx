import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Drawer>
        <Navbar />
        <Hero />
        <Footer />
      </Drawer>
    </>
  );
}
