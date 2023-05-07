import './App.scss';
import BriefHistory from './components/brief-history';
import Footer from './components/footer-page';
import LandingPage from './components/landingpage';
import Navbar from './components/navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='pages'>
        <LandingPage/>
        <BriefHistory/>
        <Footer/>
      </div>
    </div>
  );
}
