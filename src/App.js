import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AOS from 'aos'
import 'aos/dist/aos.css';
import AosInit from './Utils/Aosinit';
import LmiLanding from './Pages/LmiLanding';


function App() {
  return (
    <div className="App">
      <AosInit />
      <Routes>
        {/* <Route path='/' element={<LandingPage />} /> */}
        <Route path='/' element={<LmiLanding />} />
      </Routes>
    </div>
  );
}

export default App;
