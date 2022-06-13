import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainSection } from "./components/MainSection";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects/Projects";


function App() {
  return (
    <BrowserRouter basename="/portfolio">
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
