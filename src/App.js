import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Projects from './components/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ParticleBackground from './Particles/ParticleBackground';
import ScrollToTop from "react-scroll-to-top";
import { FaArrowAltCircleUp } from 'react-icons/fa'


function App() {


  return (
    <div className="App">

      <ParticleBackground></ParticleBackground>

      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/projects'>
            <Projects></Projects>
          </Route>
        </Switch>
        <ScrollToTop smooth color='#999' style={{ backgroundColor: '#444' }} />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
