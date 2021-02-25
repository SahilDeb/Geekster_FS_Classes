import './App.css';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Section from './Components/Section';

function App() {
  return (
    <div className="App">
      <Navbar name="BRAND"/>
      <Jumbotron/>
      <Feature/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
