import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TwoWaysToEngage from './components/TwoWaysToEngage';
import LeoQuotes from './components/LeoQuotes';
import Compass from './components/Compass';
import FormationLabs from './components/FormationLabs';
import StrategyPilots from './components/StrategyPilots';
import MissionImpact from './components/MissionImpact';
import KairosLabs from './components/KairosLabs';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <TwoWaysToEngage />
      <LeoQuotes />
      <Compass />
      <FormationLabs />
      <StrategyPilots />
      <MissionImpact />
      <KairosLabs />
      <About />
      <Contact />

      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        Kairos Lux Works LLC · Dallas, Texas · Catholic Social Teaching & AI consulting
      </footer>
    </div>
  );
}

export default App;
