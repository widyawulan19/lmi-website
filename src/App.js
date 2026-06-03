import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AOS from 'aos'
import 'aos/dist/aos.css';
import AosInit from './Utils/Aosinit';
import LmiLanding from './Pages/LmiLanding';
import AboutHero from './Pages/AboutHero';
import LmiGallery from './Pages/LmiGallery';
import Carrers from './Pages/Carrers/Carrers';
import Contact from './Pages/Contact';
import ArticlePages from './Pages/Article/ArticlePages';
import ArticleMain from './Pages/Article/ArticleMain';
// import CareerJobModal from './Pages/Carrers/CarrerJobModal';


function App() {
  return (
    <div className="App">
      <AosInit />
      <Routes>
        <Route path='/' element={<LmiLanding />} />
        <Route path='/about' element={<AboutHero />} />
        <Route path='/gallery' element={<LmiGallery />} />
        <Route path='/articles' element={<ArticlePages />} />
        <Route path='/articles/:slug' element={<ArticleMain />} />

        <Route path='/careers' element={<Carrers />} />
        {/* <Route path='/careers/:title' element={<CareerJobModal />} /> */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
