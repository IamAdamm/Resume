import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Techstack from './components/Techstack';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Techstack/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
