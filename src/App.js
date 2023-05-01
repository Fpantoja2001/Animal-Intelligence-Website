import './App.scss';
import LandingPage from './components/landingpage';
import Navbar from './components/navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
    </div>
  );
}
