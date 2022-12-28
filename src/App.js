import Navbar from './navegation/Navbar';
import Header from './header/Header';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

function App() {
  return (
   <div className="bg-jevon-dark-bg text-jevon-dark-tx font-latin">
   <Navbar />
   <Header />
   <About />
   <Portfolio />
   <Contact />
    </div>
  );
}

export default App;
