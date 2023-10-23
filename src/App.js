import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import How from "./Components/How/How";
import About from './Components/About/About';
import Recipes from './Components/Recipes/Recipes';
import Testy from './Components/Testy/Testy';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <>
      <Home/>
      <How/>
      <About/>
      <Recipes/>
      <Testy/>
      <Contact/>
    </>
  );
}

export default App;
