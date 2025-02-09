import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './common/Navbar';
import { DarkModeProvider } from './common/DarkModeContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import MySkills from './components/MySkills/MySkills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import NotFound from './components/Home/NotFound';

function App() {
  return (
    <DarkModeProvider>
            <BrowserRouter> {/* Wrap your App with BrowserRouter */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/myskills" element={<MySkills />}></Route>
          <Route path="/myprojects" element={<Projects />}></Route>
          <Route path="/contactme" element={<ContactMe />}></Route>
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>    
    </DarkModeProvider>
  );
}

export default App;