import './App.css';
import { Article } from './components/Article';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
