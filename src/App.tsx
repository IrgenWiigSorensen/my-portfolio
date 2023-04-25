
import './App.scss';

import Navbar from './components/navbar/navbar.component';
import Home from './components/home/home.component';
import About from './components/about/about.component';
import NavOverlay from './components/nav-overlay/nav-overlay.component';
import Footer from './components/footer/footer.component';
import Skills from './components/skills/skills.component';
import Contact from './components/contact/contact.component';
import Projects from './components/projects/projects.component';

function App() {


  return (
    <>
      <NavOverlay/>
      <>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </>
    </>
  );
}

export default App;
