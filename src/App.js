import './styling/App.scss';
import About from './Components/About';
import ContactBar from './Components/ContactBar';
import Header from './Components/Header';
import Landing from './Components/Landing';
import SkillsExperience from './Components/SkillsExperience';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactBar />
      <Landing />
      <About />
      <SkillsExperience />
      <Footer />
    </div>
  );
}

export default App;
