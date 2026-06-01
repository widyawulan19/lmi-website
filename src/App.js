import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AOS from 'aos'
import 'aos/dist/aos.css';
import AosInit from './Utils/Aosinit';
import LmiLanding from './Pages/LmiLanding';
import AboutHero from './Pages/AboutHero';


function App() {
  return (
    <div className="App">
      <AosInit />
      <Routes>
        {/* <Route path='/' element={<LandingPage />} /> */}
        <Route path='/' element={<LmiLanding />} />

        <Route path='/about' element={<AboutHero />} />
      </Routes>
    </div>
  );
}

export default App;
