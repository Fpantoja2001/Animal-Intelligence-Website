import './App.scss';
import BriefHistory from './components/brief-history';
import CaseStudies from './components/case-studies';
import Footer from './components/footer-page';
import LandingPage from './components/landingpage';
import MoreInDepth from './components/more-in-depth';
import Navbar from './components/navbar';

export default function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className='pages'>
        <LandingPage/>
        <BriefHistory/>
        <CaseStudies/>
        <MoreInDepth/>
        <Footer/>
      </div>
    </div>
  );
}
